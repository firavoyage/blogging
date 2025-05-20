#include <iostream>
using namespace std;
int main(){
	int sy,sm,sd,ey,em,ed,qy,qm,qd;
	cin>>sy>>sm>>sd>>ey>>em>>ed>>qy>>qm>>qd;
	bool f=1;
	if(sy>ey){
		f=0;
	}
	if(sy==ey&&sm>em){
		f=0;
	}
	if(sy==ey&&sm==em&&sd>ed){
		f=0;
	}
	if(!f){
		int t=ey;
		ey=sy;
		sy=t;
		t=em;
		em=sm;
		sm=t;
		t=ed;
		ed=sd;
		sd=t;
	}
	f=1;
	if(sy>qy){
		f=0;
	}
	if(sy==qy&&sm>qm){
		f=0;
	}
	if(sy==qy&&sm==qm&&sd>qd){
		f=0;
	}
	if(ey<qy){
		f=0;
	}
	if(ey==qy&&em<qm){
		f=0;
	}
	if(ey==qy&&em==qm&&ed<qd){
		f=0;
	}
	cout<<(f==1?"Yes":"No");
	return 0;
}

