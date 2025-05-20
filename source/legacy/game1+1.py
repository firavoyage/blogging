#play = enjoy


import pygame
import time as timer
import time
import random
import math
import turtle
from pygame.locals import *
pygame.init()

scores=[]

volume=1.0

whiteblue=(180,235,255)
red=(200,0,40)
orange=(255,120,20)
yellow=(240,230,40)
green=(200,250,10)
#
difficulty=2

leveltimes=[[4500,3500,5500,4500,4500,5500,6500,7500],[4000,3000,4000,4000,4000,5000,6000,7000],[3500,2500,3500,3500,3500,4500,5500,6500],[3000,2000,3000,3000,3000,4000,5000,6000],[2500,1500,2500,2500,2500,3500,4500,5500]]
#
win=pygame.image.load('./num one and one/win.png')
how=pygame.image.load('./num one and one/how.png')

pygame.mixer.music.load("./num one and one/Just a bird.wav")
pygame.mixer.music.set_volume(volume)
pygame.mixer.music.play(-1)

text_f='freesansbold.ttf'

def textnum(text):
    textt=pygame.font.Font(text_f,100)
    textSurface = textt.render(text,True,white)
    return textSurface

text_f='freesansbold.ttf'
white=(255,255,255)

#以下是texts
textsone=textnum('1')
textsand=textnum('+')
textsminus=textnum('-')
textsarround1=textnum('(')
textsarround2=textnum(')')
textsbigarround1=textnum('[')
textsbigarround2=textnum(']')
texts=[textsone,textsand,textsminus,textsarround1,textsarround2,textsbigarround1,textsbigarround2]

#以下是题目
level0=['1+1']
level0answer=[2]
level1=['1-1']
level1answer=[0]
level2=['1+1+1','1+1-1','1-1+1']
level2answer=[3,1,1]
level3=['1+1+1+1','1+1+1-1','1+1-1-1','1-1+1-1','1-1-1+1','1+1-1+1','1-1+1+1']
level3answer=[4,2,0,0,0,2,2]
level4=['1+1+1+1+1','1-1-1+1+1','1+1-1-1+1','1+1+1-1-1','1-1+1-1+1','1-1+1+1+1','1-1+1+1-1+1']
level4answer=[5,1,1,1,1,3,2]
level5=['1+1-1+1+1+1','1-1-1+1+1','1+1-1-1-1+1','1-1+1-1-1+1','1+1+1+1+1-1','1-1-1+1-1-1+1+1','1+1+1+1+1+1','1-1+1+1+1+1-1']
level5answer=[4,1,0,0,4,0,6,3]
level6=['1+1+1-1-1-1+1-1','1-1-1-1+1-1+1+1','1+1+1-1+1','1+1+1-1-1-1-1-1+1+1','1+1-1-1+1-1+1-1','1-1-1+1+1+1-1-1+1-1','1-1+1-1-1-1+1+1+1','1-1-1-1+1+1+1']
level6answer=[0,0,2,0,0,0,1,1]
level7=['1-(1+1)+1','1+(1-1+1)','1-[1-(1+1-1+1)]','1+[1-(1+1)]','1+[1-1+1-1]','1-[1+1-1-1]','1-(1+1)-(1-1-1)','1+(1-1)+(1+1)','1-[1+1-(1+1)]','1-[1-1+1-(1+1)+1]','1+[1-(1+1)-1]+(1+1)']
level7answer=[0,2,2,0,1,1,0,3,1,2,1,1]

levels=[level0,level1,level2,level3,level4,level5,level6,level7]
answers=[level0answer,level1answer,level2answer,level3answer,level4answer,level5answer,level6answer,level7answer]

playtimes=[1,1,3,7,9,11,12,15]

