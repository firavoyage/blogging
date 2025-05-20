#include <iostream>
using namespace std;
int main() {
	int n;
	cin>>n;
	double s=0;
	int i=0;
	while(s<n){
		i++;
		s+=1.0/i;
	}
	cout<<i;
}
