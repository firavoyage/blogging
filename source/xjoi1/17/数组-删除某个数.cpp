#include "iostream"
using namespace std;
int main(){
  int n;
  while(cin>>n){
    int a[100];
    for(int i=0;i<n;i++){
      cin>>a[i];
    }
    int m;
    cin>>m;
    int id=-1;
    for(int i=0;i<n;i++){
      if(a[i]==m){
        id=i;
        break;
      }
    }
    for(int i=0;i<n;i++){
      if(i==id) continue;
      cout<<a[i]<<' ';
    }
  }
}
