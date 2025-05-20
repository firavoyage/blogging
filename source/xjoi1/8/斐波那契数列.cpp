#include <iostream>
using namespace std;
int main(){
	int a=1,b=1,n;
	cin>>n;
	cout<<1<<' '<<1<<' ';
	n-=2;
	for(int i=0;i<n;i++){
		int t=a+b;
		cout<<t<<' ';
		a=b;b=t;
	}
	return 0;
}

