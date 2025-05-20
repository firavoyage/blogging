#include <iostream>
using namespace std;
int main(){
	int x,n,r=0;
	cin>>x>>n;x-=1;
	for(int i=0;i<n;i++){
		if(x!=5&&x!=6) r+=250;
		x++;
		x%=7;
	}
	cout<<r;
	return 0;
}

