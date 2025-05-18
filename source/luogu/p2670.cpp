#include <iostream>
#include <cstdio>
#include <cmath>
#include <ctime>
#include <string>
#include <cstring>

using namespace std;

int main(){
    //map
    const int maxn = 100+5;
    int a[maxn][maxn];
    memset(a,0,sizeof(a));
    //inp
    int n,m;
    cin>>n>>m;
    const char bomb='*';
    char inp;
    for(int i=1;i<=n;i++){
        for(int j=1;j<=m;j++){
            cin>>inp;
            if(inp==bomb){
                a[i][j]=-1;
            }
        }
    }
    //outp
    for(int i=1;i<=n;i++){
        for(int j=1;j<=m;j++){
            //bomb
            if(a[i][j]==-1){
                cout<<'*';
                continue;
            }
            //calc
            for(int x=-1;x<=1;x++){
                for(int y=-1;y<=1;y++){
                    if(x==0&&y==0){
                        continue;
                    }
                    if(a[i+x][j+y]==-1){
                        a[i][j]++;
                    }
                }
            }
            //outp
            cout<<a[i][j];
        }
        //new line
        cout<<"\n";
    }
}