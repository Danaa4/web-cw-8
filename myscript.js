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

let turn =`O`

function press(cellNO) {

    if(turn == "O"){
        turn="X"
    }
    else{
        turn="O"
    }

  board [cellNO] =turn
  document.getElementById(`${cellNO}`).innerText=turn

if (board [`00`] == turn && board [`01`] == turn && board [`02`] == turn  ){
  document.getElementById(`state`).innerText=`Winner `
}
if (board [`10`] == turn && board [`11`] == turn && board [`12`] == turn  ){
    document.getElementById(`state`).innerText=`Winner `
  }
    
  if (board [`20`] == turn && board [`21`] == turn && board [`22`] == turn  ){
    document.getElementById(`state`).innerText=`Winner `
  }
   
  if (board [`00`] == turn && board  [`10`] == turn && board [`20`] == turn  ){
    document.getElementById(`state`).innerText=`Winner `

  }
    
  if (board [`01`] == turn && board [`11`] == turn && board [`21`] == turn  ){
    document.getElementById(`state`).innerText=`Winner `

  } 
  if (board [`02`] == turn && board [`12`]  == turn && board [`22`] == turn  ){
    document.getElementById(`state`).innerText=`Winner `

  } 
  if (board [`00`] == turn && board [`11`] == turn && board  [`22`] == turn  ){
    document.getElementById(`state`).innerText=`Winner `

  }
    
  if (board [`02`] == turn && board [`11`] == turn && board [`20`] == turn  ){
    document.getElementById(`state`).innerText=`Winner `


  function myFunction() {
    location.reload();
  }
  }
  
   

  // Do stuff
    console.log(cellNO)
    
}