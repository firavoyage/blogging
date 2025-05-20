#include "iostream"
using namespace std;
int main(){
    int a[10000];
    int n;
    cin>>n;
    for(int i=0;i<n;i++){
      cin>>a[n-i-1];
    }
    for(int i=0;i<n;i++){
      cout<<a[i]<<' ';
    }
}
