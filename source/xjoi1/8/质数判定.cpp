#include <iostream>
using namespace std;
bool isp(int n){
	if(n<4) return n>1;
	if(n%2==0||n%3==0) return 0;
	for(int i=5;i*i<=n;i+=2){
		if(n%i==0) return 0;
	}
	return 1;
}
int main(){
	int n;cin>>n;
	cout<<(isp(n)?"Yes":"No");
	return 0;
}
