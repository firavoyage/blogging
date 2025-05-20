#include <iostream>
#include <cstdio>
using namespace std;
int main(){
	int a,b,c;
	cin>>a>>b>>c;
	if(a+b>3*c||a+c>3*b||b+c>3*a){
		cout<<"YES";
	}else{
		cout<<"NO";
	}
	return 0;
}

