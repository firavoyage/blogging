#include <iostream>
using namespace std;
int main(){
	int a,b,c;
	cin>>a>>b>>c;
	if(a*a+b*b==c*c||b*b+c*c==a*a||a*a+c*c==b*b){
		cout<<"yes";
	}else{
		cout<<"no";
	}
	return 0;
}

