let board = [
    ['00', '01', '02'],
    ['10', '11', '12'],
    ['20', '21', '22']
]

// [`00`] [`01`] [`02`]
// [`10`] [`11`] [`12`]
// [`20`] [`21`] [`22`]

// [`00`] [`10`] [`20`]
// [`01`] [`11`] [`21`]
// [`02`] [`12`] [`22`]

// [`00`] [`11`] [`22`]
// [`02`] [`11`] [`20`]

function byebye() {
    location.reload();
  return false;
  }

//   <!-------- MODAL -------->

  
let modal = document.getElementById("myModal");


let btn = document.getElementById("myBtn");


let span = document.getElementsByClassName("close")[0];

 
btn.onclick = function() {
  modal.style.display = "block";
}


span.onclick = function() {
  modal.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// <!-------- MODAL -------->

let oSound = document.getElementById("s1");
let xSound = document.getElementById("s2");



let turn =`O`

function press(cellNO) {

    if(turn == "O"){
        turn="X"
        xSound.play();
    }
    else{
        turn="O"
        oSound.play()
    }

  board [cellNO] =turn
  document.getElementById(`${cellNO}`).innerText=turn

if (board [`00`] == turn && board [`01`] == turn && board [`02`] == turn  ){
  document.getElementById(`state`).innerText=` ${turn} IS THE WINNER  `
}
if (board [`10`] == turn && board [`11`] == turn && board [`12`] == turn  ){
    document.getElementById(`state`).innerText=` ${turn} IS THE WINNER  `
  }
    
  if (board [`20`] == turn && board [`21`] == turn && board [`22`] == turn  ){
    document.getElementById(`state`).innerText=` ${turn} IS THE WINNER  `
  }
   
  if (board [`00`] == turn && board  [`10`] == turn && board [`20`] == turn  ){
    document.getElementById(`state`).innerText=` ${turn} IS THE WINNER  `

  }
    
  if (board [`01`] == turn && board [`11`] == turn && board [`21`] == turn  ){
    document.getElementById(`state`).innerText=` ${turn} IS THE WINNER  `

  } 
  if (board [`02`] == turn && board [`12`]  == turn && board [`22`] == turn  ){
    document.getElementById(`state`).innerText=` ${turn} IS THE WINNER  `

  } 
  if (board [`00`] == turn && board [`11`] == turn && board  [`22`] == turn  ){
    document.getElementById(`state`).innerText=` ${turn} IS THE WINNER  `

  }
    
  if (board [`02`] == turn && board [`11`] == turn && board [`20`] == turn  ){
    document.getElementById(`state`).innerText=` ${turn} IS THE WINNER  `

  }
  
    
   

  // Do stuff
    console.log(cellNO)
    
}