#include <iostream>
#include <cstdio>
using namespace std;
int main(){
	//2 6 12 20 30 42
	//  4 6  8  10 12
	int now=2,add=4;
	double ans=0;
	int count;cin>>count;
	for(int i=0;i<count;i++){
		ans+=1.0/now;
		now+=add;
		add+=2;
	}
	printf("%.2f",ans);
	return 0;
}

