# 1269 대칭 차집합
import sys
sys.stdin = open("input.txt", "r")

N =  int(sys.stdin.readline().rstrip())
input = [x.rstrip() for x in sys.stdin.readlines()]   


answer= []
def getGCD(A,B):
    r= A%B
    if(r==0): return B
    return getGCD(B,r)


for i in input:
    A,B = [int(x) for x in i.split(' ')]
    GCD=getGCD(A,B)
    LCM = A*B/GCD
    answer.append(str(int(LCM)))

print('\n'.join(answer))