#include "iostream"
using namespace std;
int main(){
  int n;
  while(cin>>n){
    int a[10000];
    for(int i=0;i<n;i++){
      cin>>a[i];
    }
    int m;cin>>m;
    int f=1;
    for(int i=0;i<n;i++){
      if(a[i]==m){
        f=0;
        cout<<i<<endl;
        break;
      }
    }
    if(f) cout<<"No"<<endl;
  }
}
