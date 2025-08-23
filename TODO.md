# Build Issues Project - TODO

## Project Overview
This project has been created with intentional build issues to test debugging and fixing processes.

## Issues to Debug and Fix

### 1. TypeScript Configuration Issues
- [ ] Fix invalid JSON syntax in `tsconfig.json` (comments and trailing commas)
- [ ] Remove duplicate and conflicting path mappings
- [ ] Fix missing comma syntax error

### 2. React Component Issues (`src/app/page.tsx`)
- [ ] Fix missing import for `NonExistentComponent` 
- [ ] Fix missing import for `calculateSum` from math utils
- [ ] Fix undefined `fetchUserData` function
- [ ] Fix undefined `someVariable` in useEffect
- [ ] Fix type mismatch in `handleCalculation` (returns number instead of string)
- [ ] Fix missing `await` in `handleSubmit` function
- [ ] Fix missing dependency array in useEffect
- [ ] Fix unclosed JSX div tag
- [ ] Remove usage of non-existent component

### 3. API Route Issues (`src/app/api/users/route.ts`)
- [ ] Fix import of non-existent `validateUser` function
- [ ] Fix undefined `fetchUsersFromDB` function
- [ ] Fix type mismatch in GET function (should return object, not string)
- [ ] Fix error handling with unknown error type
- [ ] Fix POST function returning string instead of NextResponse
- [ ] Export the DELETE function properly

### 4. Component Issues (`src/components/BrokenComponent.tsx`)
- [ ] Fix duplicate property `count` in Props interface
- [ ] Fix type mismatch in useState initialization (number vs string array)
- [ ] Fix parameter type mismatch in handleClick function
- [ ] Fix missing return statement in renderContent function
- [ ] Fix wrong type check (should check for number, not boolean)
- [ ] Fix missing key prop in map function
- [ ] Fix undefined variable `someUndefinedVar`
- [ ] Add missing export statement
- [ ] Fix wrong prop being passed to handleClick

### 5. CSS Issues (`src/styles/broken.css`)
- [ ] Add missing semicolon after background-color
- [ ] Fix invalid CSS property `font-weight-bold`
- [ ] Fix invalid border-radius value
- [ ] Fix invalid selector syntax (double `>`)
- [ ] Add missing closing brace for `.footer`
- [ ] Fix invalid CSS function `invalid-function`
- [ ] Fix invalid media query condition
- [ ] Fix invalid percentage value in keyframes (`50.5.5%`)

### 6. Missing Files and Dependencies
- [ ] Create missing `@/components/NonExistentComponent`
- [ ] Create missing `@/utils/math-utils` with `calculateSum` function
- [ ] Create missing `@/lib/validation` with `validateUser` function
- [ ] Install any missing dependencies if needed

## Testing Steps
- [ ] **AUTOMATIC**: Process placeholder images (placehold.co URLs) → AI-generated images
  - This step executes automatically when placeholders are detected
  - No manual action required - system triggers automatically
  - Ensures all images are ready before testing
- [ ] Run `npm run build -- --no-lint` to identify build errors
- [ ] Fix TypeScript compilation errors
- [ ] Fix linting issues
- [ ] Test API endpoints with curl
- [ ] Verify components render correctly
- [ ] Test user interactions and functionality

## Expected Outcome
After fixing all issues:
- Project should build successfully without errors
- All TypeScript types should be correct
- Components should render properly
- API routes should work correctly  
- CSS should be valid and apply correctly

## Build Command
```bash
npm run build -- --no-lint
```

## Notes
- This is an intentionally broken project for testing debugging skills
- Each issue represents common problems found in real projects
- Start with configuration files (tsconfig.json) then move to components
- Use TypeScript compiler and linter output to identify issues systematically