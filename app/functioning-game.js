class enemy {
  constructor(name, health, fileName, lazerDamage, waveDamage, plasmaDamage, phazonDamage) {
    this.name = name
    this.health = health
    this.attacks = {
      lazer: lazerDamage,
      wave: waveDamage,
      plasma: plasmaDamage,
      phazon: phazonDamage
    }
    this.fileName = fileName
    this.bonus = {
      ice: .08,
      powerBeam: .30,
      phazonInfusion: .89
    }
  }

  calcMods() {
    let mod = 1
    for(let prop in diffusion) {
      if (diffusion[prop]) {
        mod += this.bonus[prop]
      }
    }
    return mod
  }

  fire(type) {
      this.health -= this.attacks[type] * this.calcMods()

    drawPage()
  }
}

var diffusion = {
  ice: false,
  powerBeam: false,
  phazonInfusion: false
}

function modPressed(modifier) {
  // if (diffusion[modifier]) {
  //   diffusion[modifier] = false
  // } else {
  //   diffusion[modifier] = true
    
  // }
  diffusion[modifier] = !diffusion[modifier]
}

class player {
  constructor(name, health, fileName, GalvanicAcceleratorCannonDamage, QuantumAssultCannonDamage) {
    this.name = name
    this.health = health
    this.attacks = {
      Galvanized: GalvanicAcceleratorCannonDamage,
      Quantum: QuantumAssultCannonDamage
    }
    this.fileName = fileName
  }
}
var enemyFirst = new enemy('enemy01', 100, 'assets/enemy0.png', 3, 15, 20, 30)

var enemySecond = new enemy('enemy02', 500, 'assets/enemy1.png', 15, 27, 30, 78)

var playerOne = new player('P1', 100, 'assets/playerOne.png', 5, 15)

var weaponButtons = document.getElementsByClassName('weapon')
var videoLoaded = false

var playerTwo = new player('P2', 300, '', 4, 13)
//   modifier = 10
//   winCount = 0

var enemyCollection = [
  enemyFirst,
  enemySecond
]

var playerCollection = [
  playerOne,
  playerTwo
]

drawPage()

let enemyAttackses = setInterval(() => {
  playerCollection[0].health -= 7
  drawPage()
}, 3000)

function reset() {
  enemyCollection[0].health = 100

  playerCollection[0].health = 100

  for (let i = 1; i < weaponButtons.length; i++) {
    const button = weaponButtons[i];
    button.setAttribute('disabled', true)
  }
  document.getElementById('winWin').innerHTML = ''
  drawPage()
  document.getElementById('enemyShip').setAttribute('src', enemyCollection[0].fileName)
  document.getElementById('enemyShip').setAttribute('style', '"width: auto; height: 37vh;"')
  enemyAttackses = setInterval(() => {
    playerCollection[0].health -= 7
    drawPage()
  }
    , 3000)



}

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




////////////////////////////////////////////////////Button Function has been replaced////////////////////////////////////////////// 

// function whenPressed(type) {
//   enemyCollection[0].fire(type)
//   // alert(health.toLocaleString)
//   drawPage()
// }

///////////////////////////////////////////////////////Diffusion button reference///////////////////////////////////////////////

// <button id="diffusionWeaponry" class="btn btn-primary float-left btn-md weaponryMod rounded-pill"
//                 onclick="whenPressed('lazer')"><b class="lazer-btn-txt">Diffusion</b></button>