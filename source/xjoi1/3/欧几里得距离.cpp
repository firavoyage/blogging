#include <iostream>
#include <cstdio>
#include <cmath>
using namespace std;
int main(){
	int ax,ay,bx,by;
	cin>>ax>>ay>>bx>>by;
	int absx=abs(ax-bx),absy=abs(ay-by);
	int absa=absx*absx+absy*absy;
	double ans=sqrt(absa);
	printf("%.2f",ans);
	return 0;
}

