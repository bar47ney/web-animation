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

let paramBgColor = {
  now: {
    first: "",
    second: "",
  },
  night: {
    first: "#1a387513",
    second: "#041a46",
  },
  day: {
    first: "red",
    second: "#300404",
  },
  dayOrNight() {
    let nowHours = new Date(Date.now()).getHours();
    console.log(nowHours);
    if (21 <= nowHours || nowHours < 9) {
      this.now = this.night;
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

////NEW_WEB_ANIMATION
let particleArray = [];
const lengthOfParticles = 15;

class Particle {
  constructor(endX, endY, x, y) {
    this.size = Math.random() * 3 + 1;
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
    this.directionX = getRandomArbitrary(17, 25);
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
      ctx.beginPath();
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.strokeStyle = "white";
      ctx.lineWidth = this.width;
      ctx.moveTo(this.startX, this.startY);
      ctx.lineTo(this.x, this.y);
      ctx.stroke();
      ctx.closePath();
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
  targetElement.style.cssText = `
                transform: scale(1.3);
                box-shadow: 0px 0px 60px black;
                transition: 0.3s;`;
  console.log("вошёл");
  setTimeout(() => {
    canvas.style.cssText = `
        display: none;`;
    targetElement.style.cssText = oldStyle;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }, 3000);
}

window.addEventListener("click", (event) => {
  particleArray = [];
  canvas.style.cssText = `
    display: block;`;
  targetElement = event.target;
  oldStyle = window.getComputedStyle(targetElement);
  coordinateTargetElement = targetElement.getBoundingClientRect();
  const lengthWeb = 12 * Math.random() + 1;
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
      whereX *= -1;
    }
    if (Math.round(Math.random()) === 0) {
      whereY *= -1;
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
});

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function connect() {
  let opacityValue = 1;
  const valueConnectWeb = getRandomArbitrary(3, 6);
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
            ctx.strokeStyle = "rgba(255, 255, 255," + opacityValue + ")";

            if (distance < 70) {
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(
                particleArray[i].pointsWeb[a].x,
                particleArray[i].pointsWeb[a].y
              );
              ctx.lineTo(
                particleArray[j].pointsWeb[b].x,
                particleArray[j].pointsWeb[b].y
              );
              ctx.stroke();
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
const lengthWebMouse = 1200;
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
});

setInterval(() => {
  for (let i = 0; i < masWebMouse.length; i++) {
    // masWebMouse[i].update()
    // masWebMouse[i].draw()
  }
  // ctx.clearRect(0, 0, canvas.width, canvas.height)
  let opacityValue = 1;
  const radiusSpider = 70;
  for (let j = 0; j < masWebMouse.length; j++) {
    let dx = mouse.x - masWebMouse[j].x;
    let dy = mouse.y - masWebMouse[j].y;
    let distance = Math.sqrt(dx * dx + dy * dy);

    opacityValue = 1 - distance / radiusSpider;
    ctx.strokeStyle = "rgba(255, 255, 255," + opacityValue + ")";

    if (distance < radiusSpider) {
      ctx.lineWidth = masWebMouse[j].width;
      ctx.fillStyle = "white";
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
// window.addEventListener("mousemove", (event) => {
//     mouse.x = event.x
//     mouse.y = event.y
// })

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