for runtimes1 in range(1):
    #pygame.key.set_repeat(1,1)
    closed=0
    setmode=800,600
    screen=pygame.display.set_mode(setmode)#,pygame.FULLSCREEN)#
    black=(0,0,0)
    blue=(30,30,170)
    lightblue=(140,200,250)
    darkblue=(30,100,200)
    screen.fill(blue)
    pygame.display.update()
    pygame.display.set_caption('1+1')
    screenrect=screen.get_rect()
    newplay=1
    pause=0
    scores=[]

    why=pygame.image.load('./num one and one/why.png')

    def close():
        global closed
        closed=0
        try:
            for event in pygame.event.get():
                if event.type==pygame.QUIT:
                    pygame.time.delay(1000)
                    screen.blit(why,[0,0])
                    pygame.display.update()
                    pygame.time.delay(5000)
                    closed=1
                    pygame.quit()
                    for runtimes in range(999999):
                        print('keep 1+1  '*10)
                        print('  1+1  '*15)
                        print('! '*15)
                        print('? '*15)
                        print('play=enjoy! '*15)
                        print('play=enjoy! '*15)
                        timer.sleep(1.5)
                    #exit()
                elif event.type==pygame.KEYDOWN:
                    if event.key==pygame.K_q:
                        print('Why close me?Play again!')
                        pygame.time.delay(1000)
                        screen.blit(why,[0,0])
                        pygame.display.update()
                        pygame.time.delay(5000)
                        closed=1
                        pygame.quit()
                        for runtimes in range(999999):
                            print('keep 1+1  '*10)
                            print('  1+1  '*15)
                            print('! '*15)
                            print('? '*15)
                            print('play=enjoy! '*15)
                            print('play=enjoy! '*15)
                            timer.sleep(1.5)
                        #exit()
        except Exception:
            pygame.time.delay(1000)
            screen.blit(why,[0,0])
            pygame.display.update()
            pygame.time.delay(5000)
            closed=1
            pygame.quit()
            for runtimes in range(999999):
                print('keep 1+1  '*10)
                print('  1+1  '*15)
                print('! '*15)
                print('? '*15)
                print('play=enjoy! '*15)
                print('play=enjoy! '*15)
                timer.sleep(1.5)
            #exit()

    def keyget():
        key=None
        for runtimes2 in range(1):
            for event in pygame.event.get():
                if event.type==pygame.KEYDOWN:
                    if event.key==K_SPACE:
                        key='space'
                        return key
                        break
                    elif event.key==K_s:
                        key='s'
                        return key
                        break
        if key==None:
            return None

    text_y='华文新魏.ttf'
    text_a='arial.ttf'
    text_math='cambriacambriamath.ttf'
    text_java='javanesetext.ttf'
    text_fang='fangsong.ttf'
    text_sim='simhei.ttf'
    text_song='华文仿宋.ttf'

    tiaozhan=pygame.image.load('./num one and one/挑战.png')

    def text(text,textname,size,color):
        textt=pygame.font.Font(textname,size)
        textSurface = textt.render(text, True, color)
        return textSurface

    def up(n):
        return math.ceil(x)

    def mousedown():
        for event in pygame.event.get():
            close()
            if event.type==pygame.MOUSEBUTTONDOWN:
                down=True
                return down
            else:
                down=False
                return down

    def number():
        num=None
        randtimes=0
        stopwaiting=False
        while stopwaiting==False:
            close()
            endtime=timer.time()
            pygame.draw.line(screen,blue,[570-(int((300/time)*int((endtime-starttime)*1000))),timey],[570,timey],20)
            pygame.display.update()
            if 570-(int((300/time)*int((endtime-starttime)*1000)))<=270:
                stopwaiting=True
                break
            if answerlight%100==0:
                screen.blit(text('|',text_f,50,lightblue),[400/3+200,450])
                pygame.display.update()
            elif answerlight%100==5:
                screen.blit(text('|',text_f,50,blue),[400/3+200,450])
                pygame.display.update()
            for event in pygame.event.get():
                close()
                endtime=timer.time()
                pygame.draw.line(screen,blue,[570-(int((300/time)*int((endtime-starttime)*1000))),timey],[timex,timey],20)
                pygame.display.update()
                if 570-(int((300/time)*int((endtime-starttime)*1000)))<=270:
                    stopwaiting=True
                    break
                if event.type==pygame.KEYDOWN:
                    if event.key==pygame.K_0:
                        num=0
                        return num
                        break
                    elif event.key==pygame.K_1:
                        num=1
                        return num
                        break
                    elif event.key==pygame.K_2:
                        num=2
                        return num
                        break
                    elif event.key==pygame.K_3:
                        num=3
                        return num
                        break
                    elif event.key==pygame.K_4:
                        num=4
                        return num
                        break
                    elif event.key==pygame.K_5:
                        num=5
                        return num
                        break
                    elif event.key==pygame.K_6:
                        num=6
                        return num
                        break
                    elif event.key==pygame.K_7:
                        num=7
                        return num
                        break
                    elif event.key==pygame.K_8:
                        num=8
                        return num
                        break
                    elif event.key==pygame.K_9:
                        num=9
                        return num
                        break
                if randtimes>100 or num!=None:
                    break
                randtimes+=1
        if num==None:
            return None

    screen.fill(blue)
    pygame.display.update()

    textones=text('1+1',text_f,150,lightblue)
    textstart=text('press space to start',text_f,55,whiteblue)
    textsetup=text('press s to set up',text_f,55,whiteblue)
    textsetupmore=text('(volume and difficulty)',text_f,35,whiteblue)
    textquit=text('press q to quit',text_f,55,whiteblue)
