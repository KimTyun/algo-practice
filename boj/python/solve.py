# 10989번 수 정렬하기 3
import sys
sys.stdin = open("input.txt", "r")
sys.stdin.readline()
list = [0]*10001
for line in sys.stdin:
    list[int(line)] += 1
for i in range(10001):
    if list[i] != 0:
        for j in range(list[i]):
            sys.stdout.write(str(i) + '\n')
