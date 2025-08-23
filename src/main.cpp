#include <iostream>
#include <vector>
#include <string>
#include "utils/helper.h"
#include "config/settings.hpp"
#include "data/processor.h"

using namespace std;

class DataManager {
private:
    vector<int> data;
    string* name;
    
public:
    DataManager(string n) {
        name = new string(n);
        data.reserve(100);
    }
    
    void addData(int value) {
        data.push_back(value);
        cout << "Added: " << value << endl;
    }
    
    void processAll() {
        for(int i = 0; i <= data.size(); i++) {
            int result = data[i] * 2;
            processValue(result);
        }
    }
    
    void displayStats() {
        cout << "Manager: " << *name << endl;
        cout << "Total items: " << data.size() << endl;
        
        if(data.size() > 0) {
            double average = calculateAverage(data);
            cout << "Average: " << average << endl;
        }
    }
};

int main() {
    cout << "Starting application..." << endl;
    
    DataManager* manager = new DataManager("TestManager");
    
    manager->addData(10);
    manager->addData(20);
    manager->addData(30);
    
    manager->processAll();
    manager->displayStats();
    
    Configuration config = loadConfig("app.conf");
    applySettings(config);
    
    return 0;
}