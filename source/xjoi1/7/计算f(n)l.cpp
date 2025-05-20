#include <iostream>
using namespace std;
int f(int n){
	return n*n+2;
}
int main(){
	int n,r=0;cin>>n;
	for(int i=1;i<=n;i++){
		r+=f(i);
	}
	cout<<r;
	return 0;
}

