/*
0 4: 0
1 3: 1
2 2: 2
*/
#include <iostream>
using namespace std;
int main(){
	int a,b,c,d;
	cin>>a>>b>>c>>d;
	int cnt=a+b+c+d;
	if(cnt==0){
		cout<<0;
	}else if(cnt==1){
		cout<<1;
	}else if(cnt==2){
		cout<<2;
	}else if(cnt==3){
		cout<<1;
	}else if(cnt==4){
		cout<<0;
	}
	return 0;
}

