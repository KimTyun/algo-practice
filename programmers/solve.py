import sys
import os
import ast

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
sys.stdin = open(os.path.join(BASE_DIR, "input.txt"), "r")

nodeinfo = ast.literal_eval(sys.stdin.readline().strip())


#길찾기 게임

# 1. 같은 레벨의 노트끼리 묶기.
# 2. 최상단 노드부터 연결 그래프를 그리기
# 3. 만들어진 연결 그래프로 정답 도출하기
from collections import defaultdict
def solution(nodeinfo):
    answer = [[]]
    # 1.
    tempDict = defaultdict(list)
    tempList = [False for x in range(len(nodeinfo)+1)]
    for index,node in enumerate(nodeinfo):
        tempDict[node[1]].append([node[0],index+1])
        if not tempList[node[1]]:
            tempList[node[1]] = True
    #2. 
    level = 0
    treeDict = defaultdict(list)
    while(len(tempList)):
        if not tempList.pop(): 
            continue
        level+=1
        if level==1:
            treeDict[level].append([tempDict[len(tempList)]])
        
    return answer


solution(nodeinfo)

