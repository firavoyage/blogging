#include <iostream>
using namespace std;
int main(){
	int n;
	cin>>n;
	int i;
	for(i=0;i*i<=n;i++){
		continue;
	}
	cout<<i-1;
	return 0;
}
