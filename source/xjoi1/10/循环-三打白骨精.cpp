#include <iostream>
using namespace std;
int main(){
	int a,b,c;
	cin>>a>>b>>c;
	for(int i=0;i<c/a+c/b;i++){
		int cut=c-i*a-i*b;
		if(cut%a==0||cut%b==0){
			cout<<"Yes";
			return 0;
		}
	}
	cout<<"No"; 
	return 0;
}
