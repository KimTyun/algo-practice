import sys
sys.stdin = open("input.txt", "r")

# 1269 대칭 차집합
def A_1269():
    N,M = [int(x) for x in sys.stdin.readline().split(' ')]
    input = [x.rstrip() for x in sys.stdin.readlines()]   

    setN= set(input[0].split(' '))
    setM= set(input[1].split(' '))

    answer = (setN - setM) | (setM-setN)

    print(len(answer))


# 1934 최소공배수
def A_1934():
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