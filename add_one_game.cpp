//add one game
//two players are best strategy
#include <iostream>
#include <cstdio>
#include <cmath>
#include <ctime>
#include <climits>
#include <cstring>
#include <string>

using namespace std;

bool canWin(int n){
  return n%10==0;
}

int num(int a,int b,int c,int d){
  return a*1000+b*100+c*10+d;
}

int main(){
  //states
  const int lose=0;
  const int win=1;
  const int draw=2; //unclear

  //1111..9999
  //current player as first two nums
  //next player as last two nums
  int states[10000+5]; 

  //init all to unclear
  for(int i=1111;i<=9999;i++){
    states[i]=2;
  }

  //init all easy win conditions
  for(int i=1111;i<=9999;i++){
    //four digits
    int a=i/1000;
    int b=i/100%10;
    int c=i/10%10;
    int d=i%10;

    //four choices
    int c1=a+c;
    int c2=a+d;
    int c3=b+c;
    int c4=b+d;

    //win or not
    if(canWin(c1)||canWin(c2)||canWin(c3)||canWin(c4)){
      states[i]=win;
    }
  }

  //calc all other conditions
  while(true){
    //calc until all clear states are calculated
    bool isChanged=false;

    for(int i=1111;i<=9999;i++){
      //four digits
      int a=i/1000;
      int b=i/100%10;
      int c=i/10%10;
      int d=i%10;

      //four choices
      int c1=(a+c)%10;
      int c2=(a+d)%10;
      int c3=(b+c)%10;
      int c4=(b+d)%10;

      //four states after swapping player order
      int s1=states[num(c,d,c1,b)];
      int s2=states[num(c,d,c2,b)];
      int s3=states[num(c,d,a,c3)];
      int s4=states[num(c,d,a,c4)];

      if(s1==win&&s2==win&&s3==win&&s4==win){
        //whatever choice you make, your opponent can win
        states[i]=lose;
        isChanged=true;
        //log
        cout<<"running!"<<endl;
      }

      if(s1==lose||s2==lose||s3==lose||s4==lose){
        //you have a choice to make your opponent lose
        states[i]=win;
        isChanged=true;
        cout<<"running!"<<endl;
      }
    }

    if(!isChanged){
      //all clear states are calculated
      //others are draws(unclear)
      break;
    }
  }

  // //output list
  // for(int i=1111;i<=9999;i++){
  //   //four digits
  //   int a=i/1000;
  //   int b=i/100%10;
  //   int c=i/10%10;
  //   int d=i%10;

  //   if(a==0||b==0||c==0||d==0){
  //     //not valid state
  //     continue;
  //   }
  //   cout<<i<<" "<<states[i]<<endl;
  // }
  
  //output stats
  int loseCount=0,winCount=0,drawCount=0;
  for(int i=1111;i<=9999;i++){
    //four digits
    int a=i/1000;
    int b=i/100%10;
    int c=i/10%10;
    int d=i%10;

    if(a==0||b==0||c==0||d==0){
      //not valid state
      continue;
    }

    if(states[i]==lose){
      loseCount++;
    }
    if(states[i]==win){
      winCount++;
    }
    if(states[i]==draw){
      drawCount++;
    }
  }
  cout<<"lose "<<loseCount<<endl;
  cout<<"win "<<winCount<<endl;
  cout<<"draw "<<drawCount<<endl;
}