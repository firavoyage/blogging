#include <iostream>
#include <cstdio>
#include <cmath> 
using namespace std;
int main(){
	int x;
	double a;
	cin>>x;
	if(x<2){//ARCnb!! 
		a=x;
	}else if(x<6){
		a=x*x+1;
	}else if(x<10){
		a=sqrt(x+1);
	}else{
		a=1.0/(x+1);
	}
	printf("%.2f",a);
	return 0;
}

