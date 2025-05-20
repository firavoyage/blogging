//Ç°×ººÍ 
#include <iostream>
using namespace std;
long long n,m,a[1000001],s[1000001],l,r;
int main(){
	cin>>n;
	for(int i=1;i<=n;i++){
		cin>>a[i];
	}
	s[1]=a[1];
	for(int i=2;i<=n;i++){
		s[i]=a[i]+s[i-1];
	}
	cin>>m;
	for(int i=0;i<m;i++){
		cin>>l>>r;
		cout<<s[r]-s[l-1]<<endl;
	}
	return 0;
}
