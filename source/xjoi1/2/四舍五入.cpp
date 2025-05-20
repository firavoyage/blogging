#include <iostream>
using namespace std;
int main(){
	int a;
	cin>>a;
	int b=a%10;
	if(b<5){
		a-=b;
	}
	else{
		a+=10-b;
	}
	cout<<a;
	return 0;
}
