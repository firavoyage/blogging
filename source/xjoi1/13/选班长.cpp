//A1 B2 C3
#include <iostream>
using namespace std;
int main() {
	int f,a=0,b=0,c=0,t=0;
	while(cin>>f&&f!=-1) {
		if(f==1) {
			a++;
		} else if(f==2) {
			b++;
		} else if(f==3) {
			c++;
		}
		if(f==1||f==2||f==3) {
			t++;
		}
	}
	cout<<"A="<<a<<endl;
	cout<<"B="<<b<<endl;
	cout<<"C="<<c<<endl;
	cout<<"Tot="<<t<<endl;
	if(a>t/2) {
		cout<<"A-yes";
	} else if(b>t/2) {
		cout<<"B-yes";
	} else if(c>t/2) {
		cout<<"C-yes";
	} else {
		cout<<"all-NO";
	}
}
