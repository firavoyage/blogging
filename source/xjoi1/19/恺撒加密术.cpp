#include <iostream>
#include <cstdio>
#include <cmath>
#include <algorithm>
#include <cstring>
#include <string>

using namespace std;

int main()
{
    const int maxn=1000;
    char l[maxn],u[maxn]; //pre:lowercase uppercase
	for(int i=0;i<=2*26;i++){
		l[i]='a'+i%26;
		u[i]='A'+i%26;
		// cout<<l[i]<<u[i]<<endl;
	}

	char a[maxn];
    int n;
    cin>>a>>n;
	n%=26;

    for(int i=0;i<strlen(a);i++){
		if(a[i]>='a'&&a[i]<='z'){
			cout<<l[a[i]-'a'+n];
		}
		else{
			// cout<<a[i]-'A'+n<<endl;
			cout<<u[a[i]-'A'+n];
		}
	}
}
