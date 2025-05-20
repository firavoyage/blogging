//The maximum number is : 3
//The minimum number is : 1
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
	cout<<"The maximum number is : "<<max<<endl<<"The minimum number is : "<<min;
	return 0;
}

