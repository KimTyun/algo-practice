import sys
import os

if os.path.exists("input.txt"):
    sys.stdin = open("input.txt", "r")



#하노이의 탑
def 하노이의탑():
    N = sys.stdin.readline()
    print(N)

    # 재귀 흐름
    # 1. N-1개의 탑을 보조탑으로 옮긴다
    # 2. 제일 큰 원반을 메인탑으로 옮긴다
    # 3. N-1탑을 메인탑으로 옮긴다
    # 4. N이 1이면 메인탑으로 옮긴다

    def solution(n):
        
        answer = []
        def recursion(N,now,sub,main):
            if(N==1): 
                answer.append([now,main]) #4
                return
            recursion(N-1,now,main,sub)
            answer.append([now,main])
            recursion(N-1,sub,now,main)


        recursion(int(n),1,2,3)
        return answer


            


    print(solution(N))