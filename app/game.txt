let modifier = 10

let health = 1000

let playerHealth = 100

let winCount = 0


setInterval(enemyAttack, 3000);

drawPage()

function enemyAttack() {
  playerHealth -= 1.5 * modifier


}



function whenPressedM() {
  health -= 100
  alert(health.toLocaleString)
  drawPage()
}

function whenPressedI() {

  health -= 150
  alert(health.toLocaleString)
  drawPage()
}

function whenPressedC() {

  health -= 230
  alert(health.toLocaleString)
  drawPage()
}

function whenPressedK() {

  health -= 370
  alert(health.toLocaleString)
  drawPage()
}


function drawPage() {
  health < 0 ? health = 0 : health += 0
  playerHealth < 0 ? playerHealth = 0 : playerHealth += 0
  debugger
  if (health <= 0) {
    health = 0
    document.getElementsByClassName("weapon").disabled = true
    document.getElementById("healthLvl").innerText = "You won"
  } else {
    document.getElementsByClassName("weapon=").disabled = false

  }

  document.getElementById("healthLvl").innerText = health

  document.getElementsByClassName("progress-bar")[0].setAttribute("style", `width: ${health / 10}%`)

  if (modifier > 10) {
    document.getElementById("weapon02").disabled = false
  } else if (modifier > 20) {
    document.getElementById("weapon03").disabled = false
  } else if (modifier > 30) {
    document.getElementById("weapon04").disabled = false
  }

  health < 1 ? enemyDied() : playerHealth < 1 ? playerDied() : health += 0
}
function reset() {
  // modifier = 10
  // winCount = 0
  health = 1000

}

function playerDied() {
  document.getElementsByClassName("weapons").disabled = true;
  setTimeout(playerDiedS, 1000)
}
function playerDiedS() {
  alert("Lol u ded");
  reset()
}
function enemyDied() {
  modifier += 10
  winCount++
  if (winCount = 4) {

  }
  document.getElementById("enemyShip").setAttribute("src", "")
  setTimeout(enemyDiedS, 2000)
}
function enemyDiedS() {
  prompt("Enemy rinforcements inbound")
  document.getElementById("enemyShip").setAttribute("src", "enemy" + winCount + ".png")
  health = 100 * modifier

}