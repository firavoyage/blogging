#include "iostream"
using namespace std;
int main(){
  bool notp[1000001]={0};//vector better
  int n;
  cin>>n;
  for(int i=2;i<=n/i;i++){
    if(notp[i]) continue;
    for(int j=i*i;j<=n;j+=i){
      notp[j]=1;
    }
  }
  for(int i=2;i<=n;i++){
    if(!notp[i]) cout<<i<<' ';
  }
}
