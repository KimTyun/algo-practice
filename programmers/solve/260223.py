import sys
import os
import ast

if os.path.exists("input.txt"):
    sys.stdin = open("input.txt", "r")

edges = ast.literal_eval(sys.stdin.readline().strip())

from collections import defaultdict
import copy
def solution(n,wires):
    answer = -1

    graph=defaultdict(list)
    for a,b in wires:
        graph[a].append(b)
        graph[b].append(a) 

    for a,b in wires:
        newGraph = copy.deepcopy(graph)
        newGraph[a].remove(b)
        newGraph[b].remove(a)
        
        result = dfs(n,newGraph)
        if answer == -1 or result<answer:
            answer= result
        
    
    
    
    return answer

def dfs(N,graph):
    stack = []
    stack.append(1)
    count = 0
    checked = [False for x in range(N+1)]
    while len(stack)!=0:
        node = stack.pop()
        count+=1
        checked[node]=True

        for n in graph[node]:
            if checked[n]:
                continue
            stack.append(n)

    return abs(count-(N-count))



print(solution(4,edges))

