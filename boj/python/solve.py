#1912 연속합
import sys
import os
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
sys.stdin = open(os.path.join(BASE_DIR, "input.txt"), "r")

N= int(sys.stdin.readline())

numbers = [int(x) for x in sys.stdin.readline().split()]
# dp[n]은 numbers[n]까지의 누적합 중 최댓값
# numbers[10 -4 3 1 5 6 -35 12 21 -1]면
# dp [10,6,9,10,15,21,-14,12,33,32]

# dp[0]은 numbers[0]이고, dp[i]는 dp[i-1]+numbers[i]와 numbers[i]중 큰 수임.
# answer는 dp의 최댓값.

answer = numbers[0]
dp = [0 for x in range(N)]
dp[0] = numbers[0]
for i in range(1,N):
    dp[i] = dp[i-1]+numbers[i] if dp[i-1]+numbers[i]> numbers[i] else numbers[i]
    if dp[i]>answer: answer=dp[i]

print(max(dp))

