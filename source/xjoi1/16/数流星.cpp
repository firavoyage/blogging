#include "iostream"
using namespace std;
int main(){
  int n,q;
  cin>>n>>q;
  int a[10000]={0};
  for(int i=0;i<n;i++){
    int t;
    cin>>t;
    a[t]++;
  }
  int l,r;
  for(int i=0;i<q;i++){
    cin>>l>>r;
    int cnt=0;
    for(int j=l;j<=r;j++){
      cnt+=a[j];
    }
    cout<<cnt<<endl;
  }
}
