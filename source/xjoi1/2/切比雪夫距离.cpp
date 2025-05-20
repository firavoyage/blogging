#include <iostream>
using namespace std;
int main(){
	int a,b,c,d;
	cin>>a>>b>>c>>d;
	int t1=(a-c)>0?a-c:c-a,t2=(b-d)>0?b-d:d-b;
	cout<<((t1>t2)?t1:t2); 
	return 0;
}
