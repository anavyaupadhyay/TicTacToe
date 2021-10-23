//for grabbing restart button
var reloadButton = document.querySelector('#b');

//To grab all the squares
var squares = document.querySelectorAll('td');

//clear the board

function clearBoard(){
    for(var i = 0; i < squares.length; i++){
        squares[i].textContent = '';
    }
    $('h2').text("");
    
}

reloadButton.addEventListener('click', clearBoard);
var chances = 0;
//To check all the squares
function boardMarker() {
    if((this.textContent == 'X') || (this.textContent == 'O')){
        alert('Retry')
    }else if(chances%2 ==0){
        this.textContent = 'X';
        chances+=1;
    } else{
        this.textContent = 'O';
        chances+=1;
    }
    
    // if(this.textContent ===''){
    //     this.textContent = 'X';
    // }else if(this.textContent === 'X') { 
    //     this.textContent = 'O';
    // } else {
    //     this.textContent = '';
    // } 
}
for(var i = 0; i< squares.length; i++){
    squares[i].addEventListener('click', boardMarker);
    squares[i].addEventListener('click', setboard);
    
}
/************************************************************/

function setboard(){

     var board = [$('#one').text(), $('#two').text(), $('#three').text(), $('#four').text(), $('#five').text(), $('#six').text(), $('#seven').text(), $('#eight').text(), $('#nine').text()];
     
    for( var i = 0; i < 3; i++){
        if((board[i] === board[i+3]) && (board[i+6] === board[i+3]) && (board[i] != '')){
            alert('You won');
            $('h2').text("Booyah, You Won!");
        }
    }
    for( var i = 0; i < 9; i+=3){
        if((board[i] === board[i+1]) && (board[i+1] === board[i+2]) && (board[i] !== '')){
            alert('You won');
            $('h2').text("Booyah, You Won!");
        }
    }
    for( var i = 0; i < 3; i+=2){
        if((board[i] === board[4]) && (board[4] === board[8-i]) && (board[4] != '')){
            alert('You won');
            $('h2').text("Booyah, You Won!");
        }

    }
    
    
    
    
    console.log(board)
}


//modalbox



// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("rulesbtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}