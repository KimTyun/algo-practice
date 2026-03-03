#14889 스타트와 링크
import sys
import os
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
sys.stdin = open(os.path.join(BASE_DIR, "../input.txt"), "r")

N= int(sys.stdin.readline())

grid = [[int(y) for y in x.rstrip().split()] for x in sys.stdin.readlines()]

from collections import deque
def makeTeam(N):
    team = deque()
    temp = []
    
    M= N//2
    def recursion():
        if len(temp) == M:
            team.append(temp[:])
            return
        
        start = (temp[-1]+1) if temp else 0
        for i in range(start,N):
            temp.append(i)
            recursion()
            temp.pop()


    recursion()
    return team

teamList = makeTeam(N)

def powerCheck(team):
    result = 0
    for i in team:
        for j in team:
             result += grid[i][j]
            
            
    return result

answer = float('inf')
for _ in range(len(teamList)//2):
    스타크 = teamList.popleft()
    링크 = teamList.pop()
    balance = abs(powerCheck(스타크)-powerCheck(링크))
    if balance < answer:
        answer=balance
    if answer ==0:
        break

print(answer)
