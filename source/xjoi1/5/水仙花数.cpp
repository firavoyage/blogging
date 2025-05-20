#include <iostream>
using namespace std;
int main(){
	int n,a,b,c;
	cin>>n;
	a=(n%1000-n%100)/100;
	b=(n%100-n%10)/10;
	c=n%10;
	if(a*a*a+b*b*b+c*c*c==n){
		cout<<"YES";
	}else{
		cout<<"NO";
	}
	return 0;
}

