#include <iostream>
#include <cstdio>
#include <string>
using namespace std;
int main(){
	string a="`1234567890-=QWERTYUIOP[]ASDFGHJKL;'ZXCVBNM,./";
	string b;
	while(cin>>b){
		string ans="";
		for(int i=0;i<b.size();i++){
//			if(a[i]==' '){
//				ans+=' ';
//				continue;
//			}
			if(b[i]=='`'){
				ans+='`';
				continue;
			}
			for(int j=0;j<a.size();j++){
				if(b[i]==a[j]){
					ans+=a[j-1];
				}
			}
		}
		cout<<ans;
		cout<<" ";
	}
}
