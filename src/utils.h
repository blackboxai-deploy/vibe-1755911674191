#ifndef UTILS_H
#define UTILS_H

#include <string>
#include <vector>
#include "config.h"

// Missing semicolon intentionally
class MathUtils {
public:
    static int add(int a, int b);
    static double divide(int a, int b);
    static std::vector<int> fibonacci(int n)
    
    // Wrong return type
    static void calculateArea(double radius);
    
private:
    static const int MAX_VALUE = 1000
};

// Undefined class reference
class StringHelper {
public:
    static std::string processText(const std::string& input);
    static bool validateInput(const UndefinedType& data);
    
    // Missing const
    static std::string& getReference(std::string input);
};

// Template with issues
template<typename T>
class Container {
public:
    Container(int size);
    ~Container();
    
    T& get(int index);
    void set(int index, const T& value);
    
private:
    T* data;
    int size;
    // Missing copy constructor and assignment operator
};

// Function declarations with parameter mismatches
extern int globalCounter;
extern void initializeSystem(int argc, char* argv[]);
extern bool processFile(const std::string& filename, int mode = DEFAULT_MODE);

// Macro with syntax error
#define CALCULATE_SQUARE(x) ((x) * (x)
#define LOG_ERROR(msg) std::cout << "ERROR: " << msg << std::endl;

// Namespace issues
namespace Utils {
    void helperFunction();
    extern int sharedVariable;
}

// Forward declaration without definition
class DatabaseConnection;
void connectToDatabase(DatabaseConnection* conn);

#endif