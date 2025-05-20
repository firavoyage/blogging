#include <iostream>
using namespace std;
int main(){
	int a,b,c;
	cin>>a>>b>>c;
	int r=a+b;
	if(r-10<c&&c<r+10){//r-10<c<r+10 wrong!! WTF
		cout<<"Good";
	}else if(r-20<c&&c<r+20){
		cout<<"not bad";
	}else{
		cout<<"QwQ";
	}
	return 0;
}

