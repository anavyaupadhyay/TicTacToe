board = {'0':'*','1':'*','2':'*','3':'*','4':'*','5':'*','6':'*','7':'*','8':'*'} 
i=1
def printb():
    t=0
    for x in range(9):
        t+=1
        print(board[str(x)], end = '  '),
        if t==3:
            print(' ')
            print(' ')
            t = 0
def checkb(p):
    global i
    for t in range(0,7,3):
        if board[str(t)] == board[str(t+1)] == board[str(t+2)] == ('X' or 'O'):
            print('Winner of this match is Player {} '.format(p))
            i=0
            return 'Game Over!'
             
    for t in (0,1,2):
        if board[str(t)] == board[str(t+3)] == board[str(t+6)] == ('X' or 'O'):
            print('Winner of this match is Player {} '.format(p))
            i=0
            return 'Game Over!'
            
    if board[str(0)] == board[str(4)] == board[str(8)] == ('X' or 'O'):
            print('Winner of this match is Player {} '.format(p))
            i=0
            return 'Game Over!'

    if board[str(2)] == board[str(4)] == board[str(6)] == ('X' or 'O'):
            print('Winner of this match is Player {} '.format(p))
            i=0
            return 'Game Over!'        
def inpb(inp,P):
    if P =='A':
        board[inp] = 'X'
    if P =='B':
        board[inp] = 'O'

printb()
while i:
    
    inp = input('Player A:')
    inpb(inp,'A')
    checkb('A')
    printb()
    if i:
        inp = input('Player B:')
        inpb(inp,'B')
        checkb('B')
        printb()
    else: 
        print('Game Over!')

    