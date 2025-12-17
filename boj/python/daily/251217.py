# 1764 듣보잡
import sys
sys.stdin = open("input.txt", "r")

N,M = [int(x) for x in sys.stdin.readline().split(' ')]
input = [x.rstrip() for x in sys.stdin.readlines()]   

setN= set()
setM= set()

for index, value in enumerate(input):
    if((int(index))<N):
        setN.add(value)
    else:
        setM.add(value)

answer = setN & setM

result = sorted(answer)

print(len(result))
print('\n'.join(result))