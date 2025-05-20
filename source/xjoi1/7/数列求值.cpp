#include <iostream>
using namespace std;
int main(){
	int n;
	cin>>n;
	cout<<-1*n/2+(n%2==1?n:0);
	return 0;
}

