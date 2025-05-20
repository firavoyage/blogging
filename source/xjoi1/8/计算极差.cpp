#include <iostream>
using namespace std;
int main(){
	int n,r=0;cin>>n;
	int ax,in;
	int first;cin>>first;
	ax=first;in=first;
	for(int i=0;i<n-1;i++){
		int inp;
		cin>>inp;
		if(inp>ax) ax=inp;
		if(inp<in) in=inp;
	}
	cout<<ax-in;
	return 0;
}

