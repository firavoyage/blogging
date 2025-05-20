#include "iostream"
using namespace std;
int main(){
  int n;
  cin>>n;
  int a[10000];
  for(int i=0;i<n;i++){
    cin>>a[i];
  }
  for(int i=0;i<n;i++){
    int now=0;
    for(int j=0;j<n;j++){
      if(a[i]==a[j]) now++;
    }
    if(now>n/2){
      cout<<a[i];
      break;
    }
  }
}
