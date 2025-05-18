#include <iostream>

// Helper struct for the iterator
#define EACH_HELPER(name, start, end) \
    for (int name = start, _end = end, _step = (start <= end) ? 1 : -1; \
         _step > 0 ? name <= _end : name >= _end; \
         name += _step)

// Main macro
#define each(name, a, b) EACH_HELPER(name, ((a) <= (b) ? (a) : (b)), \
                                ((a) <= (b) ? (b) : (a)))

int main() {
    // Counts up from 1 to 5
    std::cout << "1 to 5: ";
    each(i, 1, 5) {
        std::cout << i << " ";
    }
    std::cout << "\n";

    // Counts down from 5 to 1
    std::cout << "5 to 1: ";
    each(i, 5, 1) {
        std::cout << i << " ";
    }
    std::cout << "\n";

    // Works with any variable name
    std::cout << "8964 to 1949: ";
    each(year, 8964, 1949) {
        std::cout << year << " ";
    }
    std::cout << "\n";

    // Edge case (a == b)
    std::cout << "3 to 3: ";
    each(i, 3, 3) {
        std::cout << i << " ";
    }
    std::cout << "\n";

    return 0;
}