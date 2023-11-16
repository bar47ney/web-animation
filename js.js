// const canvas = document.getElementById("canvas1")
// const ctx = canvas.getContext("2d")
// canvas.width = 1200
// canvas.height = 850

// let changeColor = 111111
// let strokeColor = "#" + changeColor
// ctx.strokeStyle = strokeColor
// document.write(ctx.strokeStyle)

// // let fillColor = "red"
// // ctx.strokeStyle = fillColor

// let centreX = 150
// let centreY = 150
// let radius = 25

// let change = 10
// let changeChangeColor = 10

// //
// const mouse = {
//     x: null,
//     y: null,
//     radius: 50
// }

// function changeClr(changeChangeColor){
//     if(changeColor >= 999801 || changeColor <= 000000 ){
//         changeChangeColor *= -1
//     }
//     changeColor += changeChangeColor * 33
//     strokeColor = "#" + changeColor
//     ctx.strokeStyle = strokeColor
//     console.log(ctx.strokeStyle)
//     return changeChangeColor
// }

// window.addEventListener("dblclick", function (event){
//     ctx.clearRect(0, 0, canvas.width, canvas.height)
// })

// // window.addEventListener("mousemove", function (event){
// //     mouse.x = event.x
// //     mouse.y = event.y
// //     // ctx.strokeStyle = "red"
// //     changeColor++
// //     strokeColor = "#" + changeColor
// //     ctx.strokeStyle = strokeColor
// //     console.log(ctx.strokeStyle)
// //     // console.log(mouse.x, mouse.y)

// // })
// //

// function changePosition(x, change){
//     x += change
//     console.log(x)
//     return x
// }

// function drawCircle(){
//     // ctx.clearRect(0, 0, canvas.width, canvas.height)
//     ctx.strokeRect(0, 0, canvas.width, canvas.height)
//     ctx.beginPath();
//     // centreX = mouse.x
//     // centreY = mouse.y
//     // if(centreY < mouse.y){
//     //     centreY = changePosition(centreY, 1)
//     // }
//     // if(centreY > mouse.y){
//     //     centreY = changePosition(centreY, -1)
//     // }

//     // if(centreX < mouse.x){
//     //     centreX = changePosition(centreX, 1)
//     // }
//     // if(centreX > mouse.x){
//     //     centreX = changePosition(centreX, -1)
//     // }

//     // if(centreY < mouse.y && centreX < mouse.x){
//     //     centreY = changePosition(centreY, 1)
//     //     centreX = changePosition(centreX, 1)
//     // }
//     // if(centreY < mouse.y && centreX > mouse.x){
//     //     centreY = changePosition(centreY, 1)
//     //     centreX = changePosition(centreX, -1)
//     // }
//     // if(centreY > mouse.y && centreX < mouse.x){
//     //     centreY = changePosition(centreY, -1)
//     //     centreX = changePosition(centreX, 1)
//     // }
//     // if(centreY > mouse.y && centreX > mouse.x){
//     //     centreY = changePosition(centreY, -1)
//     //     centreX = changePosition(centreX, -1)
//     // }

//     ctx.arc(centreX, centreY, radius, 0, Math.PI*2, true);
//     ctx.fill()
//     ctx.stroke()
//     centreX = Math.random() * canvas.width
//     centreY = Math.random() * canvas.height
//     changeChangeColor = changeClr(changeChangeColor)
//     // centreX = changePosition(centreX, change)
//     // if(centreX + radius >= canvas.width){
//     //     change = -10
//     // }
//     // else if(centreX - radius <= 0){
//     //     change = 10
//     // }
//     // if(mouse.x > centreX){

//     // }
//     // centreY = changePosition(centreY, 10)
// }

// // setInterval(() => drawCircle(), 1)

//spider///////////////////////

// let stepChangeShadow = {
//     x: 5,
//     y: 0,
//     stepX: -0.09,
//     stepY: -0.045
// }

// function changeShadow(spiderElements, stepChangeShadow){
//     stepChangeShadow.x += stepChangeShadow.stepX
//     stepChangeShadow.y += stepChangeShadow.stepY
//     for(chek of spiderElements){
//         chek.style.cssText = `
//         box-shadow: ${stepChangeShadow.x}px ${stepChangeShadow.y}px 10px black;`
//     }
//     if(stepChangeShadow.x > 5){
//         stepChangeShadow.stepX *= -1
//     } else if(stepChangeShadow.x < -5){
//         stepChangeShadow.stepX *= -1
//     }
//     if(stepChangeShadow.y > 2){
//         stepChangeShadow.stepY *= -1
//     } else if(stepChangeShadow.y < -2){
//         stepChangeShadow.stepY *= -1
//     }
//     return stepChangeShadow
// }

// window.addEventListener("mousemove", function (event){
//     mouse.x = event.x
//     mouse.y = event.y
// })

// let item1 = document.getElementById("item1")
// let item2 = document.getElementById("item2")
// let item3 = document.getElementById("item3")

// item1.addEventListener("click", function(event){
//     let audio = new Audio("sound/sound1.mp3")
//     audio.autoplay = true
//     console.log("music ON")
// })

// item2.addEventListener("click", function(event){
//     let audio = new Audio("sound/sound2.mp3")
//     audio.autoplay = true
//     console.log("music ON")
// })

// item3.addEventListener("click", function(event){
//     // let audio = new Audio("sound/sound3.mp3")
//     // audio.autoplay = true
//     // console.log("music ON")
//     changeAndPlayMusic(masMusic, counter - 1)
//     interval = setInterval(() => counter = changeAndPlayMusic(masMusic, counter), 240000)
// })

// let interval = null
// let counter = 1

// setInterval(() => clearInterval(interval), 2400000)

// let masMusic = []
// for(let i = 0; i < 10; i++){
//     let str = "sound/music/music" + i + ".mp3"
//     masMusic.unshift(str)
// }

// function changeAndPlayMusic(masMusic, counter){
//     let music = new Audio(masMusic[counter])
//     music.autoplay = true
//     console.log(masMusic[counter])
//     counter++
//     return counter
// }

const main = document.querySelector(".main");
const lightWeb = document.querySelector("#light-web");
let colorWeb = `rgba(255, 255, 255, 0.8)`;
let flagWeb = false;
if (lightWeb) {
  lightWeb.addEventListener("click", () => {
    if (!flagWeb) {
      colorWeb = `rgba(9, 9, 9,`;
      // console.log(colorWeb);
      flagWeb = true;
      lightWeb.classList.add("black-web");
    } else {
      colorWeb = `rgba(255, 255, 255,`;
      // console.log(colorWeb);
      flagWeb = false;
      lightWeb.classList.remove("black-web");
    }
  });
}

const changeWeb = () => {
  if (!flagWeb) {
    colorWeb = `rgba(9, 9, 9,`;
    // console.log(colorWeb);
    flagWeb = true;
    lightWeb.classList.add("black-web");
  } else {
    colorWeb = `rgba(255, 255, 255,`;
    // console.log(colorWeb);
    flagWeb = false;
    lightWeb.classList.remove("black-web");
  }
};

