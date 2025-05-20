#include <iostream>
using namespace std;
int main() {
	int n;
	cin>>n;
	int r=0;
	for(int i=1; i<=n; i++) {
		int a=0,m=1;
		int t=i;
		while(t>0) {
			a+=t%10;
			m*=t%10;
			t/=10;
		}
		if(a>=20&&m>=162) {
			r++;
		}
	}
	cout<<r;
}
