#include "iostream"
using namespace std;
int main(){
  char a;
  cin>>a;
  for(int i=0;i<=a-'A';i++){
    for(int j=0;j<a-'A'-i;j++) cout<<' ';
    for(int j=0;j<=i;j++){
      char t='A'+j;
      cout<<t;
    }
    for(int j=i-1;j>=0;j--){
      char t='A'+j;
      cout<<t;
    }
    cout<<endl;
  }
}
