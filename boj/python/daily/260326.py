#10844 쉬운 계단 수
import sys
import os
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
sys.stdin = open(os.path.join(BASE_DIR, "input.txt"), "r")

N= int(sys.stdin.readline())

# N이 1일땐 9임
# N+1자릿수의 계단 수는 N자릿수의 계단수 앞자리에 +1이나 -1은 붙인 형태일거임
# ex 21 -> 212 & 210
# 즉 계단수가 2배가 됨
# 근데 0의 -1은 안됨 & 9의 +1은 안됨
# N이 1일땐 9개 있는데 N이 2일땐 9x2에 90만 빠짐 17개
# N이 3일땐 17개중에 10[9]랑 89[0]이 빠져야함 17x2)-2
# N이 5,6,...일땐? ..1210이랑 ..3210이랑 등등이 생김.
# 2배에 0이랑 9로 끝나는 갯수만큼 빼면 됨

# n이 3일땐 10이랑  89 2개임
# n이 4일땐 210이랑 789, 989 3개임
# n이 5일땐 3210 1210, 6789 8789, 8989 5개임
# n이 6일땐 3210 2개, 1210 1개, 6789 2개, 8789 2개 8989 2개 9개임
# 규칙이 뭐임????

# 기존생각 다 폐기. dp[N][digit] 으로 저장해서 dp[n-1][digit]에서 계산해나감
#dp[n][0]은 dp[n-1][1]과 같음. dp[n][9]도 dp[n-1][8]과 같음
#dp[n][2~8]은 dp[n-1][digit-1]+dp[n-1][digit+1]과 같음

MOD = 1000000000

dp=[[1 for x in range(10)] for _ in range(N)]
dp[0][0] = 0

for n in range(1,N):
    dp[n][0]=dp[n-1][1] %MOD
    dp[n][9]=dp[n-1][8] %MOD
    for digit in range(1,9):
        dp[n][digit] = dp[n-1][digit-1]+dp[n-1][digit+1] %MOD

answer=0
for i in dp[N-1]:
    answer+=i%MOD

print(answer%MOD)
