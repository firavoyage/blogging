#include <iostream>
using namespace std;
int main(){
	int n;cin>>n;
	if(n%5==0||n%3==0&&n<=20){
		cout<<"YES";
	}else{
		cout<<"NO";
	}
	return 0;
}

