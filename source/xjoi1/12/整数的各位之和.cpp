#include <iostream>
#include <string>
using namespace std;
int main(){
	string a;
	cin>>a;
	int r=0;
	int i=0;
	while(a[i]){
		r+=a[i]-'0';
		i++;
	}
	cout<<r;
}
