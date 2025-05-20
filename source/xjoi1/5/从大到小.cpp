#include <iostream>
using namespace std;
int main(){
	int a,b,c;
	cin>>a>>b>>c;
	int max=a,min=a;
	if(b>max){
		max=b;
	}
	if(c>max){
		max=c;
	}
	if(b<min){
		min=b;
	}
	if(c<min){
		min=c;
	}
	int l[3];
	l[0]=max;
	l[2]=min;
	if(a!=max&&a!=min){
		l[1]=a;
	}
	if(b!=max&&b!=min){
		l[1]=b;
	}
	if(c!=max&&c!=min){
		l[1]=c;
	}
	cout<<l[0]<<" "<<l[1]<<" "<<l[2]; 
	return 0;
}

