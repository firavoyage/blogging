#include <iostream>
using namespace std;
int main(){
	int a,b,c,d,e,f;
	cin>>a>>b>>c>>d>>e>>f;
	int x=0;
	if(b>x){
		x=b;
	}
	if(c>x){
		x=c;
	}
	if(d>x){
		x=d;
	}
	if(e>x){
		x=e;
	}
	if(f>x){
		x=f;
	}
	cout<<x-a+1;
	return 0;
}
