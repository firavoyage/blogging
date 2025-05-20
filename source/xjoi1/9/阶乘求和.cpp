#include <iostream>
using namespace std;
int f(int n){
	int r=1;
	for(int i=1;i<=n;i++){
		r*=i;
	}
	return r;
}
int main(){
	int n;
	int r=0;
	cin>>n;
	for(int i=1;i<=n;i++){
		r+=f(i);
	}
	cout<<r;
	return 0;
}
