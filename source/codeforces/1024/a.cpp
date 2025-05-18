// author: deepseek r1

#include <iostream>
using namespace std;

int main() {
    int t;
    cin >> t;
    while (t--) {
        int n, m, p, q;
        cin >> n >> m >> p >> q;
        if (n % p == 0) {
            int k = n / p;
            if (k * q == m) {
                cout << "YES\n";
            } else {
                cout << "NO\n";
            }
        } else {
            cout << "YES\n";
        }
    }
    return 0;
}