


function drawPage() {

  if (enemyCollection[0].health < 0) {
    enemyCollection[0].health = 0
    clearInterval(enemyAttackses)
    // document.getElementsByClassName("weapon")

  }
  if (playerCollection[0].health < 0) {
    playerCollection[0].health = 0

    clearInterval(enemyAttackses)
  }
  //////////////////////////////////////////////////Broken if-statement that breaks everything. STAY AWAY!!!!////////////////////////////////////

  // if (health = 0) {
  // document.getElementById("healthLvl").innerText = "You won"
  // } // else {
  //   document.getElementsByClassName("weapon=").disabled = false
  // }

  ///////////////////////////////////////////////////////////////////

  if (playerCollection[0].health < 1 && !videoLoaded) {
    document.body.innerHTML = `<video src= "assets/gameOver.mp4" style= "width: 100%; height: auto;" autoplay ></video>`
    videoLoaded = !videoLoaded
  } else {

    document.getElementById("healthLvl").innerText = enemyCollection[0].health

    document.getElementById("player-health-readout").innerText = playerCollection[0].health


    document.getElementsByClassName("progress-bar")[0].setAttribute("style", `width: ${enemyCollection[0].health}%`)

    document.getElementsByClassName("progress-bar")[1].setAttribute("style", `width: ${playerCollection[0].health}%`)
  }
  if (enemyCollection[0].health < 1) {
    document.getElementById("winWin").innerHTML = `<audio src="assets/celebrate.mp3" autoplay ></audio>`
    document.getElementById('enemyShip').setAttribute('src', "assets/winWin.gif")
  }
}


class GameController {
  
}