#14888 연산자끼워넣기
import sys
import math
import os
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
sys.stdin = open(os.path.join(BASE_DIR, "../input.txt"), "r")

N = int(sys.stdin.readline())
numbers = [int(x) for x in sys.stdin.readline().split()]
operators = [int(x) for x in sys.stdin.readline().split()]

def calc(op,num1,num2):
    if op ==0:
        return num1+num2
    elif op==1:
        return num1-num2
    elif op==2:
        return num1*num2
    elif op==3:
        absresult = abs(num1)//abs(num2)
        if (num1<0 and num2>0) or (num1>0 and num2<0):
            absresult = -absresult
        return absresult

def dfs():
    stack=[]
    small='NaN'
    big='NaN'
    for index, operator in enumerate(operators):
        if operator!=0:
            new = operators[:]
            new[index]-=1
            stack.append((1,index,numbers[0],new))
    
    while len(stack)!=0:
        depth,operator,temp,leftOperators = stack.pop()

        result = calc(operator,temp,numbers[depth])
        if depth== N-1:
            if small=='NaN' or result<small:
                small=result
            if big=='NaN' or result>big:
                big = result
            continue

        for index, op in enumerate(leftOperators):
            if op!=0:
                new = leftOperators[:]
                new[index]-=1
                stack.append((depth+1,index,result,new))
    
    return (big,small)


(a,b)= dfs()
print(f'{a}\n{b}')