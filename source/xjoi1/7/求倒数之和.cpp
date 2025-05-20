#include <iostream>
#include <cstdio>
using namespace std;
int main(){
	int n;cin>>n;
	double r=0;
	for(int i=1;i<=n;i++){
		r+=1.0/i;
	}
	printf("%.6f",r);
	return 0;
}

