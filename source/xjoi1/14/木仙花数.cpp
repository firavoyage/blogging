#include "iostream"
using namespace std;
int main(){
  int n,r=0,e=0;
  cin>>n;
  for(int i=1;i*i<=n;i++){
    r+=i;
    e=i*i+i-1;
  }
  if(e>n){
    r-=e-n;
  }
  cout<<r;
}
