# 2346 풍선 터트리기
from collections import deque
import sys
sys.stdin = open("input.txt", "r")

def A_2346():
    N, *arr = map(int, sys.stdin.read().split())

    dq = deque((i+1, arr[i]) for i in range(N))
    ans = []

    while dq:
        idx, move = dq.popleft()
        ans.append(idx)
        if not dq:
            break
        if move > 0:
            dq.rotate(-(move-1))
        else:
            dq.rotate(-move)

    print(*ans)



#24511 queuestack 
def A_24511():
    N,A,B,M,C = [x.rstrip() for x in sys.stdin.readlines()]

    A= [int(x) for x in A.split(' ')]
    B= [x for x in B.split(' ')]
    C= [x for x in C.split(' ')]
    N=int(N)
    M=int(M)
    # A가 1일때(=stack일때) 넣은값 그대로 뺌 => 무시
    # A가 0일때(=queue일때) 값이 바뀜

    list=deque()
    for i in range(N):
        if A[i] == 1:
            continue
        else:
            list.append(B[i])    

    # stack만 남은 배열 [1,4] 
    # 여기에 어떠한 N을 넣으면 [N,1,4]이 되고 4가 출력 => 다 넣고 뒤에서부터 빼면되겠네 

    for i in range(M):
        list.appendleft(C[i])
        if len(list) > M:
            break

    list.reverse()

    print(' '.join([*list][:M]))
