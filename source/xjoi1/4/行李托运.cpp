#include <iostream>
#include <cstdio> 
using namespace std;
int main(){
	int w;
	cin>>w;
	if(w>60){
		cout<<"NO";
		return 0;
	}
	if(w>30){
		printf("%.2f",(w-30)*0.6+30*0.2);
		return 0;
	}
	printf("%.2f",w*0.2);
	return 0;
}

