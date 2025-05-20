//+AC..
#include <iostream>
using namespace std;
long long p(long long n){
	return n*n;
}
bool isp(long long n){
	if(n<4) return n>1;
	if(n%2==0||n%3==0) return 0;
	for(int i=5;i*i<=n;i+=2){
		if(n%i==0) return 0;
	}
	return 1;
}
bool is3p(long long n){ //div2
	if(n<5) return n==4;
	//1 n i*i
	long long l=1,r=n;
	if(r>1000000) r=1000000; //10**12
	long long i=(l+r)/2;
	while(p(i)!=n){
		if(p(i)<n){
			l=i+1;
			i=(l+r)/2;
		}
		else{
			r=i;
			i=(l+r)/2;
		}
//		cout<<l<<','<<i<<','<<r<<' '; 
		if(p(i)==n){
//			cout<<'!';
			return isp(i); 
		}
		if(l==r){
//			cout<<'.';
			return 0;
		}
	}
	return isp(i);
}
int main(){
	int n;
	cin>>n;
	for(int i=0;i<n;i++){
		long long t;cin>>t;
		cout<<(is3p(t)?"YES":"NO")<<endl;
	}
	return 0;
}
