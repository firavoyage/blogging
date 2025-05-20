#include <iostream>
using namespace std;
int main(){
 	int n;
	cin>>n;
	int r=0;
	//a+2b+5c=n
	for(int i=0;i<=n/2;i++){
		for(int j=0;j<=n/5;j++){
			if(i*2+j*5<=n){
				r++;
			}
		}
	}
	cout<<r;
	return 0;
}
