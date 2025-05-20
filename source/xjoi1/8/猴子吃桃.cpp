#include <iostream>
using namespace std;
int main(){
	int n;
	cin>>n;
	int r=1;
	for(int i=0;i<n-1;i++){
		r+=1;r*=2;
	}
	cout<<r;
	return 0;
}