let paramBgColor = {
  now: {
    first: "",
    second: "",
  },
  night: {
    // first: "#1a387513",
    // second: "#041a46",
    first: "#000",
    second: "#000",
  },
  day: {
    first: "red",
    second: "#300404",
  },
  dayOrNight() {
    let nowHours = new Date(Date.now()).getHours();
    // console.log(nowHours);
    if (21 <= nowHours || nowHours < 9) {
      // this.now = this.night;
      this.now = this.day;
    } else if (9 <= nowHours && nowHours < 21) {
      this.now = this.day;
    }
  },
};

let param = {
  procent: 30,
  procentTwo: 60,
  change: 0.5,
  changeTwo: 0.5,
};

const mouse = {
  x: null,
  y: null,
  radius: 50,
};

let gridTemplateColumn = {
  spiderOne: 33,
  spiderTwo: 34,
  spiderThree: 33,
};

function changeBackround(param) {
  param.procent += param.change;
  param.procentTwo += param.changeTwo;
  if (param.procent > 100) {
    param.change *= -1;
  } else if (param.procent < 0) {
    param.change *= -1;
  }
  if (param.procentTwo > 100) {
    param.changeTwo *= -1;
  } else if (param.procentTwo < 0) {
    param.changeTwo *= -1;
  }
  mainElement.style.cssText = `background: radial-gradient(circle farthest-corner at ${param.procent}% ${param.procentTwo}%, ${paramBgColor.now.first}, ${paramBgColor.now.second});
    grid-template-columns: ${gridTemplateColumn.spiderOne}% ${gridTemplateColumn.spiderTwo}% ${gridTemplateColumn.spiderThree}%;	`;
  return param;
}

let mainElement = document.getElementsByClassName("main")[0];
mainElement.style.cssText = `background: radial-gradient(circle closest-side at ${param.procent}% ${param.procentTwo}%, ${paramBgColor.now.first}, ${paramBgColor.now.second});
grid-template-columns: ${gridTemplateColumn.spiderOne}% ${gridTemplateColumn.spiderTwo}% ${gridTemplateColumn.spiderThree}%;	`;

paramBgColor.dayOrNight();
setInterval(() => paramBgColor.dayOrNight(), 3600000);

// window.addEventListener("click", function (event){
//     if(paramBgColor.now === paramBgColor.day){
//         paramBgColor.now = paramBgColor.night
//     }
//     else{
//         paramBgColor.now = paramBgColor.day
//     }
// })

setInterval(() => (param = changeBackround(param)), 55);

const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const canvas2 = document.getElementById("canvas2");
const ctx2 = canvas2.getContext("2d");
canvas2.width = window.innerWidth;
canvas2.height = window.innerHeight;

////NEW_WEB_ANIMATION
let particleArray = [];
const lengthOfParticles = 1000;

class Particle {
  constructor(endX, endY, x, y) {
    this.size = Math.random() * 9 + 1;
    this.x = x;
    this.y = y;
    this.startX = x;
    this.startY = y;
    this.endX = endX;
    this.endY = endY;
    this.distanceX = Math.abs(this.endX - this.x);
    this.distanceY = Math.abs(this.endY - this.y);
    this.distance = Math.sqrt(
      this.distanceX * this.distanceX + this.distanceY * this.distanceY
    );
    this.tangenc = this.distanceX / this.distanceY;
    this.directionX = getRandomArbitrary(66, 99);
    this.directionY = this.directionX / this.tangenc;
    this.direction = Math.sqrt(
      this.directionX * this.directionX + this.directionY * this.directionY
    );
    this.step = this.distance / 20;
    this.stopWeb = 0;
    this.width = Math.random() * 3;
    this.pointsWeb = [];
    if (this.endX < this.x) {
      this.directionX *= -1;
    }
    if (this.endY < this.y) {
      this.directionY *= -1;
    }
  }
  update() {
    if (this.pointsWeb.length === 0) {
      this.pointsWeb.unshift({
        x: this.x,
        y: this.y,
      });
    }
    if (
      this.distanceX > Math.abs(this.startX - this.x) ||
      this.distanceY > Math.abs(this.startY - this.y)
    ) {
      this.x += this.directionX;
      this.y += this.directionY;
      this.stopWeb += this.direction;
      if (this.stopWeb > this.step) {
        this.pointsWeb.unshift({
          x: this.x,
          y: this.y,
          connect: 0,
        });
        this.stopWeb = 0;
      }
      checkInnerTargetElement(targetElement, coordinateTargetElement, this);
    }
  }
  draw() {
    if (
      this.distanceX > Math.abs(this.startX - this.x) ||
      this.distanceY > Math.abs(this.startY - this.y)
    ) {
      // ctx.fillStyle = "white"
      // ctx.beginPath()
      // ctx.arc(this.x, this.y, this.width, 0, Math.PI * 2)
      // ctx.closePath()
      // ctx.fill()
      ctx2.beginPath();
      ctx2.lineCap = "round";
      ctx2.lineJoin = "round";
      ctx2.strokeStyle = colorWeb + " 0.8)";
      ctx2.lineWidth = this.width;
      ctx2.moveTo(this.startX, this.startY);
      ctx2.lineTo(this.x, this.y);
      ctx2.stroke();
      ctx2.closePath();
    }
  }
}

setInterval(() => {
  for (let i = 0; i < particleArray.length; i++) {
    particleArray[i].update();
    particleArray[i].draw();
  }
  connect();
  // ctx.clearRect(0, 0, canvas.width, canvas.height)
}, 20);

window.addEventListener("resize", () => {
  particleArray = [];
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.cssText = `
        display: none;`;
  targetElement.style.cssText = oldStyle;

  canvas2.width = window.innerWidth;
  canvas2.height = window.innerHeight;
});

let targetElement = null;
let oldStyle = null;
let coordinateTargetElement = null;

function checkInnerTargetElement(
  targetElement,
  coordinateTargetElement,
  point
) {
  if (
    coordinateTargetElement.x <= point.x &&
    point.x <= coordinateTargetElement.x + coordinateTargetElement.width &&
    coordinateTargetElement.y <= point.y &&
    point.y <= coordinateTargetElement.y + coordinateTargetElement.height
  ) {
    getElementToWeb(targetElement);
    return true;
  } else {
    return false;
  }
}
function getElementToWeb(targetElement) {
  // targetElement.style.cssText = `
  //               transform: scale(1.3);
  //               box-shadow: 0px 0px 60px black;
  //               transition: 0.3s;`;
  // console.log("вошёл");

  targetElement.classList.add("get-element");
  setTimeout(() => {
    // canvas.style.cssText = `
    //     display: none;`;
    // targetElement.style.cssText = oldStyle;
    targetElement.classList.remove("get-element");
    targetElement.remove();

    ctx2.clearRect(0, 0, canvas.width, canvas.height);
    time = stopTime;
  }, 1000);
}

// setInterval(() => {
//   chooseTarget();
//   console.log(document.querySelectorAll(".target"));
// }, 60000);

let totalScore = 0;
let comboScore = 0;
let comboTimeout = null;
let comboList = 0;

const audioShot = new Audio();
// audio.src = `/sound/shot${Math.ceil(Math.random() * 3)}.mp3`;
audioShot.src = `sound/shot3.mp3`;

function playSound(audio) {
  audio.play();
}

let targetElement2 = null;

