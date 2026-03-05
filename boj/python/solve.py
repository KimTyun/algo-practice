#24416 알고리즘 수업 -피보나치 수1
import sys
import os
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
sys.stdin = open(os.path.join(BASE_DIR, "input.txt"), "r")

N= int(sys.stdin.readline())

def fibonacci(n):
    f = list(range(n+1))
    f[1] = 1
    f[2] = 1
    for i in range(3,n+1):
        f[i] = f[i-1]+f[i-2]
    return f[n]



print(fibonacci(N), N-2 if N>=3 else 1)
