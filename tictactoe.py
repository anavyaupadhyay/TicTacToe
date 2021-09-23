board = {'0':'*','1':'*','2':'*','3':'*','4':'*','5':'*','6':'*','7':'*','8':'*'} 
i=1
def printb():
    t=0
    for x in range(9):
        t+=1
        print(board[str(x)], end = ''),
        if t==3:
            print()
            t = 0
        elif t!=3 and t!=0:
            print(' | ', end = '')
    print('')
def checkb(p):
    global i
    for t in range(0,7,3):
        if (board[str(t)] == board[str(t+1)] == board[str(t+2)] == 'X') or (board[str(t)] == board[str(t+1)] == board[str(t+2)] == 'O'):
            printb()
            print('Winner of the match is Player {} '.format(p))
            i=0
        
    for t in (0,1,2):
        if (board[str(t)] == board[str(t+3)] == board[str(t+6)] == 'X' )or (board[str(t)] == board[str(t+3)] == board[str(t+6)] == 'O'):
            printb()
            print('Winner of the match is Player {} '.format(p))
            i=0 

    if (board[str(0)] == board[str(4)] == board[str(8)] == 'X') or (board[str(0)] == board[str(4)] == board[str(8)] =='O'):
        printb()
        print('Winner of the match is Player {} '.format(p))
        i=0

    if (board[str(2)] == board[str(4)] == board[str(6)] == 'X') or (board[str(2)] == board[str(4)] == board[str(6)] == 'O'):
        printb()
        print('Winner of the match is Player {} '.format(p))
        i = 0                          
def inpb(inp,P):
    if P =='A':
        board[inp] = 'X'
    if P =='B':
        board[inp] = 'O'
def replay():
    choice = input('Play Again? Enter y or n')
    return choice == 'y'
print('\n\n\nWelcome to the TICTACTOE')
print('------------------------')
print('\nPosition keys of board:-->')
print('\n 0 | 1 | 2 \n 3 | 4 | 5 \n 6 | 7 | 8\n')

while i:
    
    inp = input('Player A:')
    inpb(inp,'A')
    checkb('A')
    if i:
        printb()
        inp = input('Player B:')
        inpb(inp,'B')
        checkb('B')
        if i:
            printb()
    if not i:
        if replay():
            board = {'0':'*','1':'*','2':'*','3':'*','4':'*','5':'*','6':'*','7':'*','8':'*'}
            i+=1
    
                
print('Game Over!')
    
