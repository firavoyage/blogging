#include "iostream"
using namespace std;
int main(){
  int a,b;
  cin>>a>>b;
  int mx1=0,mx2=0;
  for(int i=0;i<a;i++){
    int t;
    cin>>t;
    if(t>mx1) mx1=t;
  }
  for(int i=0;i<b;i++){
    int t;
    cin>>t;
    if(t>mx2) mx2=t;
  }
  cout<<mx1+mx2;
}
