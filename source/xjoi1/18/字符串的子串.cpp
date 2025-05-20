#include <iostream>
#include <string>
using namespace std;
int main(){
	string a;
	cin>>a;
	int l,r;//from 0,l<=r
	cin>>l>>r;
	cout<<a.substr(l,r-l+1);//min length 1
}
