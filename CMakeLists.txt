cmake_minimum_required(VERSION 3.20)
project(TestProject VERSION 1.0.0 LANGUAGES CXX)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

# Missing package that doesn't exist
find_package(NonExistentLib REQUIRED)

# Incorrect library name
find_package(OpenCV REQUIRED)
target_link_libraries(main ${OpenCV_LIBS})

# Source files with wrong paths
set(SOURCES
    src/main.cpp
    src/missing_file.cpp
    src/utils/helper.cpp
    nonexistent/path/file.cpp
)

# Executable with dependency issues
add_executable(main ${SOURCES})

# Wrong include directory
target_include_directories(main PRIVATE 
    include/
    /wrong/absolute/path
    ${BOOST_INCLUDE_DIRS}
)

# Linking non-existent libraries
target_link_libraries(main 
    pthread
    nonexistent_lib
    ${MISSING_VARIABLE}
)

# Circular dependency
add_library(libA src/libA.cpp)
add_library(libB src/libB.cpp)
target_link_libraries(libA libB)
target_link_libraries(libB libA)

# Wrong compiler flags
set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -invalid-flag -Werror")

# Missing subdirectory
add_subdirectory(missing_subdir)