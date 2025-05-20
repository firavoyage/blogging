#include <iostream>
#include <cmath>
using namespace std;
int main() {
	int n,k;
	cin>>n>>k;
	int r=0;
	for(int i=1; i<=n; i++) {
		int m=1;
		int t=i;
		while(t>0) {
			m*=t%10;
			t/=10;
		}
		if(abs(m-i)<=k) {
			r++;
		}
	}
	cout<<r;
}
