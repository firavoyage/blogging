// author: deepseek r1

#include <vector>
#include <iostream>
using namespace std;

void generate_grid(int n, vector<vector<int>>& grid) {
    vector<pair<int, int>> dirs = {{0, 1}, {1, 0}, {0, -1}, {-1, 0}}; // right, down, left, up
    int x = n / 2;
    int y = n / 2;
    if (n % 2 == 0) {
        x--;
        y--;
    }
    int num = 0;
    grid[x][y] = num++;
    int step = 1;
    int dir = 0;
    while (num < n * n) {
        for (int i = 0; i < 2; ++i) {
            for (int s = 0; s < step; ++s) {
                x += dirs[dir].first;
                y += dirs[dir].second;
                if (x >= 0 && x < n && y >= 0 && y < n && grid[x][y] == -1) {
                    grid[x][y] = num++;
                } else {
                    x -= dirs[dir].first;
                    y -= dirs[dir].second;
                    break;
                }
            }
            dir = (dir + 1) % 4;
        }
        step++;
    }
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int t;
    cin >> t;
    while (t--) {
        int n;
        cin >> n;
        vector<vector<int>> grid(n, vector<int>(n, -1));
        generate_grid(n, grid);
        for (int i = 0; i < n; ++i) {
            for (int j = 0; j < n; ++j) {
                cout << grid[i][j] << " ";
            }
            cout << "\n";
        }
    }
    return 0;
}