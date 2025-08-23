#include <iostream>
#include <vector>
#include <string>
#include <memory>
#include "utils.h"
#include "nonexistent_header.h"

using namespace std;

// Missing semicolon here
class Calculator {
private:
    int value
    
public:
    Calculator(int val) : value(val) {}
    
    // Wrong return type - should be int
    string add(int x) {
        return value + x;
    }
    
    // Undefined function declaration
    int multiply(int x, int y, int z);
};

// Function with missing return statement
int divide(int a, int b) {
    if (b == 0) {
        throw runtime_error("Division by zero");
    }
    // Missing return statement
}

// Template function with syntax error
template<typename T>
T maximum(T a, T b {  // Missing closing parenthesis
    return (a > b) ? a : b;
}

// Function using undefined variable
void printMessage() {
    cout << "Hello " << undefined_variable << endl;
}

// Memory leak issue
vector<int>* createVector() {
    vector<int>* vec = new vector<int>();
    vec->push_back(1);
    vec->push_back(2);
    return vec;
    // No delete called anywhere
}

// Infinite recursion
int factorial(int n) {
    return n * factorial(n - 1);  // No base case
}

// Wrong namespace usage
void processData() {
    std::vector<int> data;
    wrongnamespace::sort(data.begin(), data.end());
}

// Missing implementation for declared function
extern int externalFunction(int x);

void callExternal() {
    int result = externalFunction(5);  // Will cause linker error
}