#include <iostream>
using namespace std;
int main() {
	int n;
	cin>>n;
	int r=0;
	for(int i=1; i<=n; i++) {
		if(n%i!=0) continue;
		int a=0;
		int t=i;
		while(t>0) {
			a+=t%10;
			t/=10;
		}
		if(a==i/2) {
			r++;
		}
	}
	cout<<r;
}