const audioAmbient = new Audio();
audioAmbient.src = `sound/sound${Math.ceil(Math.random() * 4)}.mp3`;
audioAmbient.volume = 0.1;

const audioAmbientVenom = new Audio();
audioAmbientVenom.volume = 0.2;

audioAmbient.addEventListener("ended", function () {
  // Увеличиваем индекс текущего трека
  audioAmbient.src = `sound/sound${Math.ceil(Math.random() * 4)}.mp3`;
  // Воспроизводим следующий трек
  playSound(audioAmbient);
});

const audioSpiderRun = new Audio();
audioSpiderRun.src = `sound/spider-run.mp3`;
audioSpiderRun.volume = 0.7;

const audioVenom = new Audio();
audioVenom.src = `sound/venom.mp3`;
audioVenom.volume = 0.5;

const item2 = document.querySelector("#spider2");
let combotarget = 6;
const combotargetBegin = 6;

const giveTarget = (event) => {
  playSound(audioAmbient);
  // if (event.target.classList.contains("target")) {
  checkIfTargetCoordinate(event);
  if (flagCheck && !targetElement2.classList.contains("no-more")) {
    if (document.querySelectorAll(".target")) {
      document.querySelectorAll(".target").forEach((item) => {
        item.classList.remove(".target");
      });
    }
    targetElement2.classList.add("no-more");
    flagCheck = false;
    playSound(audioShot);
    createNewTargets();
    // chooseTarget();
    // console.log(document.querySelectorAll(".target"));
    totalScore += 1;
    comboScore += 1;
    if (comboScore === combotarget) {
      bigFeel(
        (textFeel = `COMBO ULTIMATE WEB!!!`),
        (radiusFeelAdd = window.innerWidth * 0.22),
        (timeAdd = 5),
        (timing = 12000 + comboList * 4000)
      );
      comboScore = 0;
      item2.style = `opacity: ${comboScore / combotarget}`;
      setCombo();
      // clearTimeout(comboTimeout);
    }
    item2.style = `opacity: ${comboScore / combotarget}`;
    // item2.classList.remove(`opacity-venom${comboScore - 1}`);
    // item2.classList.add(`opacity-venom${comboScore}`);
    setCombo();
    if (totalScore % 5 === 0) {
      // bigFeel();
    }
    if (totalScore % 10 === 0) {
      changeBg();
    }
    if (comboScore === 1 && comboList === 0) {
      console.log("start Combo");
      comboTimeout = setTimeout(() => {
        // item2.classList.remove(`opacity-venom${comboScore}`);
        comboScore = 0;
        combotarget = combotargetBegin;
        comboList = 0;
        // item2.classList.add(`opacity-venom${comboScore}`);
        item2.style = `opacity: ${comboScore / combotarget}`;
        setCombo();
        // console.log("end Combo");
      }, 12000);
      // if(comboScore)
    }
    if (comboList === 1) {
      clearTimeout(comboTimeout);
      console.log("end comboTimeout");
    }
    addTime();
    stopTime = time;
    document.querySelector("#score").innerHTML = `Score: ${totalScore}`;
    targetElement = targetElement2;
    // console.log(targetElement);
    particleArray = [];
    canvas.style.cssText = `
      display: block;`;
    oldStyle = window.getComputedStyle(targetElement);
    coordinateTargetElement = targetElement.getBoundingClientRect();
    const lengthWeb = 21 * Math.random() + 1;
    let choose = Math.round(Math.random());
    let radius = null;
    let x = null;
    let y = null;
    if (choose === 1) {
      x = 0;
      y = Math.random() * canvas.height;
      radius = coordinateTargetElement.height;
    } else if (choose === 0) {
      x = Math.random() * canvas.width;
      y = 0;
      radius = coordinateTargetElement.width;
    }
    for (let i = 0; i < lengthWeb; i++) {
      let whereX = (Math.random() * radius) / 2;
      let whereY = (Math.random() * radius) / 2;
      if (Math.round(Math.random()) === 1) {
        whereX *= -20;
      }
      if (Math.round(Math.random()) === 0) {
        whereY *= -20;
      }
      // const endX = event.x + whereX
      // const endY = event.y + whereY
      let endX =
        getRandomArbitrary(
          coordinateTargetElement.x,
          coordinateTargetElement.x + coordinateTargetElement.width
        ) + 1;
      let endY =
        getRandomArbitrary(
          coordinateTargetElement.y,
          coordinateTargetElement.y + coordinateTargetElement.height
        ) + 1;
      // while(endX > event.x + 1 && endX < event.x - 1){
      //     endX = getRandomArbitrary(coordinateTargetElement.x,coordinateTargetElement.x + coordinateTargetElement.width) + 1
      // }
      // while(endY > event.y + 1 && endY < event.y - 1){
      //     endY = getRandomArbitrary(coordinateTargetElement.y,coordinateTargetElement.y + coordinateTargetElement.height) + 1
      // }
      // const xxx = endX
      // const yyy = endY
      particleArray.unshift(new Particle(endX, endY, x, y));
    }
  }
};

let stopTime = null;
window.addEventListener("click", (event) => {
  giveTarget(event);
});

