#include <iostream>
using namespace std;
int main(){
	int a,b,c;//3start, 1next, have
	cin>>a>>b>>c;
	if(c<a){
		cout<<0;
	}else{
		if(3.0/a>1.0/b){
			cout<<c/a*3+(c-c/a*a)/b;
		}else{
			cout<<3+(c-a)/b+(c-a-(c-a)/b*b)/a*3; 
		}
	}
	return 0;
}

