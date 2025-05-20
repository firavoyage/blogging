//11
//1024201
#include <iostream>
using namespace std;
int main() {
  int n,x;
  cin>>n>>x;
  int r=0;
  for(int i=1;i<=n;i++){
    int t=i;
    while(t>0){
      if(t%10==x) r++;
      t/=10;
    }
  }
  cout<<r;
  return 0;
}
