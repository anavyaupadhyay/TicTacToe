//for grabbing restart button
var reloadButton = document.querySelector('#b');

//To grab all the squares
var squares = document.querySelectorAll('td');

//clear the board

function clearBoard(){
    for(var i = 0; i < squares.length; i++){
        squares[i].textContent = '';
    }
}

reloadButton.addEventListener('click', clearBoard);
//To check all the squares
function boardMarker() {
    if(this.textContent ===''){
        this.textContent = 'X';
    }else if(this.textContent === 'X') { 
        this.textContent = 'O';
    } else {
        this.textContent = '';
    } 
}
for(var i = 0; i< squares.length; i++){
    squares[i].addEventListener('click', boardMarker);
    
}
/************************************************************/
//Testing Here



// for (var i in ['one','two','three','four','five','six','seven','eight','nine']) {
//     var temp = document.getElementById('one')
//     board.push(temp);
// }
// var board = ['#','#','#','#','#','#','#','#','#'];
// var td = document.getElementsByTagName("td");
// for (var i = 0; i < td.length; i++) {
//   td[i].onclick = function() {
//     // alert(this.innerHTML);
//     board.splice(i, 1, this.innerHTML);
//     console.log(board);
//   }
  
// }


// function checkb(){
//     var winner = document.querySelector('#Winner');
//     console.log(squares);
//     for( var i = 0; i < 3; i++){
//         if(squares[i] == 'X'){
//             alert('You won');
//             console.log('checkb');
//         }
//     }
//     for( var i = 0; i < squares.length; i+=3){
//         if(squares[i] === squares[i+1] === squares[i+2]){
//             winner.textContent = 'Booyah! You Won';
//         }
//     }
//     if(squares[0] === squares[4] === squares[8]){
//         winner.textContent = 'Booyah! You Won';
//     }
//     if(squares[2] === squares[4] === squares[6]){
//         winner.textContent = 'Booyah! You Won';
//     }
// }





//Algo