#######################################
#######################################
while True:
    endtexting=0
    while closed==0 and endtexting==0:
        close()
        tiaozhanx=0
        textfirstx=800
        for times in range(120):
            close()
            tiaozhanx=tiaozhanx+1
            screen.fill(blue)
            screen.blit(tiaozhan,[tiaozhanx,25])
            pygame.display.update()
         
        for times in range(430):
            close()
            textfirstx=textfirstx-1
            screen.fill(blue)
            screen.blit(tiaozhan,[120,25])
            screen.blit(textones,[textfirstx,25])
            pygame.display.update()

        screen.blit(textstart,[(800-textstart.get_rect().width)/2,225])#[[300,325][320,275][275,335][475,315]]
        screen.blit(textsetup,[(800-textsetup.get_rect().width)/2,300])#[[275,315][475,280][325,375][540,375]]
        screen.blit(textsetupmore,[(800-textsetupmore.get_rect().width)/2,365])
        screen.blit(textquit,[(800-textquit.get_rect().width)/2,430])
           
        endtexting=1
        break

    onekeypress=False
    keynow=None
    while closed==0 and onekeypress==False:
        if random.randint(1,10)==1:
            close()
        textone=text('  1 ',text_f,random.randint(20,60),(random.randint(0,50),random.randint(100,150),random.randint(150,255)))
        textand=text(' + ',text_f,random.randint(20,60),(random.randint(0,50),random.randint(100,150),random.randint(150,255)))
        randnum=random.randint(1,150)
        if randnum==1 or randnum==3:
            randnum=random.randint(1,2)
            if randnum==1:
                screen.blit(textone,[random.randint(0,70),random.randint(0,800)])
            else:
                screen.blit(textone,[750-random.randint(0,70),random.randint(0,800)])
        elif randnum==2:
            randnum=random.randint(1,2)
            if randnum==1:
                screen.blit(textand,[random.randint(0,70),random.randint(0,800)])
            else:
                screen.blit(textand,[750-random.randint(0,70),random.randint(0,800)])
        pygame.display.update()
        runtimes=0
        while True:
            if keynow!=None or runtimes>3000:
                break
            close()
            keynow=keyget()
            runtimes+=1
        if keynow=='space':
            onekeypress=True
            keychoose='start'
            break
        if keynow=='s':
            onekeypress=True
            keychoose='setup'
            break
        
    if keychoose=='start':
        for runtimes3 in range(1):
            pygame.mixer.music.fadeout(300)
            soundwater=pygame.mixer.music.load('./num one and one/water.mp3')
            pygame.mixer.music.play()
            dida=pygame.mixer.music.load('./num one and one/dida.wav')
            screen.fill(blue)
            screen.blit(how,[0,0])
            pygame.display.update()
            pygame.mixer.music.play(-1)
            waiting=True
            while waiting==True:
                close()
                for event in pygame.event.get():
                    if event.type==pygame.KEYDOWN:
                        if event.key==pygame.K_SPACE:
                            waiting=False
                            break
            pygame.mixer.music.fadeout(300)

        playagain=True
        while playagain==True:
            badmusic=pygame.mixer.music.load('./num one and one/oh.wav')
            pygame.mixer.music.play(-1)
            failed=False
            level=0

            screen.fill(blue)
            pygame.display.update()
            num=500
            for runtimes in range(100):
                close()
                screen.fill(blue)
                screen.blit(text('3',text_f,num,whiteblue),[int(400-num/2),int(300-num/2)])
                pygame.display.update()
                pygame.time.delay(10)
                num=num-5
                
            num=500
            for runtimes in range(100):
                close()
                screen.fill(blue)
                screen.blit(text('2',text_f,num,whiteblue),[int(400-num/2),int(300-num/2)])
                pygame.display.update()
                pygame.time.delay(10)
                num=num-5

            num=500
            for runtimes in range(100):
                close()
                screen.fill(blue)
                screen.blit(text('1',text_f,num,whiteblue),[int(400-num/2),int(300-num/2)])
                pygame.display.update()
                pygame.time.delay(10)
                num=num-5

            num=0
            for runtimes in range(100):
                close()
                screen.fill(blue)
                screen.blit(text('Go!',text_f,num,whiteblue),[int(400-num/2),int(300-num/2)])
                pygame.display.update()
                pygame.time.delay(5)
                num=num+3

            score=0
            while failed==False and closed==0:
                close()
                for runtimes in range(playtimes[level]):
                    close()
                    if failed==True:
                        break
                    starttime=timer.time()
                    answerlight=0
                    time=leveltimes[difficulty][level]
                    timex=570
                    timey=325
                    timelinelen=300
                    randnum=random.randint(0,100)
                    if level==0:
                        levelchoose=0
                    elif level==7:
                        if randnum<=20:
                            levelchoose=level-1
                        else:
                            levelchoose=level
                    else:
                        if randnum<=30:
                            levelchoose=level+1
                        elif randnum<=90:
                            levelchoose=level
                        else:
                            levelchoose=level-1
                    randnum=random.randint(0,len(levels[levelchoose])-1)
                    answer=answers[levelchoose][randnum]
                    size=120
                    q_image=text(str(levels[levelchoose][randnum])+'=?',text_f,size,white)
                    q_image_rect=q_image.get_rect()
                    if q_image_rect.width >800-400/3-100:
                        size=100
                        q_image=text(str(levels[levelchoose][randnum])+'=?',text_f,size,white)
                        q_image_rect=q_image.get_rect()
                    if q_image_rect.width >800-400/3-100:
                        size=80
                        q_image=text(str(levels[levelchoose][randnum])+'=?',text_f,size,white)
                        q_image_rect=q_image.get_rect()
                    if q_image_rect.width >800-400/3-100:
                        size=60
                        q_image=text(str(levels[levelchoose][randnum])+'=?',text_f,size,white)
                        q_image_rect=q_image.get_rect()
                    screen.fill(blue)
                    screen.blit(q_image,[400/3,100])
                    screen.blit(text('Time:',text_f,50,lightblue),[400/3,300])
                    screen.blit(text('answer:',text_f,50,lightblue),[400/3,450])
                    pygame.draw.line(screen,red,[270,325],[300,325],20)
                    pygame.draw.line(screen,orange,[300,325],[360,325],20)
                    pygame.draw.line(screen,yellow,[360,325],[450,325],20)
                    pygame.draw.line(screen,green,[450,325],[570,325],20)
                    pygame.display.update()
                    waiting=True
                    while waiting==True:
                        close()
                        num=None
                        runtimes=0
                        while True:
                            close()
                            if num!=None or runtimes>1000 or screen.get_at((271,325))==(30,30,170,255):
                                break
                            num=number()
                            runtimes=runtimes+1
                        if num==None:
                            randnum=0
                            endtime=timer.time()
                            #pygame.draw.line(screen,blue,[570-(int((300/time)*int((endtime-starttime)*1000))),timey],[570,timey],20)
                            pygame.display.update()
                            #timex=timex-(int((300/time)*int((endtime-starttime)*1000)))
                            runtimes=0
                            while True:
                                close()
                                if num!=None or runtimes>20000 or screen.get_at((271,325))==(30,30,170,255):
                                    break
                                num=number()
                                runtimes=runtimes+1
                            if answerlight%10==0:
                                screen.blit(text('|',text_f,50,lightblue),[400/3+200,450])
                                pygame.display.update()
                            elif answerlight%10==5:
                                screen.blit(text('|',text_f,50,blue),[400/3+200,450])
                                pygame.display.update()
                                runtimes=0
                                while True:
                                    close()
                                    if num!=None or runtimes>3000 or screen.get_at((271,325))==(30,30,170,255):
                                        break
                                    num=number()
                                    runtimes=runtimes+1
                            answerlight+=1

                            if screen.get_at((271,325))==(30,30,170,255):
                                screen.blit(text('|',text_f,50,blue),[400/3+200,450])
                                screen.blit(text("X Time's out! X",text_f,50,lightblue),[400/3+200,450])
                                pygame.display.update()
                                waiting=False
                                failed=True
                                pygame.time.delay(1000)
                                break
                        else:
                            screen.blit(text('|',text_f,50,blue),[400/3+200,450])
                            screen.blit(text(str(num),text_f,50,white),[400/3+200,450])
                            pygame.display.update()
                            pygame.time.delay(750)
                            if num==answer:
                                score=score+1000+(300-(570-timex))
                                rightsound=pygame.mixer.music.load('./num one and one/yes.wav')
                                pygame.mixer.music.play()
                                screen.blit(text(str(num),text_f,50,green),[400/3+200,300/2*3])
                                pygame.display.update()
                                pygame.time.delay(500)
                                screen.fill(blue)
                                screen.blit(text('Next!',text_f,200,whiteblue),[400-200,300-200])
                                pygame.display.update()
                                pygame.time.delay(800)
                                waiting==False
                                break
                            else:
                                waiting=False
                                failed=True
                                break
                level+=1
            pygame.mixer.music.load('./num one and one/ah.wav')
            pygame.mixer.music.play()
            if num!=None:
                screen.blit(text(str(num),text_f,50,red),[400/3+200,450])
            pygame.display.update()
            pygame.time.delay(500)
            if num!=None:
                screen.blit(text(str(answer),text_f,50,green),[400/3+120+200,450])
            else:
                screen.blit(text(str(answer),text_f,50,green),[400/3+120+200+250,450])
            pygame.display.update()
            pygame.time.delay(6000)
            for runtimes in range(700):
                for randnum in range(random.randint(1,15)):
                    pygame.draw.circle(screen,blue,[random.randint(0,800),random.randint(0,600)],random.randint(10,20),0)
                    pygame.display.update()
            screen.fill(blue)
            pygame.display.update()
            oops=text('oops!',text_f,150,lightblue)
            oopsrect=oops.get_rect()
            screen.blit(oops,[(800-oopsrect.width)/2,50])
            pygame.display.update()
            pygame.mixer.music.load('./num one and one/no.wav')
            pygame.mixer.music.play()
            pygame.time.delay(1000)
            yourscore=text('Your score is:',text_f,50,lightblue)
            scorerect=yourscore.get_rect()
            screen.blit(yourscore,[(800-scorerect.width)/6,250])
            pygame.display.update()
            pygame.time.delay(1000)
            scores.append(score)
            endscore=text(str(score),text_f,80,lightblue)
            screen.blit(endscore,[(800-scorerect.width)/2+scorerect.width-100,235])
            pygame.display.update()
            pygame.time.delay(500)
            tryagain=text('press space to try again',text_f,50,whiteblue)
            tryagainrect=tryagain.get_rect()
            screen.blit(tryagain,[(800-tryagainrect.width)/2,350])
            pygame.display.update()
            pygame.time.delay(500)
            returntext=text('press r to return',text_f,50,whiteblue)
            returntextrect=returntext.get_rect()
            screen.blit(returntext,[(800-returntextrect.width)/2,470])
            pygame.display.update()
            waiting=True
            while waiting==True:
                close()
                for runtimes in range(1):
                    for event in pygame.event.get():
                        if event.type==pygame.KEYDOWN:
                            if event.key==pygame.K_SPACE:
                                rekey='space'
                                waiting==False
                                break
                            elif event.key==pygame.K_r:
                                rekey='r'
                                waiting=False
                                break
            if rekey=='r':
                playagain=False
                break
            elif rekey=='space':
                playagain=True

