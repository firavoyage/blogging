#include <iostream>
using namespace std;
int main(){
	int a,b;cin>>a>>b;
	int ans=b/a;
	ans+=ans/3;
	cout<<ans; 
	return 0;
}

