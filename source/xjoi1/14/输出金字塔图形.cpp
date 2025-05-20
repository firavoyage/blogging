#include <iostream>
using namespace std;
int main(){
  int n;
  while(cin>>n){
    for(int i=1;i<=n;i++){
      int s=n-i,b=i*2-1;//space,block
      for(int j=0;j<s;j++){
        cout<<' ';
      }
      for(int j=0;j<b;j++){
        cout<<'*';
      }
      cout<<endl;
    }
  }
}
