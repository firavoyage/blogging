#include "iostream"
using namespace std;
int main(){
  int y,k,n;
  cin>>y>>k>>n;
  bool f=1;
  for(int i=((y%k==0)?0:(k-y%k));i+y<=n;i+=k){
    f=0;
    cout<<i<<' ';
  }
  if(f) cout<<-1;
}
