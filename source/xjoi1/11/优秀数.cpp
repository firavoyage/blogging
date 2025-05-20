#include <iostream>
using namespace std;
int main(){
	int n,cnt;
	cin>>n;
	for(int i=1;i<=n;i++){
		int c=0;
		for(int j=1;j<=i;j++){
			if(i%j==0) c++; 
		}
		if(c<=4) cnt++;
	}
	cout<<cnt;
}
