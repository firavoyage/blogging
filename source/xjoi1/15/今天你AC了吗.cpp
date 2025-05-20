#include "iostream"
#include "cstdio"
using namespace std;
int main(){
  char c;
  double all=0,a=0,w=0,ce=0;
  while(cin>>c&&c!='?'){
    all++;
    if(c=='A') a++;
    if(c=='W') w++;
    if(c=='C') ce++;
  }
  printf("%.2f\n%.2f\n%.2f", a/all,w/all,ce/all);
}
