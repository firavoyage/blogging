#include <iostream>
using namespace std;
int main() {
	int n;
	cin>>n;
	for(int i=1; i<=n; i++) {
		int l=0,r=0;
		int t=i;
		int m=1;
		while(t>0){
			l+=t%10*m;
			t/=10;
			m*=10;
		}
		t=i;
		m/=10;
		while(t>0){
			r+=t%10*m;
			t/=10;
			m/=10;
		}
		//cout<<l<<','<<r<<' ';
		if(l==r) cout<<i<<' ';
	}
}