#####################################################

    if keychoose=='setup':
        screen.fill(blue)
        setdifficulty=text('press d to set diffculty',text_f,50,whiteblue)
        screen.blit(setdifficulty,[(800-setdifficulty.get_rect().width)/2,150])
        setvolume=text('press v to set volume',text_f,50,whiteblue)
        screen.blit(setvolume,[(800-setvolume.get_rect().width)/2,300])
        pygame.display.update()
        waiting=True
        while waiting==True:
            close()
            for event in pygame.event.get():
                if event.type==pygame.KEYDOWN:
                    if event.key==pygame.K_d:
                        keyset='d'
                        waiting=False
                        break
                    elif event.key==pygame.K_v:
                        keyset='v'
                        waiting=False
                        break
        if keyset=='d':
            while True:
                screen.fill(blue)
                d_choose_text=text('press a number between 1(easy) and 5(difficult)',text_f,30,whiteblue)
                d_now_text=text('The difficulty is '+str(difficulty+1)+' now',text_f,60,whiteblue)
                d_return_text=text('press r to return',text_f,50,whiteblue)
                screen.blit(d_now_text,[(800-d_now_text.get_rect().width)/2,150])
                screen.blit(d_choose_text,[(800-d_choose_text.get_rect().width)/2,300])
                screen.blit(d_return_text,[(800-d_return_text.get_rect().width)/2,450])
                pygame.display.update()
                while True:
                    waiting=True
                    num=None
                    while waiting==True:
                        if random.randint(1,10)==1:
                            close()
                        if num!=None:
                            waiting=False
                            break
                        for event in pygame.event.get():
                            if event.type==pygame.KEYDOWN:
                                if event.key==pygame.K_1:
                                    num=1
                                    break
                                elif event.key==pygame.K_2:
                                    num=2
                                    break
                                elif event.key==pygame.K_3:
                                    num=3
                                    break
                                elif event.key==pygame.K_4:
                                    num=4
                                    break
                                elif event.key==pygame.K_5:
                                    num=5
                                    break
                                elif event.key==pygame.K_r:
                                    num=0
                                    break
                    if num<=5 and num>=1:
                        difficulty=num-1
                        break
                    elif num==0:
                        break
                if num==0:
                    break
        if keyset=='v':
            v_return=False
            while True:
                screen.fill(blue)
                volume_text=text('press a number between 0(quiet) and 9(loud) or m(max)',text_f,25,whiteblue)
                volume_now=text('The volume is '+str(volume)+' now',text_f,60,whiteblue)
                return_text=text('press r to return',text_f,50,whiteblue)
                screen.blit(volume_now,[(800-volume_now.get_rect().width)/2,150])
                screen.blit(volume_text,[(800-volume_text.get_rect().width)/2,300])
                screen.blit(return_text,[(800-return_text.get_rect().width)/2,450])
                pygame.display.update()
                for runtimes4 in range(1):
                    if random.randint(1,5)==1:
                        close()
                    for event in pygame.event.get():
                        if event.type==pygame.KEYDOWN:
                            if event.key==pygame.K_m:
                                volume=1.0
                                pygame.mixer.music.set_volume(volume)
                                break
                            elif event.key==pygame.K_9:
                                volume=0.9
                                pygame.mixer.music.set_volume(volume)
                                break
                            elif event.key==pygame.K_8:
                                volume=0.8
                                pygame.mixer.music.set_volume(volume)
                                break
                            elif event.key==pygame.K_7:
                                volume=0.7
                                pygame.mixer.music.set_volume(volume)
                                break
                            elif event.key==pygame.K_6:
                                volume=0.6
                                pygame.mixer.music.set_volume(volume)
                                break
                            elif event.key==pygame.K_5:
                                volume=0.5
                                pygame.mixer.music.set_volume(volume)
                                break
                            elif event.key==pygame.K_4:
                                volume=0.4
                                pygame.mixer.music.set_volume(volume)
                                break
                            elif event.key==pygame.K_3:
                                volume=0.3
                                pygame.mixer.music.set_volume(volume)
                                break
                            elif event.key==pygame.K_2:
                                volume=0.2
                                pygame.mixer.music.set_volume(volume)
                                break
                            elif event.key==pygame.K_1:
                                volume=0.1
                                pygame.mixer.music.set_volume(volume)
                                break
                            elif event.key==pygame.K_0:
                                volume=0.0
                                pygame.mixer.music.set_volume(volume)
                                break
                            elif event.key==pygame.K_r:
                                v_return=True
                                break
                if v_return==True:
                    break

           



           









