//rust:cult of god
#include<iostream>
#include<thread>
#include<vector>

static int MONEY = 0;

void deposit_money(int amount) {
    for (int i = 0; i < amount; ++i)
        ++MONEY;
        // Runtime data race.  Some increments can be ignored.
}

int main() {
    std::vector<std::thread> threads;

    for(int i = 0; i < 100; ++i)
        threads.emplace_back(deposit_money, 10000);

    for(int i = 0; i < 100; ++i)
        threads[i].join();

    // The result might not be 1000000 due to the data race.
    std::cout << MONEY;
}