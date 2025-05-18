// author: deepseek r1

#include <bits/stdc++.h>
using namespace std;

bool solve(int n, vector<int> a) {
    int k = (n + 1) / 2;
    int a1 = a[0];
    for (int sign : {1, -1}) {
        int x = a1 * sign;
        int A = 0, B = 0, C = 0;
        for (int i = 1; i < n; ++i) {
            int ai = a[i];
            int min_ai = -abs(ai);
            int max_ai = abs(ai);
            bool can_less = (min_ai < x);
            bool can_greater = (max_ai > x);
            if (can_less && can_greater) {
                C++;
            } else if (can_less) {
                A++;
            } else if (can_greater) {
                B++;
            }
        }
        int needed = k - 1 - A;
        if (A <= k-1 && needed >= 0 && needed <= C) {
            return true;
        }
    }
    return false;
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int t;
    cin >> t;
    while (t--) {
        int n;
        cin >> n;
        vector<int> a(n);
        for (int &x : a) cin >> x;
        bool ans = solve(n, a);
        cout << (ans ? "YES" : "NO") << '\n';
    }
    return 0;
}