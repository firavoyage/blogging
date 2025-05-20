#include "iostream"
using namespace std;
int main(){
  int n,t;
  cin>>n>>t;
  bool f=1;
  int minc=2000000000;
  for(int i=0;i<n;i++){
    int c,time;
    cin>>c>>time;
    if(time<=t){
      f=0;
      if(c<minc) minc=c;
    }
  }
  if(f) cout<<"TLE";
  else cout<<minc;
}
