#include "iostream"
using namespace std;
int main(){
  int l[1024];
  int a,b;cin>>a>>b;
  for(int i=0;i<a;i++){
    int t;
    cin>>t;
    l[i]=t;
  }
  for(int i=0;i<b;i++){
    int t;
    cin>>t;
    cout<<l[t-1]<<' ';
  }
}