const changeBg = () => {
  paramBgColor.day.first = `rgb(${Math.floor(
    Math.random() * 255
  )}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
  paramBgColor.day.second = `rgb(${Math.floor(
    Math.random() * 255
  )}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
};

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function connect() {
  let opacityValue = 1;
  const valueConnectWeb = getRandomArbitrary(10, 20);
  for (let i = 0; i < particleArray.length; i++) {
    for (let j = i; j < particleArray.length; j++) {
      for (let a = 2; a < particleArray[i].pointsWeb.length; a++) {
        for (let b = a; b < particleArray[j].pointsWeb.length; b++) {
          if (
            particleArray[i].pointsWeb[a].connect > valueConnectWeb ||
            particleArray[j].pointsWeb[b].connect > valueConnectWeb
          ) {
            break;
          } else {
            let dx =
              particleArray[i].pointsWeb[a].x - particleArray[j].pointsWeb[b].x;
            let dy =
              particleArray[i].pointsWeb[a].y - particleArray[j].pointsWeb[b].y;
            let distance = Math.sqrt(dx * dx + dy * dy);

            // opacityValue = 1 - (distance / 70)
            // ctx.strokeStyle = `${colorWeb}, ${opacityValue})`;
            ctx.strokeStyle = `${colorWeb}, 0.4)`;

            if (distance < 70) {
              ctx2.lineWidth = 1;
              ctx2.beginPath();
              ctx2.moveTo(
                particleArray[i].pointsWeb[a].x,
                particleArray[i].pointsWeb[a].y
              );
              ctx2.lineTo(
                particleArray[j].pointsWeb[b].x,
                particleArray[j].pointsWeb[b].y
              );
              ctx2.stroke();
              particleArray[i].pointsWeb[a].connect++;
              particleArray[j].pointsWeb[b].connect++;
            }
          }
        }
      }
    }
  }
}

///CREATE_SPIDER_POINTS
let masWebMouse = [];
const lengthWebMouse = 300;
// if((600 <= canvas.width && canvas.width <= 900) || (600 <= canvas.height && canvas.height <= 900)){
//     lengthWebMouse = 700
// } else if(canvas.width < 600 || canvas.height < 600){
//     lengthWebMouse = 250
// }
for (let i = 0; i < lengthWebMouse; i++) {
  masWebMouse.unshift({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    width: Math.random() * 2 + 1,
    weight: Math.random(),
    update() {
      this.y += this.weight;
      if (this.y > canvas.height) {
        this.y = 0;
        this.x = Math.random() * canvas.width;
      }
    },
    draw() {
      ctx.beginPath();
      ctx.arc(
        masWebMouse[i].x,
        masWebMouse[i].y,
        Math.random() * 1,
        0,
        Math.PI * 2
      );
      ctx.closePath();
      ctx.fill();
    },
  });
}

let light = document.querySelector("#light");
light.addEventListener("click", () => {
  if (paramBgColor.now === paramBgColor.day) {
    paramBgColor.now = paramBgColor.night;
  } else {
    paramBgColor.now = paramBgColor.day;
  }
  if (main) {
    main.classList.toggle("night");
  }
});

let radiusFeel = window.innerWidth * 0.12;

const distanceCheckInterval = setInterval(() => {
  if (sensFlag) {
    for (let i = 0; i < masWebMouse.length; i++) {
      masWebMouse[i].update();
      masWebMouse[i].draw();
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  let opacityValue = 1;
  let opacityValueDist = null;

  const targets = document.querySelectorAll(".target");
  if (targets) {
    targets.forEach((item) => {
      const targetRect = item.getBoundingClientRect();
      const targetX = targetRect.left + targetRect.width / 2;
      const targetY = targetRect.top + targetRect.height / 2;

      const distance = getDistance(mouse.x, mouse.y, targetX, targetY);

      opacityValueDist = 1 - distance / canvas.width;

      let visibleValue = 20;

      // item.style = `box-shadow: 0px 0px ${
      //   opacityValueDist * 2.7
      // }px rgba(0, 0, 0, ${opacityValueDist});`;

      if (distance <= 100 && comboScore >= 2) {
        // item.remove()
        // createNewTargets()
        const ojbject = {
          clientX: mouse.x,
          clientY: mouse.y
        }
        giveTarget(ojbject)
      }

      if (distance < radiusFeel) {
        visibleValue = 2;
      }

      item.style.opacity = `${opacityValueDist / visibleValue}`;

      // console.log(distance);
    });
  }

  const radiusSpider = radiusFeel;
  for (let j = 0; j < masWebMouse.length; j++) {
    let dx = mouse.x - masWebMouse[j].x;
    let dy = mouse.y - masWebMouse[j].y;
    let distance = Math.sqrt(dx * dx + dy * dy);

    opacityValue = opacityValueDist - distance / radiusSpider;
    // ctx.strokeStyle = `${colorWeb}, ${opacityValue})`;
    // ctx.strokeStyle = colorWeb + " " + opacityValue + ")";
    if (flagWeb) {
      ctx.strokeStyle = "rgba(9, 9, 9," + opacityValue + ")";
    } else {
      ctx.strokeStyle = "rgba(255, 255, 255," + opacityValue + ")";
    }

    if (distance < radiusSpider) {
      ctx.lineWidth = masWebMouse[j].width;
      ctx.fillStyle = "red";
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.beginPath();
      ctx.moveTo(mouse.x, mouse.y);
      ctx.lineTo(masWebMouse[j].x, masWebMouse[j].y);
      ctx.stroke();
    }
  }
}, 30);

///SPIDER_ANIMATION

const splderSense = () => {
  mouse.x = event.x;
  mouse.y = event.y;
  playSound(audioSpiderRun);
};

let sensFlag = false;

// window.addEventListener("contextmenu", () => {
//   event.preventDefault();
//   if (!sensFlag) {
//     window.addEventListener("mousemove", splderSense);
//     // console.log("on");
//     sensFlag = true;
//     mainElement.classList.remove("sense-off");
//     mainElement.classList.add("sense-on");
//     lightWeb.classList.add("sense-on-icon");
//     canvas.style.cssText = `
//       display: block;`;
//   } else {
//     window.removeEventListener("mousemove", splderSense);
//     // console.log("off");
//     sensFlag = false;
//     mainElement.classList.remove("sense-on");
//     mainElement.classList.add("sense-off");
//     lightWeb.classList.remove("sense-on-icon");
//     canvas.style.cssText = `
//       display: none;`;
//   }
// });

window.addEventListener("mousemove", splderSense);
// console.log("on");
sensFlag = true;
mainElement.classList.remove("sense-off");
mainElement.classList.add("sense-on");
lightWeb.classList.add("sense-on-icon");
canvas.style.cssText = `
      display: block;`;

// Получаем все элементы с классом '.target'
const targets = document.querySelectorAll(".target");

// Функция для вычисления расстояния между двумя точками
function getDistance(x1, y1, x2, y2) {
  const xDistance = x2 - x1;
  const yDistance = y2 - y1;

  return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
}

const chooseTarget = () => {
  // Получаем все элементы, которым хотим добавить класс
  const elements = document.querySelectorAll(".potencial-target");

  // Генерируем случайный индекс элемента
  const randomIndex = Math.floor(Math.random() * elements.length);

  // Выбираем случайный элемент
  const randomElement = elements[randomIndex];

  // Добавляем класс случайному элементу
  randomElement.classList.add("target");
};

const createNewTargets = () => {
  // const deleteTargets = document.querySelectorAll(".target");
  // if (deleteTargets) {
  //   deleteTargets.forEach((item) => {
  //     item.remove();
  //   });
  // }

  const item3 = document.querySelector("#item3");
  // const spiderTarget = document.querySelector(".spider-target");
  // const countTargets = 20;
  // for (let i = 0; i < countTargets; i++) {
  // const copyTarget = spiderTarget.cloneNode(true);
  // copyTarget.style.left = `${Math.random() * window.innerWidth}px`;
  // copyTarget.style.top = `${Math.random() * window.innerHeight}px`;
  const topRandom = `top: ${Math.random() * (window.innerHeight - 150)}px;`;
  const leftRandom = `left: ${Math.random() * (window.innerWidth - 150)}px;`;
  item3.insertAdjacentHTML(
    "afterend",
    // `<img id="" class="target spider-target potencial-target" src="img/spider3.png" alt="spider3" style="${topRandom} ${leftRandom}"/>`

    `<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
     width="1269.000000pt" height="1280.000000pt" viewBox="0 0 1269.000000 1280.000000"
     preserveAspectRatio="xMidYMid meet" class="target spider-target potencial-target" style="${topRandom} ${leftRandom}">
    <metadata>
    Created by potrace 1.15, written by Peter Selinger 2001-2017
    </metadata>
    <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
    fill="#000000" stroke="none">
    <path d="M10527 12793 c-12 -11 -8 -48 9 -71 31 -45 74 -196 109 -387 7 -38
    22 -110 33 -160 12 -49 30 -137 42 -195 11 -58 27 -127 35 -155 7 -27 17 -81
    20 -120 4 -38 11 -88 16 -110 5 -22 23 -139 40 -260 17 -121 37 -260 44 -310
    8 -49 18 -119 24 -155 11 -76 28 -297 37 -490 5 -113 3 -140 -10 -165 -9 -16
    -16 -34 -16 -38 0 -10 -8 -21 -156 -226 -66 -90 -132 -183 -149 -206 -16 -23
    -95 -126 -175 -229 -80 -104 -165 -216 -189 -250 -24 -33 -110 -146 -190 -251
    -80 -104 -153 -199 -161 -211 -28 -41 -134 -179 -194 -252 l-60 -74 -60 7
    c-34 3 -70 10 -81 15 -94 40 -244 100 -251 100 -5 0 -31 11 -58 25 -27 14 -57
    25 -67 25 -9 0 -19 4 -21 8 -1 5 -52 28 -113 51 -60 24 -128 52 -150 62 -22
    10 -69 31 -105 47 -36 16 -82 35 -103 42 -22 7 -51 18 -65 26 -15 8 -30 14
    -35 14 -4 0 -35 13 -70 29 -104 48 -135 54 -259 48 -84 -3 -133 -11 -193 -31
    -197 -64 -515 -154 -555 -157 -43 -3 -45 -2 -106 68 -73 84 -85 121 -61 192
    38 112 52 149 72 196 65 152 68 233 12 304 -42 52 -372 341 -389 341 -5 0 -8
    6 -9 13 0 6 -31 36 -70 65 -105 80 -168 101 -189 63 -14 -27 -13 -73 3 -96 8
    -11 19 -35 25 -53 15 -42 107 -201 192 -327 37 -55 70 -110 74 -121 4 -13 -6
    -44 -29 -89 -19 -39 -35 -76 -35 -82 0 -15 -50 -17 -94 -4 -96 29 -190 41
    -316 41 -310 -2 -538 -24 -602 -60 -45 -25 -90 -2 -103 52 -4 15 -13 32 -21
    39 -8 6 -14 18 -14 25 0 8 -4 14 -10 14 -23 0 -7 59 33 119 72 108 115 182
    162 281 26 52 51 103 56 112 5 10 9 47 9 82 0 49 -4 65 -16 70 -19 7 -104 -28
    -104 -43 0 -6 -6 -11 -14 -11 -8 0 -99 -80 -203 -177 -294 -277 -308 -292
    -327 -351 -16 -49 -16 -55 -1 -109 9 -32 21 -62 25 -68 4 -5 25 -50 45 -100
    20 -49 43 -104 51 -122 8 -17 14 -38 14 -46 0 -9 5 -19 10 -22 23 -14 9 -69
    -31 -124 -75 -101 -88 -111 -138 -111 -25 0 -66 6 -91 14 -25 8 -97 26 -160
    40 -63 15 -140 33 -170 42 -30 9 -80 23 -110 31 -30 8 -69 19 -86 24 -59 17
    -236 11 -300 -11 -63 -22 -196 -81 -204 -90 -3 -4 -23 -13 -45 -22 -70 -28
    -498 -229 -551 -259 -28 -16 -57 -29 -63 -29 -15 0 -241 -99 -259 -113 -8 -6
    -45 -11 -84 -11 -54 -1 -71 3 -79 16 -5 9 -55 72 -112 140 -57 67 -123 148
    -148 179 -44 56 -138 171 -214 260 -22 26 -69 83 -105 128 -36 45 -94 116
    -130 159 -36 43 -90 109 -120 147 -30 37 -82 101 -115 141 -33 39 -89 109
    -125 154 -36 45 -85 107 -111 138 -64 81 -101 137 -139 211 l-32 65 7 135 c17
    347 72 999 94 1128 6 32 17 114 26 183 9 69 22 163 30 210 7 47 19 119 25 160
    6 41 15 89 20 105 5 17 20 107 35 200 25 166 38 220 76 317 23 57 24 72 4 88
    -27 22 -108 -73 -162 -188 -25 -53 -49 -105 -54 -114 -5 -10 -9 -23 -9 -29 0
    -6 -6 -25 -13 -42 -8 -18 -22 -57 -31 -87 -10 -30 -22 -64 -26 -75 -16 -35
    -83 -277 -96 -345 -7 -36 -20 -92 -29 -125 -9 -33 -22 -89 -29 -125 -8 -36
    -23 -112 -35 -170 -12 -58 -29 -148 -37 -200 -8 -52 -20 -131 -28 -175 -72
    -404 -91 -583 -91 -870 0 -239 5 -269 64 -359 14 -22 57 -89 95 -150 38 -61
    81 -131 97 -156 16 -25 36 -58 45 -75 9 -16 50 -81 91 -143 41 -63 77 -121 81
    -130 3 -10 10 -21 14 -27 14 -16 69 -104 117 -185 25 -41 68 -111 96 -155 29
    -44 78 -123 111 -175 32 -52 63 -99 67 -105 9 -12 62 -97 108 -175 46 -79 211
    -326 256 -385 55 -71 92 -72 93 -3 0 45 23 58 106 58 41 0 116 -7 166 -16 119
    -21 314 -15 352 10 14 9 32 16 41 16 9 0 69 24 133 54 64 29 151 66 192 81 41
    15 109 45 150 66 42 22 82 39 91 39 8 0 23 6 34 14 11 7 32 16 47 20 15 3 67
    24 115 47 48 22 102 46 118 54 17 8 71 30 120 50 50 20 94 41 99 46 6 5 47 9
    92 9 63 0 103 -7 171 -29 48 -15 122 -36 163 -45 83 -18 133 -47 114 -66 -7
    -7 -124 -34 -260 -61 -137 -27 -256 -54 -265 -59 -9 -5 -34 -12 -55 -15 -39
    -7 -185 -75 -214 -100 -8 -7 -44 -25 -80 -41 -36 -15 -71 -32 -79 -38 -20 -16
    -138 -81 -200 -111 -30 -14 -93 -47 -140 -74 -47 -27 -135 -75 -196 -107 -60
    -32 -150 -79 -200 -105 -49 -27 -150 -79 -224 -116 -132 -67 -134 -68 -210
    -67 l-76 2 -165 109 c-234 156 -373 247 -385 253 -12 5 -138 88 -198 129 -55
    38 -90 60 -107 68 -8 4 -46 29 -84 56 -37 26 -75 51 -85 55 -9 4 -104 65 -211
    136 -107 71 -271 180 -365 241 -93 62 -224 148 -289 191 -65 44 -135 89 -154
    100 -61 38 -152 125 -187 178 -40 61 -164 449 -181 566 -4 25 -10 50 -14 55
    -5 6 -11 28 -15 50 -6 38 -16 86 -64 300 -11 50 -29 153 -41 230 -12 77 -30
    187 -40 245 -11 58 -35 224 -55 370 -77 580 -107 914 -107 1188 -1 195 -2 203
    -20 200 -11 -2 -25 -14 -32 -28 -7 -14 -21 -39 -30 -57 -9 -17 -16 -40 -16
    -50 0 -10 -6 -27 -13 -38 -18 -26 -26 -68 -39 -200 -16 -177 -20 -350 -8 -412
    6 -32 15 -166 20 -298 15 -362 46 -728 86 -1005 9 -58 22 -157 29 -220 26
    -231 66 -526 75 -555 5 -16 14 -70 20 -119 6 -49 15 -97 19 -105 5 -9 12 -38
    16 -66 12 -82 62 -271 84 -312 33 -65 117 -136 497 -418 211 -157 263 -197
    330 -252 41 -34 96 -75 122 -90 26 -15 53 -35 60 -45 7 -10 34 -32 60 -50 26
    -18 70 -50 99 -73 28 -22 84 -65 124 -95 241 -181 428 -324 451 -346 15 -13
    32 -24 36 -24 5 0 17 -9 28 -21 10 -12 31 -27 45 -35 15 -7 53 -36 85 -64 33
    -27 63 -50 67 -50 5 0 32 -20 61 -45 29 -24 63 -50 77 -57 13 -7 58 -35 99
    -63 41 -27 122 -70 179 -97 117 -53 137 -51 128 9 -8 48 14 56 183 63 l145 6
    255 146 c458 262 624 359 641 374 8 8 20 14 25 14 5 0 86 43 179 96 255 144
    264 149 347 178 67 23 92 26 200 26 103 -1 228 -17 244 -32 2 -3 -15 -12 -39
    -22 -23 -9 -55 -23 -72 -31 -16 -7 -55 -21 -85 -31 -82 -25 -264 -109 -318
    -146 -57 -40 -301 -248 -397 -340 -38 -36 -128 -120 -200 -186 -228 -210 -758
    -759 -1022 -1059 -269 -306 -686 -822 -760 -941 -9 -15 -31 -43 -48 -63 -16
    -19 -47 -60 -68 -90 -21 -30 -69 -97 -107 -149 -38 -52 -84 -120 -102 -150
    l-33 -55 -3 -160 c-4 -148 3 -438 28 -1180 6 -159 17 -492 25 -740 29 -858 41
    -1062 69 -1127 8 -18 26 -73 42 -122 15 -49 35 -98 44 -109 34 -42 40 -14 40
    191 1 174 18 459 50 797 5 61 24 308 40 550 16 242 34 483 40 535 10 99 23
    257 65 820 21 286 28 345 49 403 13 37 31 76 40 86 9 10 16 21 16 25 0 10 71
    115 135 201 25 33 56 76 69 95 61 87 322 396 531 630 375 419 1593 1664 1692
    1729 25 17 66 33 92 37 25 4 57 11 71 16 61 24 290 61 290 48 0 -4 -47 -39
    -89 -65 -29 -18 -115 -78 -151 -105 -19 -15 -69 -52 -110 -82 -91 -67 -269
    -250 -313 -322 -18 -28 -38 -60 -45 -71 -6 -11 -15 -27 -19 -35 -7 -17 -92
    -195 -170 -360 -30 -63 -86 -178 -123 -255 -172 -351 -367 -760 -412 -865 -11
    -25 -26 -61 -35 -80 -8 -19 -18 -42 -22 -50 -12 -24 -39 -118 -55 -196 -11
    -49 -20 -211 -31 -550 -8 -263 -20 -560 -26 -659 -27 -463 -33 -602 -31 -760
    4 -293 34 -741 53 -776 4 -9 18 -85 29 -170 12 -85 26 -161 30 -169 4 -8 11
    -44 15 -80 3 -36 11 -78 16 -95 5 -16 15 -64 23 -105 13 -70 25 -125 62 -290
    8 -36 19 -90 25 -120 5 -29 16 -74 24 -100 7 -25 23 -81 35 -125 36 -130 75
    -246 104 -310 34 -76 85 -175 100 -195 7 -8 18 -28 26 -44 18 -35 109 -118
    124 -113 17 6 19 67 3 106 -23 56 -47 141 -47 166 0 13 -5 36 -10 51 -6 14
    -17 65 -25 113 -7 47 -21 127 -29 176 -17 98 -40 247 -61 394 -8 52 -17 106
    -20 120 -4 14 -13 71 -21 126 -7 55 -18 122 -24 149 -5 26 -21 156 -35 289
    -14 132 -27 243 -29 246 -19 31 -50 613 -37 673 5 24 14 99 21 168 18 205 40
    402 51 455 5 28 14 91 20 140 12 105 33 268 47 375 6 41 16 118 21 170 6 52
    18 142 26 200 26 179 44 333 45 379 0 68 50 271 74 301 7 8 22 42 35 75 23 58
    147 314 435 896 75 152 136 278 136 282 0 3 18 37 40 76 22 38 47 89 56 113
    15 39 88 128 105 128 9 0 173 79 249 120 106 57 105 43 -8 -91 -188 -223 -206
    -272 -173 -474 12 -70 23 -148 41 -280 6 -38 17 -106 25 -150 8 -44 22 -123
    31 -175 10 -52 21 -99 25 -105 4 -5 10 -26 14 -45 8 -41 28 -111 66 -238 16
    -51 29 -102 29 -115 0 -12 7 -31 15 -41 8 -11 15 -27 15 -35 0 -9 10 -40 21
    -71 30 -77 43 -112 80 -215 18 -49 36 -94 41 -99 4 -6 8 -16 8 -24 0 -7 20
    -56 45 -109 25 -52 45 -99 45 -104 0 -6 8 -29 18 -52 10 -23 27 -62 37 -87 10
    -25 24 -52 31 -60 6 -8 27 -49 45 -90 28 -61 118 -231 159 -300 5 -8 23 -40
    41 -70 93 -161 200 -294 262 -326 41 -22 79 -10 117 37 80 100 167 104 230 12
    43 -62 97 -69 156 -19 33 28 144 176 144 192 0 3 11 20 24 37 13 18 47 77 75
    132 29 55 56 107 61 115 8 14 62 131 80 175 5 11 24 54 43 95 19 41 58 136 87
    210 28 74 55 144 60 155 24 61 60 163 65 185 4 14 10 34 15 45 21 49 102 322
    130 437 17 71 34 138 39 150 15 36 59 271 76 403 8 66 20 147 26 180 5 33 14
    116 19 185 6 69 13 161 16 205 6 70 4 87 -16 130 -39 87 -90 157 -181 251
    -113 117 -118 139 -23 88 27 -15 103 -49 169 -76 106 -43 185 -94 185 -119 0
    -3 24 -46 53 -95 29 -49 70 -123 90 -164 21 -41 48 -93 61 -115 12 -22 53 -98
    90 -170 38 -71 72 -135 77 -141 5 -6 28 -48 52 -95 24 -46 85 -160 136 -253
    52 -93 102 -188 113 -210 10 -23 23 -48 28 -56 34 -55 119 -244 129 -285 6
    -27 23 -120 36 -205 14 -85 29 -184 35 -220 6 -36 17 -96 25 -135 8 -38 23
    -131 34 -205 11 -74 38 -238 61 -365 22 -126 49 -288 60 -360 11 -71 27 -166
    35 -210 66 -366 75 -683 35 -1125 -6 -58 -17 -179 -25 -270 -8 -91 -24 -241
    -35 -335 -12 -93 -27 -229 -35 -302 -7 -72 -16 -139 -19 -150 -3 -10 -10 -65
    -16 -123 -18 -187 -60 -437 -91 -545 -21 -74 -22 -100 -4 -115 35 -29 118 86
    214 298 27 61 55 131 61 155 17 62 41 148 51 184 6 18 14 54 19 80 5 27 16 80
    25 118 9 39 21 97 25 130 5 33 16 98 25 145 38 194 46 241 65 370 11 74 27
    189 35 255 9 66 23 179 33 250 13 103 17 205 16 495 0 316 -4 405 -27 665 -16
    165 -32 327 -37 360 -5 33 -21 245 -35 470 -28 447 -40 591 -56 675 -20 96
    -73 246 -116 325 -8 17 -40 77 -70 135 -30 58 -61 112 -69 121 -8 8 -14 22
    -14 30 0 8 -17 43 -36 79 -20 36 -63 117 -97 180 -33 63 -75 142 -93 175 -18
    33 -42 78 -52 100 -10 22 -63 121 -117 220 -54 99 -120 223 -146 275 -128 251
    -203 353 -361 485 -78 66 -233 176 -322 230 -19 11 -59 35 -90 54 -37 22 -54
    37 -48 43 15 15 76 7 334 -45 84 -17 149 -50 206 -105 88 -84 534 -502 712
    -668 285 -265 903 -877 1118 -1108 283 -304 379 -414 479 -550 28 -39 56 -76
    62 -82 32 -37 99 -146 113 -184 34 -89 37 -110 123 -875 25 -220 52 -447 60
    -505 8 -58 24 -199 35 -315 11 -115 24 -230 29 -255 5 -25 15 -94 21 -155 25
    -244 71 -622 79 -655 5 -19 15 -145 21 -278 6 -134 14 -250 17 -257 10 -27 32
    -2 53 58 12 34 33 103 47 152 l26 90 4 705 c3 388 0 1015 -7 1393 -8 527 -8
    707 1 766 9 55 9 95 2 141 -24 150 -44 191 -157 327 -33 41 -68 85 -76 96 -8
    12 -35 47 -60 78 -25 31 -76 97 -115 145 -84 107 -203 250 -265 320 -25 27
    -83 95 -130 149 -403 468 -1110 1166 -1580 1560 -52 44 -127 107 -166 140
    -224 188 -259 214 -419 302 -25 14 -186 73 -280 103 -107 33 -155 52 -155 60
    0 11 138 30 265 37 172 9 218 -9 710 -270 105 -56 276 -145 380 -199 105 -53
    201 -104 215 -112 14 -7 63 -34 110 -58 47 -24 111 -59 142 -76 90 -50 156
    -64 279 -56 126 8 149 0 149 -50 0 -19 7 -40 16 -47 14 -12 30 -7 113 36 149
    76 255 148 436 300 34 27 132 109 220 180 87 72 227 186 310 255 83 69 163
    134 177 145 14 11 110 90 212 175 207 172 316 261 391 319 28 21 89 72 137
    112 49 41 107 89 130 107 83 65 202 168 259 224 83 84 111 149 139 328 6 36
    17 94 25 130 19 82 31 182 50 390 27 304 36 395 45 460 32 233 48 562 66 1435
    7 294 -15 516 -63 660 -26 75 -69 157 -89 168 -33 19 -37 -7 -24 -151 11 -121
    11 -188 -4 -498 -10 -198 -22 -397 -26 -444 -22 -226 -41 -402 -50 -470 -6
    -41 -21 -180 -35 -308 -14 -129 -34 -280 -44 -335 -11 -56 -29 -158 -41 -227
    -70 -408 -154 -719 -221 -820 -37 -55 -64 -78 -249 -215 -19 -14 -60 -45 -91
    -68 -31 -23 -83 -59 -115 -80 -51 -32 -114 -77 -364 -259 -25 -18 -47 -36 -50
    -39 -3 -3 -19 -13 -35 -22 -17 -8 -39 -24 -49 -36 -11 -12 -24 -21 -29 -21 -5
    0 -29 -15 -52 -34 -23 -19 -77 -59 -121 -88 -43 -30 -123 -85 -177 -124 -54
    -38 -112 -79 -130 -92 -18 -12 -40 -28 -51 -35 -10 -6 -33 -23 -52 -37 -18
    -14 -56 -41 -84 -60 -28 -19 -89 -62 -135 -95 -47 -33 -114 -80 -150 -105 -36
    -25 -98 -70 -138 -100 l-72 -55 -94 -3 c-85 -4 -97 -2 -141 22 -26 14 -53 26
    -59 26 -6 0 -28 10 -49 23 -31 19 -161 82 -349 169 -23 11 -52 27 -65 36 -13
    10 -61 33 -108 52 -47 19 -105 47 -129 62 -24 15 -60 33 -80 39 -20 7 -80 36
    -134 66 -54 29 -100 53 -104 53 -3 0 -59 27 -125 60 -65 32 -144 66 -176 75
    -31 9 -70 20 -87 25 -16 5 -133 25 -260 45 -243 37 -275 46 -275 70 0 16 69
    55 97 55 22 0 209 58 245 76 15 8 58 14 104 14 62 0 88 -5 133 -26 75 -35 86
    -39 161 -65 36 -12 70 -26 75 -30 12 -9 131 -55 165 -64 14 -4 41 -13 60 -21
    120 -52 182 -75 259 -100 42 -14 85 -29 96 -34 131 -58 241 -100 262 -100 11
    0 25 -6 32 -12 19 -20 301 -16 371 5 30 9 91 19 135 22 95 8 114 -2 124 -61 9
    -55 35 -52 85 12 40 50 147 222 197 314 13 25 26 47 29 50 3 3 14 21 24 40 18
    33 39 70 123 213 20 34 64 112 98 172 55 98 181 316 205 355 5 8 31 53 56 100
    26 47 56 101 68 121 12 19 35 59 51 88 17 29 45 78 64 109 50 85 211 372 211
    379 0 3 7 19 15 36 30 66 52 270 36 331 -11 41 -29 161 -56 369 -8 60 -21 141
    -29 180 -8 40 -27 135 -41 212 -14 77 -32 158 -40 180 -7 22 -19 73 -25 114
    -6 41 -13 77 -15 82 -3 4 -14 52 -25 106 -20 98 -42 182 -62 238 -5 17 -23 77
    -38 135 -34 126 -96 314 -120 365 -5 11 -17 43 -26 70 -23 71 -85 215 -105
    245 -9 14 -33 51 -54 82 -52 82 -106 124 -128 101z"/>
    </g>
    </svg>
    `
  );
  // }
};

// console.log(window.innerHeight);
// console.log(window.innerWidth);
createNewTargets();

// chooseTarget();

// console.log(document.querySelectorAll(".target"));

let time = 10;
const timeElement = document.querySelector("#time");

const timer = setInterval(() => {
  time--;
  if (comboTiming !== 0) {
    comboTiming--;
    comboTime.innerHTML = `${comboTiming}`;
  }
  timeElement.innerHTML = time;
  console.log(comboScore);
  console.log(combotarget);
  if (time === 0) {
    window.removeEventListener("mousemove", splderSense);
    clearInterval(distanceCheckInterval);
    clearInterval(timer);
    document.querySelector(
      "#score"
    ).innerHTML = `Time is gone! Your score: ${totalScore}`;
    document.querySelectorAll(".target").forEach((item) => {
      item.style.opacity = `1`;
      item.style.width = `width: 50px`;
      item.classList.add("no-finded");
    });
  }
}, 1000);

const addTime = () => {
  time += 5;
};

const descr = document.querySelector("#description");
const combo = document.querySelector("#combo");
const comboTargetBlock = document.querySelector("#combo-target");
const comboTime = document.querySelector("#combo-time");
let comboTiming = 0;

const setCombo = () => {
  combo.innerHTML = `${comboScore}`;
  comboTargetBlock.innerHTML = `${combotarget}`;
};

let endCombo = null;

const bigFeel = (
  textFeel = `ULTIMATE WEB!!!`,
  radiusFeelAdd = window.innerWidth * 0.1,
  timeAdd = 10,
  timing = 8500
) => {
  comboList += 1;
  if (comboList >= 2) {
    clearTimeout(endCombo);
  }
  comboTiming = timing / 1000;
  comboTime.innerHTML = `${comboTiming}`;
  combotarget += 2;
  comboScore = 0;
  playSound(audioVenom);
  audioAmbient.pause();
  audioAmbientVenom.src = `sound/venom-theme${Math.ceil(
    Math.random() * 2
  )}.mp3`;
  playSound(audioAmbientVenom);
  changeBg();
  changeWeb();
  radiusFeel = radiusFeelAdd;
  time += timeAdd;
  descr.classList.add("description-view");
  descr.innerHTML = textFeel;
  endCombo = setTimeout(() => {
    radiusFeel = window.innerWidth * 0.12;
    descr.classList.remove("description-view");
    changeWeb();
    // item2.classList.remove(`opacity-venom4`);
    // item2.classList.add(`opacity-venom${comboScore}`);
    combotarget = combotargetBegin;
    comboScore = 0;
    comboList = 0;
    item2.style = `opacity: ${comboScore / combotarget}`;
    audioAmbientVenom.pause();
    audioAmbientVenom.currentTime = 0;
    audioAmbient.play();
    comboTime.innerHTML = `${0}`;
  }, timing);
};

let flagCheck = false;
// Добавляем обработчик события "click" к элементу
function checkIfTargetCoordinate(event) {
  document.querySelectorAll(".target").forEach((item) => {
    // Получаем координаты клика
    const clickX = event.clientX;
    const clickY = event.clientY;

    // Получаем границы элемента
    const rect = item.getBoundingClientRect();
    const elementX = rect.left;
    const elementY = rect.top;
    const elementWidth = rect.width;
    const elementHeight = rect.height;

    // Проверяем, находятся ли координаты клика внутри границ элемента
    if (
      clickX >= elementX &&
      clickX <= elementX + elementWidth &&
      clickY >= elementY &&
      clickY <= elementY + elementHeight
    ) {
      targetElement2 = item;
      console.log("ok");
      flagCheck = true;
    } else {
      console.log("no");
    }
  });
}
// const comboTimeout = setTimeout(() => {
//   comboScore = 0;
//   setCombo();
//   console.log(comboScore);
// }, 11000);
////OLD_WEB_ANIMATION
// document.addEventListener("click", (event) => {
//         mouse.x = event.x
//         mouse.y = event.y
//         start= new Date().getTime()
//         webDraw(mouse, event.target)
// })

// function webDraw(mouse, targetElement){
//     let startWeb = {
//         x: 0,
//         y: 0,
//         chooseSide(){
//             let choose = Math.round(Math.random())
//             if(choose === 1){
//                 this.x = Math.ceil(Math.random() * mainElement.clientWidth)
//                 this.y = 0
//             }
//             else if(choose === 0){
//                 this.y = Math.ceil(Math.random() * mainElement.clientHeight)
//                 this.x = 0
//             }
//             return choose
//         }
//     }
//     let webSaturation = 12
//     let webWidth = 3
//     let lengthMasOneWebs = Math.ceil(Math.random() * webSaturation) + 1
//     let masOneWebs = []
//     for(let i = 0; i < lengthMasOneWebs; i++){
//         let whereX = mouse.radius * Math.random()
//         let whereY = mouse.radius * Math.random()
//         if(Math.round(Math.random()) === 1){
//             whereX *= -1
//         }
//         if(Math.round(Math.random()) === 0){
//             whereY *= -1
//         }
//         let webPoint = {
//             x: mouse.x + whereX,
//             y: mouse.y + whereY
//         }
//         masOneWebs.unshift(webPoint)
//     }
//     ctx.clearRect(0, 0, canvas.width, canvas.height)
//     ctx.strokeStyle = "white"
//     console.log(startWeb.chooseSide())
//     canvas.style.cssText = `
//     display: block;
//     z-index: 1;`
//     ctx.lineCap = "round"
//     ctx.lineJoin = "round"
//     for(let i = 0; i < masOneWebs.length; i++){
//         let lineWidth = Math.ceil(Math.random() * webWidth)
//         ctx.lineWidth = lineWidth
//         ctx.beginPath()
//         ctx.moveTo(startWeb.x, startWeb.y)
//         ctx.lineTo(masOneWebs[i].x, masOneWebs[i].y)
//         webAnimation(startWeb, masOneWebs[i], targetElement)
//     }
// }

// function webAnimation(startWeb, endWeb, targetElement){
//     let oldStyle = window.getComputedStyle(targetElement)
//     let coordinateTargetElement = targetElement.getBoundingClientRect()
//     function checkInnerTargetElement(coordinateTargetElement){
//         if((coordinateTargetElement.x <= x && x <= coordinateTargetElement.x + coordinateTargetElement.width) && (coordinateTargetElement.y <= y && y <= coordinateTargetElement.y + coordinateTargetElement.height)){
//             return true
//         } else {
//             return false
//         }
//     }
//     let distanceX = Math.abs(endWeb.x - startWeb.x)
//     let distanceY = Math.abs(endWeb.y - startWeb.y)
//     let tangenc = distanceX / distanceY
//     let speedX = getRandomArbitrary(1, 3)
//     let speedY = speedX / tangenc
//     if(endWeb.x < startWeb.x){
//         speedX *= -1
//     }
//     if(endWeb.y < startWeb.y){
//         speedY *= -1
//     }
//     let x = startWeb.x, y = startWeb.y

//     render()

//     function render(){
//         if(distanceX > Math.abs(x - startWeb.x) || distanceY > Math.abs(y - startWeb.y)){
//             if(checkInnerTargetElement(coordinateTargetElement)) {
//                 targetElement.style.cssText = `
//                 transform: scale(1.3);
//                 box-shadow: 0px 0px 60px black;
//                 transition: 0.3s;`
//                 console.log("вошёл")
//             }
//             x += speedX
//             y += speedY
//             console.log("render", x, y)
//             drawLine(x, y)
//             requestAnimationFrame(render)
//         }
//     }

//     function drawLine(X, Y){
//         ctx.beginPath()
//         ctx.moveTo(startWeb.x, startWeb.y)
//         ctx.lineTo(X, Y)
//         ctx.stroke()
//         console.log("drwaline", x, y)
//         end = new Date().getTime()
//         delay = end - start
//         console.log(delay)
//     }
// }

// function getRandomArbitrary(min, max) {
//     return Math.random() * (max - min) + min;
// }

// window.addEventListener("resize", () => {
//     canvas.width = window.innerWidth
//     canvas.height = window.innerHeight
// })

// Получаем все элементы с классом '.target'
// const targets = document.querySelectorAll(".target");

// Функция для вычисления расстояния между двумя точками

/////////////////////
