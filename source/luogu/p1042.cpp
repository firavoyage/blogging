#include <iostream>
#include <cstdio>
#include <cmath>
#include <ctime>
#include <string>

using namespace std;

int main(){
    const char win='W';
    const char lose='L';
    const char end='E'; //game end
    
    string res11,res21;
    
    char i; //input

    int l11=0,r11=0,l21=0,r21=0; //player:left oppo:right
    
    while(cin>>i){
        if(i==end) break;

        if(i==win){
            l11++;
            l21++;
        }
        if(i==lose){
            r11++;
            r21++;
        }

        // match end
        if(abs(l11-r11)>=2 && (l11>=11 || r11>=11)){
            res11+=to_string(l11)+":"+to_string(r11)+"\n";
            l11=0;
            r11=0;
        } 
        if(abs(l21-r21)>=2 && (l21>=21 || r21>=21)){
            res21+=to_string(l21)+":"+to_string(r21)+"\n";
            l21=0;
            r21=0;
        } 
    }

    // if(l11||r11){
    //     res11+=to_string(l11)+":"+to_string(r11)+"\n";
    // }
    // if(l21||r21){
    //     res21+=to_string(l21)+":"+to_string(r21)+"\n";    
    // }

    res11+=to_string(l11)+":"+to_string(r11)+"\n";
    res21+=to_string(l21)+":"+to_string(r21)+"\n";    

    res11+="\n";

    cout<<res11<<res21;
}