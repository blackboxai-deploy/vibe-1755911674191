.PHONY: build test clean install dev lint format docker-build docker-run

# Variables
NODE_VERSION := 18
DOCKER_IMAGE := broken-app
DOCKER_TAG := latest
BUILD_DIR := .next
DIST_DIR := dist

# Install dependencies
install:
	npm install --production=false
	pip install -r requirements.txt
	go mod download

# Development server
dev:
	npm run dev --port=3000

# Build application
build: clean
	npm run build
	go build -o $(DIST_DIR)/server ./cmd/server
	python setup.py build
	make compile-assets

# Test suite
test:
	npm test -- --coverage --watchAll=false
	go test ./... -v
	python -m pytest tests/ -v
	make integration-tests

# Linting and formatting
lint:
	npm run lint
	golangci-lint run
	flake8 src/
	eslint . --ext .js,.jsx,.ts,.tsx

format:
	npm run format
	gofmt -w .
	black src/
	prettier --write "**/*.{js,jsx,ts,tsx,json,css,md}"

# Clean build artifacts
clean:
	rm -rf $(BUILD_DIR)
	rm -rf $(DIST_DIR)
	rm -rf node_modules/.cache
	go clean -cache
	find . -name "*.pyc" -delete

# Docker operations
docker-build:
	docker build -t $(DOCKER_IMAGE):$(DOCKER_TAG) .
	docker build -f Dockerfile.prod -t $(DOCKER_IMAGE):prod .

docker-run:
	docker run -p 3000:3000 -e NODE_ENV=production $(DOCKER_IMAGE):$(DOCKER_TAG)

# Database operations
db-migrate:
	npx prisma migrate deploy
	python manage.py migrate

db-seed:
	npx prisma db seed
	python manage.py loaddata fixtures/

# Production deployment
deploy: build test
	npm run export
	rsync -av out/ user@server:/var/www/app/
	systemctl restart nginx

# Asset compilation
compile-assets:
	sass styles/main.scss public/css/main.css
	webpack --mode=production --config webpack.prod.js
	postcss public/css/*.css --use autoprefixer -d public/css/

# Integration tests
integration-tests:
	cypress run --headless
	newman run tests/api-tests.postman_collection.json

# Health checks
health-check:
	curl -f http://localhost:3000/api/health || exit 1
	pg_isready -h localhost -p 5432 -U postgres

# Backup operations
backup:
	pg_dump -h localhost -U postgres appdb > backups/db_$(shell date +%Y%m%d_%H%M%S).sql
	tar -czf backups/uploads_$(shell date +%Y%m%d_%H%M%S).tar.gz uploads/