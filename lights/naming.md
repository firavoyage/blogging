> author: deepseek v3
>
> prompt: variable naming guide in oi

In competitive programming (OI, or Olympiad in Informatics), variable naming should be **clear, concise, and consistent** to improve code readability and reduce errors during contests. Here’s a practical guide:

### **1. General Principles**

- **Be meaningful**: Names should describe the variable's purpose.
- **Keep it short but clear**: Avoid overly long names, but ensure they are understandable.
- **Follow a consistent style**: Stick to one naming convention (e.g., `snake_case` or `camelCase`).

### **2. Common Naming Conventions**

#### **a. Data Structures & Algorithms**

| Variable Purpose       | Recommended Name | Example                 |
| ---------------------- | ---------------- | ----------------------- |
| Array / List           | `a`, `arr`       | `int a[N];`             |
| Dynamic Array (Vector) | `vec`            | `vector<int> vec;`      |
| String                 | `s`, `str`       | `string s;`             |
| Graph (Adjacency List) | `g`, `adj`       | `vector<int> adj[N];`   |
| Queue / Stack          | `q`, `st`        | `queue<int> q;`         |
| Binary Indexed Tree    | `bit`, `fenwick` | `int bit[N];`           |
| Segment Tree           | `seg`, `st`      | `int seg[4*N];`         |
| Disjoint Set (DSU)     | `parent`, `dsu`  | `int parent[N];`        |
| Hash Set / Map         | `s`, `mp`        | `unordered_set<int> s;` |

#### **b. Loops & Indices**

| Variable Purpose             | Recommended Name | Example                 |
| ---------------------------- | ---------------- | ----------------------- |
| Loop index (general)         | `i`, `j`, `k`    | `for (int i = 0; ...)`  |
| Loop index (nested)          | `ii`, `jj`       | `for (int ii = 0; ...)` |
| Number of elements           | `n`              | `int n; cin >> n;`      |
| Number of queries            | `q`              | `int q; cin >> q;`      |
| Left / Right pointers        | `l`, `r`         | `int l = 0, r = n - 1;` |
| Middle index (binary search) | `mid`            | `mid = (l + r) / 2;`    |

#### **c. Math & Counters**

| Variable Purpose  | Recommended Name | Example                  |
| ----------------- | ---------------- | ------------------------ |
| Sum               | `sum`            | `long long sum = 0;`     |
| Maximum / Minimum | `mx`, `mn`       | `int mx = INT_MIN;`      |
| Counter           | `cnt`            | `int cnt = 0;`           |
| Frequency Map     | `freq`           | `map<int, int> freq;`    |
| Modulo value      | `mod`            | `const int mod = 1e9+7;` |

#### **d. Graph-Specific**

| Variable Purpose | Recommended Name | Example                         |
| ---------------- | ---------------- | ------------------------------- |
| Number of nodes  | `n`              | `int n;`                        |
| Number of edges  | `m`              | `int m;`                        |
| Visited array    | `vis`            | `bool vis[N];`                  |
| Distance array   | `dist`           | `int dist[N];`                  |
| Edge weight      | `w`              | `struct Edge { int u, v, w; };` |

### **3. Style Choices**

- **`snake_case` (common in C++ competitive programming):**
  ```cpp
  int max_element;
  vector<int> parent_array;
  ```
- **`camelCase` (less common but acceptable):**
  ```cpp
  int maxElement;
  vector<int> parentArray;
  ```
- **ALL_CAPS for constants:**
  ```cpp
  const int INF = 1e9;
  const int MOD = 998244353;
  ```

### **4. Avoid These!**

- Single-letter names without context (except for loop counters like `i, j`).
- Names that clash with keywords (`int class;` ❌).
- Overly complex names (`number_of_elements_in_the_array` ❌ → `n` or `arr_size` ✅).

### **5. Example (Good Practice)**

```cpp
#include <bits/stdc++.h>
using namespace std;

const int INF = 1e9;
const int N = 1e5 + 5;

int n, m;
vector<int> adj[N];
bool vis[N];
int dist[N];

void bfs(int start) {
    queue<int> q;
    q.push(start);
    vis[start] = true;
    dist[start] = 0;

    while (!q.empty()) {
        int u = q.front();
        q.pop();
        for (int v : adj[u]) {
            if (!vis[v]) {
                vis[v] = true;
                dist[v] = dist[u] + 1;
                q.push(v);
            }
        }
    }
}

int main() {
    cin >> n >> m;
    for (int i = 0; i < m; ++i) {
        int u, v;
        cin >> u >> v;
        adj[u].push_back(v);
        adj[v].push_back(u);
    }
    bfs(1);
    cout << dist[n] << endl;
    return 0;
}
```

### **Final Tips**

- **Be consistent** across your code.
- **Prioritize speed** in contests (shorter names = faster typing).
- **Comment if necessary** for complex logic.

This guide should help you write cleaner, more efficient code in OI competitions! 🚀
