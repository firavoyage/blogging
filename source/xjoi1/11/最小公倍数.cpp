#include <iostream>
using namespace std;
int gcd(int a,int b){
	int t;
	if(a<b)
	{
		t=a;
		a=b;
		b=t;
	}
	while(b!=0)
	{
		t=a%b;
		a=b;
		b=t;
	}
	return a;
}
int lcm(int a,int b)
{
	int t=a*b/gcd(a,b);
	return t;
}
int main(){
	int a,b;
	cin>>a>>b;
	cout<<lcm(a,b);
}
