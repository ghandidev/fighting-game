function rectangularCollision ({
  rectangula1, rectangula2
}) {
  return(rectangula1.attackBox.position.x + rectangula1.attackBox.width >= rectangula2.position.x && 
         rectangula1.attackBox.position.x <= rectangula2.position.x +rectangula2.width && 
         rectangula1.attackBox.position.y + rectangula1.attackBox.height >= rectangula2.position.y &&
         rectangula1.attackBox.position.y <= rectangula2.position.y + rectangula2.height
        )
}

function determineWinner({player, enemy, timerId}) {
  clearTimeout(timerId)
      document.querySelector('#displayText').style.display = 'flex'
  if (player.health === enemy.health) {
      document.querySelector('#displayText').innerHTML = 'Tie'
  } else if (player.health > enemy.health) {
      document.querySelector('#displayText').innerHTML = 'Player 1 Win'
  } else if (player.health < enemy.health) {
      document.querySelector('#displayText').innerHTML = 'Player 2 Win'
  }    
}

let timer = 60
let timerId

function decreaseTimer() {
if (timer > 0) {
  timerId = setTimeout(decreaseTimer, 1000)
  timer--
  document.querySelector('#timer').innerHTML = timer
} 

if (timer === 0 ) {
      determineWinner({player, enemy, timerId})
}
}