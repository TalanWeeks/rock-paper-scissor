
function startGame(){
  document.getElementById("start-button").classList.add("visually-hidden")
  document.getElementById("playagain-button").classList.add("visually-hidden")  
  document.getElementById("game-options").classList.remove("visually-hidden")
  document.getElementById("winner-message").classList.add("visually-hidden")
  resetColor()
  
}

function gameFunction(){  
  
    let randomNum = Math.round(Math.random()*10)
    document.getElementById("winner-message").classList.remove("visually-hidden")
    console.log(randomNum)
      if(randomNum < 5){
        document.getElementById("winner-status-message").textContent = 'You Lost!'
        document.getElementById("winner-message").classList.add("text-danger")
      } else if(randomNum < 7){
        document.getElementById("winner-status-message").textContent = 'You Tied!'
        document.getElementById("winner-message").classList.add("text-light")
      }
       else if(randomNum < 11){
        document.getElementById("winner-status-message").textContent = 'You Won!'
        document.getElementById("winner-message").classList.add("text-success")
      }
       endGame()
}

function endGame(){
  document.getElementById("playagain-button").classList.remove("visually-hidden")
  document.getElementById("quit-button").classList.remove("visually-hidden")
 
  document.getElementById("game-options").classList.add("visually-hidden")


}

function resetColor() {
  document.getElementById("winner-message").classList.remove("text-success")
  document.getElementById("winner-message").classList.remove("text-danger")
  document.getElementById("winner-message").classList.remove("text-light")
}

function startingMenu(){
  document.getElementById("start-button").classList.remove("visually-hidden")
  document.getElementById("playagain-button").classList.add("visually-hidden")
  document.getElementById("game-options").classList.add("visually-hidden")
  document.getElementById("winner-message").classList.add("visually-hidden")
  document.getElementById("quit-button").classList.add("visually-hidden")
}