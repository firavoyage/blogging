#include "iostream"
using namespace std;
int main(){
  int n,m;
  cin>>n>>m;
  bool a[10000]={0};
  int l,r;
  for(int i=0;i<m;i++){
    cin>>l>>r;
    for(int j=l;j<=r;j++){
      a[j]=1;
    }
    int cnt=0;
    for(int j=0;j<=n;j++){
      if(a[j]) cnt++;
    }
    cout<<cnt<<endl;
  }
}
