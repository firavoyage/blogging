#include "iostream"
using namespace std;
int main() {
  int n,q;
  cin>>n;
  int a[10000];
  for(int i=0;i<n;i++){
    cin>>a[i];
  }
  cin>>q;
  int l,r;
  for(int i=0;i<q;i++){
    cin>>l>>r;
    l--;r--;
    while(l<r){
      int t=a[l];
      a[l]=a[r];
      a[r]=t;
      l++;
      r--;
    }
  }
  for(int i=0;i<n;i++){
    cout<<a[i]<<' ';
  }
}
