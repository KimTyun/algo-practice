#24511 queuestack 
import sys
import math
sys.stdin = open("input.txt", "r")

N = int(sys.stdin.readline())
testCase = [list(map(int,x.split(' '))) for x in sys.stdin.readlines()]


#nCk = n!/(n-k)!k!
def nCk(N,K):
    return math.factorial(N)//(math.factorial(N-K)*math.factorial(K)) 

answer = []
for tc in testCase:
    N,M = tc
    answer.append(nCk(M,N))


print('\n'.join(list(map(str,answer))))
