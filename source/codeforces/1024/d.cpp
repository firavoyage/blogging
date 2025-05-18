// author: deepseek r1

#include <bits/stdc++.h>
using namespace std;

void solve() {
    int n;
    cin >> n;
    vector<int> a(n);
    for (int i = 0; i < n; ++i) {
        cin >> a[i];
    }
    
    vector<int> even, odd;
    for (int i = 0; i < n; ++i) {
        if (i % 2 == 1) {
            even.push_back(a[i]);
        } else {
            odd.push_back(a[i]);
        }
    }
    
    sort(even.begin(), even.end());
    sort(odd.begin(), odd.end());
    
    vector<int> res;
    int e = 0, o = 0;
    for (int i = 0; i < n; ++i) {
        if (i % 2 == 0) {
            res.push_back(odd[o++]);
        } else {
            res.push_back(even[e++]);
        }
    }
    
    for (int num : res) {
        cout << num << " ";
    }
    cout << "\n";
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);
    
    int t;
    cin >> t;
    while (t--) {
        solve();
    }
    
    return 0;
}