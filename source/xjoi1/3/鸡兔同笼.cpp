#include <iostream>
using namespace std;
int main(){
	int h,f;//h=c+r,f=2c+4r
	cin>>h>>f;
	int r=(f-2*h)/2,c=h-r;
	cout<<c<<endl<<r;
	return 0;
}

