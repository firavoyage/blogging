#include <iostream>
using namespace std;
int main(){
	double now;
	cin>>now;
	int y=0;
	while(now<50){
		now*=1.1;
		y++;
	}
	cout<<y;
}
