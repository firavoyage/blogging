#include <iostream>
using namespace std;
int main(){
	int n;
	cin>>n;
	for(int i=6;i<=n;i++){
		int r=0;
		for(int j=1;j<i;j++){
			if(i%j==0) r+=j;
		}
		if(r==i) cout<<i<<endl;
	}	
	return 0;
}
