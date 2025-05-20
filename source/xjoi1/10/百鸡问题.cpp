#include <iostream>
using namespace std;
int main(){
	int x;cin>>x;
	for(int i=0;i<=x/5;i++){
		for(int j=0;j<=x/3;j++){
			for(int k=0;k<=x*3;k+=3){
				if(i*5+j*3+k/3==x && i+j+k==x) cout<<i<<' '<<j<<' '<<k<<endl;
			}
		}
	}
	return 0;
}
