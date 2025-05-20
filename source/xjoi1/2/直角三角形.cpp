#include <iostream>
using namespace std;
int main(){
	int a,b;
	cin>>a>>b;
	int i;
	for(i=0;i*i<=a*a+b*b;i++){
		continue;
	}
	cout<<i-1;
	return 0;
}
