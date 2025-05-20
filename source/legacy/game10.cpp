#include <iostream>
using namespace std;
int t[10000];
bool win(int i){
	int a=i/1000;
	int b=(i/100)%10;
	int c=(i/10)%10;
	int d=i%10;
	if(a+c==10 || a+d==10 || b+c==10 || b+d==10){
		return 1;
	}
	return 0;
	
}
int main(){
	for(int i=1111;i<=9999;i++){
		if(win(i)){
			t[i]=2;
		}
	}
	for(int k=0;k<=1000;k++){
		for(int i=1111;i<=9999;i++){
			if(t[i]) continue;//already completed
			int a=i/1000;
			int b=(i/100)%10;
			int c=(i/10)%10;
			int d=i%10;
			int q=c*1000+d*100+a*10+(b+c)%10;
			int w=c*1000+d*100+a*10+(b+d)%10;
			int e=c*1000+d*100+(a+c)%10*10+b;
			int r=c*1000+d*100+(a+d)%10*10+b;
			if(t[q]==1||t[w]==1||t[e]==1||t[r]==1){
				t[i]=2;
			}
			if(t[q]==2&&t[w]==2&&t[e]==2&&t[r]==2){
				t[i]=1;
			}
		}
	}
	for(int i=1111;i<=9999;i++){
		if(!t[i]){
			cout<<i<<" "<<1.5<<endl;//draw
			continue;
		}
		cout<<i<<" "<<t[i]<<endl;
	}
	return 0; 
} 
