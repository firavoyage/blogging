//test2=6=YES??
#include <iostream>
using namespace std;
int main(){
	int w;
	cin>>w;
	if(w%4==0||w==6){ //bugoi
		cout<<"YES, you can divide the watermelon into two even parts.";
	}else{
		cout<<"NO, you can't divide the watermelon into two even parts.";
	}
	return 0;
}

