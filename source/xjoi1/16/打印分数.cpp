#include "iostream"
using namespace std;
int main(){
  int n;
  while(cin>>n){
    int a[100000];
    double all=0;
    for(int i=0;i<n;i++){
      cin>>a[i];
      all+=a[i];
    }
    for(int i=0;i<n;i++){
      if(a[i]<all/n) cout<<a[i]<<' ';
    }
    cout<<endl;
  }
}
