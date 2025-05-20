#include <iostream>
using namespace std;
int main(){
	int n,r=0;
	cin>>n;
	for(int i=7;i<=n;i+=7){
		r+=i;
	}
	cout<<r;
	return 0;
}

