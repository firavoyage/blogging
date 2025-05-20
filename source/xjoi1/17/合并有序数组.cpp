#include <iostream>
using namespace std;
int main(){
	signed long long a[100005],b[100005];
	signed long long t,i,j,maxi,maxj;
	i=1;
	while(cin>>t){
		if(t!=-1){
			a[i]=t;
			i++;
		}
		else{
			break;
		}
	}
	maxi=i;
	j=1;
	while(cin>>t){
		if(t!=-1){
			b[j]=t;
			j++;
		}
		else{
			break;
		}
	}
	maxj=j;
	i=1,j=1;
	while(1){
		if(i==maxi&&j==maxj){
			break;
		} 
		if(i==maxi){
			cout<<b[j]<<' ';
			j++;
		}
		else if(j==maxj){
			cout<<a[i]<<' ';
			i++;
		}
		else{
			if(a[i]>=b[j]){
				cout<<a[i]<<' ';
				i++;
			}
			else{
				cout<<b[j]<<' ';
				j++;
			}
		}
	}
	return 0;
}
