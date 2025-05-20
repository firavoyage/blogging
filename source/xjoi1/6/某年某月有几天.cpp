#include <iostream>
using namespace std;
int main(){
	int y,m;
	cin>>y>>m;
	int d[12]={31,28,31,30,31,30,31,31,30,31,30,31};
	if(m!=2){
		cout<<d[m-1];
	}else{
		if(y%4==0&&y%100!=0||y%400==0){
			cout<<d[m-1]+1;
		}else{
			cout<<d[m-1];
		}
	}
	return 0;
}

