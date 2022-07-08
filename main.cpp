#include <iostream>
#include <string>

using namespace std;

int *create_array(size_t size, int init_value = 0) {
    int *new_storage {nullptr};
    new_storage = new int[size];

    for (size_t i; i < size; i++) 
        *(new_storage + i) = init_value;

    return new_storage;
}

void display(const int *const array, size_t size) {
    for (size_t i{}; i < size; i++) {
        cout << array[i] << endl;
    }
}


int main() {
    int *my_arr;
    int init_val{20};
    size_t size{10};
    my_arr = create_array(size, init_val);

    display(my_arr, size);

    delete [] my_arr;
    return 0;
}