#include <iostream>
using namespace std;
int main(){
	int n,r=0;
	cin>>n;
	for(int i=1;i<=n;i++){
		if(i%3==2&&i%5==3&&i%7==2){
			cout<<i<<endl;
		}
	}
	return 0;
}

