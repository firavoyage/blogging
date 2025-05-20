#include "iostream"
using namespace std;
int main(){
  int n;
  cin>>n;
  int a[10000];
  for(int i=0;i<n;i++){
    cin>>a[i];
  }
  int m;
  cin>>m;
  int aa,b,c;
  for(int i=0;i<m;i++){
    cin>>aa>>b>>c;
    for(int i=aa-1;i<=b-1;i++) a[i]+=c;
  }
  for(int i=0;i<n;i++){
    cout<<a[i]<<' ';
  }
}
