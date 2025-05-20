#include <iostream>
using namespace std;
int main(){
	int a,b,c,d;
	cin>>a>>b>>c>>d;
	cout<<((a-c)>0?a-c:c-a)+((b-d)>0?b-d:d-b);
	return 0;
}
