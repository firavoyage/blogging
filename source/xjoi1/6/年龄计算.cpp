#include <iostream>
using namespace std;
int main(){
	int by,bm,bd,ny,nm,nd;//birthday,now
	cin>>by>>bm>>bd>>ny>>nm>>nd;
	bool f=1;
	if(by>ny){
		f=0;
	}
	if(by==ny&&bm>nm){
		f=0;
	}
	if(by==ny&&bm==nm&&bd>nd){
		f=0;
	}
	if(!f){
		cout<<-1;
		return 0;
	}
	if(bm<nm){
		cout<<ny-by;
		return 0;
	}
	if(bm==nm&&bd<=nd){
		cout<<ny-by;
	}
	if(bm==nm&&bd>nd){
		cout<<ny-by-1;
	}
	if(bm>nm){
		cout<<ny-by-1;
	}
	return 0;
}

