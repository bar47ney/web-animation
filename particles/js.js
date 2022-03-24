// const canvas = document.getElementById("canvas1")
// const ctx = canvas.getContext("2d")
// canvas.width = window.innerWidth
// canvas.height =  window.innerHeight

// let particleArray = []
// const lengthOfParticles = 15

// let title1 = document.getElementById("title1")
// let title1Measurements = title1.getBoundingClientRect()
// let title = {
//     x: title1Measurements.left,
//     y: title1Measurements.top,
//     width: title1Measurements.width,
//     height: title1Measurements.height
// }

// class Particle {
//     constructor(x, y){
//         this.x = x
//         this.y = y
//         this.size = Math.random() * 16 + 1
//         this.weight = Math.random() * 1 + 1
//         this.directionX = Math.random() * 4 - 2
//     }
//     update(){
//         if(this.y > canvas.height) {
//             this.y = 0 - this.size
//             this.weight = Math.random() * 1 + 1
//             this.x = Math.random() * canvas.width * 1.3
//             // this.size = 10
//             this.size = Math.random() * 16 + 1
//         }
//         this.weight += 0.01
//         this.y += this.weight
//         this.x += this.directionX
//         if (
//             this.x < title.x + title.width &&
//             this.x + this.size > title.x &&
//             this.y < title.y + title.height &&
//             this.y + this.size > title.y
//         ) {
//             this.y -= 3
//             this.weight *= -0.5
//             this.size *= 0.5
//             // particleArray.unshift(new Particle(this.x, this.y))
//         }
//     }
//     draw(){
//         ctx.fillStyle = "purple"
//         ctx.beginPath()
//         ctx.arc(this.x, this.y, this.size, 0, Math.PI *2)
//         ctx.closePath()
//         ctx.fill()
//     }
// }

// function init(){
//     particleArray = []
//     for(let i = 0; i < lengthOfParticles; i++){
//         const x = Math.random() * canvas.width
//         const y = Math.random() * canvas.height
//         particleArray.unshift(new Particle(x, y))
//     }
//     console.log(particleArray)
// }
// init()

// function animate(){
//     ctx.fillStyle = "rgba(255, 255, 255, 0.1)"
//     ctx.fillRect(0, 0, canvas.width, canvas.height)
//     for(let i = 0; i < particleArray.length; i++){
//         particleArray[i].update()
//         particleArray[i].draw()
//     }
//     // ctx.fillRect(title.x, title.y, title.width, title.height)
//     requestAnimationFrame(animate)
// }
// animate()

// window.addEventListener("resize", () => {
//     canvas.width = window.innerWidth
//     canvas.height = window.innerHeight
//     title1Measurements = title1.getBoundingClientRect()
//     title = {
//         x: title1Measurements.left,
//         y: title1Measurements.top,
//         width: title1Measurements.width,
//         height: title1Measurements.height
// }
//     init()
// })

// window.addEventListener("click", () => {
//     for(let i = 0; i < 10; i++)
//     particleArray.unshift(new Particle(event.x, event.y))
// })
////1

////2web
const canvas = document.getElementById("canvas1")
const ctx = canvas.getContext("2d")
canvas.width = window.innerWidth
canvas.height =  window.innerHeight

let particleArray = []
const lengthOfParticles = 15

let title1 = document.getElementById("title1")
let title1Measurements = title1.getBoundingClientRect()
let title = {
    x: title1Measurements.left,
    y: title1Measurements.top,
    width: title1Measurements.width,
    height: title1Measurements.height
}

class Particle {
    constructor(endX, endY, x, y){
        this.size = Math.random() * 3 + 1
        this.x = x
        this.y = y
        this.startX = x
        this.startY = y
        this.endX = endX
        this.endY = endY
        this.distanceX = Math.abs(this.endX - this.x)
        this.distanceY = Math.abs(this.endY - this.y)
        this.distance = Math.sqrt(this.distanceX * this.distanceX + this.distanceY * this.distanceY)
        this.tangenc = this.distanceX / this.distanceY
        this.directionX = getRandomArbitrary(17, 25)
        this.directionY = this.directionX / this.tangenc
        this.direction = Math.sqrt(this.directionX * this.directionX + this.directionY * this.directionY)
        this.step = this.distance / 20
        this.stopWeb = 0
        this.width = Math.random() * 3
        this.pointsWeb = []
        if(this.endX < this.x){
            this.directionX *= -1
        }
        if(this.endY < this.y){
            this.directionY *= -1
        }
    }
    update(){
        if(this.pointsWeb.length === 0){
            this.pointsWeb.unshift({
                x: this.x,
                y: this.y
            })
        }
        if(this.distanceX > Math.abs(this.startX - this.x) || this.distanceY > Math.abs(this.startY - this.y)){
            this.x += this.directionX
            this.y += this.directionY
            this.stopWeb += this.direction
            if(this.stopWeb > this.step){
                this.pointsWeb.unshift({
                    x: this.x,
                    y: this.y,
                    connect: 0
                })
                this.stopWeb = 0
            } 
        }
    }
    draw(){
        if(this.distanceX > Math.abs(this.startX - this.x) || this.distanceY > Math.abs(this.startY - this.y)){
        ctx.fillStyle = "white"
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.width, 0, Math.PI * 2)
        ctx.closePath()
        ctx.fill()
            ctx.beginPath()
            ctx.lineCap = "round"
            ctx.lineJoin = "round"
            ctx.strokeStyle = "white"
            ctx.lineWidth = this.width
            ctx.moveTo(this.startX, this.startY)
            ctx.lineTo(this.x, this.y)
            ctx.stroke() 
            ctx.closePath()
        }
    }
}

function init(){
    particleArray = []
    for(let i = 0; i < lengthOfParticles; i++){
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        particleArray.unshift(new Particle(x, y))
    }
    console.log(particleArray)
}
  
ctx.fillStyle = "black"
ctx.fillRect(0, 0, canvas.width, canvas.height)

setInterval(() => {
    ctx.fillStyle = "rgba(0, 0, 0, 0.1)"
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    for(let i = 0; i < particleArray.length; i++){
        particleArray[i].update()
        particleArray[i].draw()
    }
    connect()
}, 20)

window.addEventListener("resize", () => {
    particleArray = []
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    title1Measurements = title1.getBoundingClientRect()
    title = {
        x: title1Measurements.left,
        y: title1Measurements.top,
        width: title1Measurements.width,
        height: title1Measurements.height
}
    init()
})

window.addEventListener("click", () => {
    particleArray = []
    const lengthWeb = 12 * Math.random() + 1
    const radius = 160
    ctx.fillStyle = "black"
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    let choose = Math.round(Math.random())
    let x
    let y
    if(choose === 1){
        x = 0
        y = Math.random() * canvas.height
    }
    else if(choose === 0){
        x = Math.random() * canvas.width
        y = 0
    }
    for(let i = 0; i < lengthWeb; i++){
        let whereX = Math.random() * radius
        let whereY = Math.random() * radius
        if(Math.round(Math.random()) === 1){
            whereX *= -1
        }
        if(Math.round(Math.random()) === 0){
            whereY *= -1
        }
        const endX = event.x + whereX
        const endY = event.y + whereY
        particleArray.unshift(new Particle(endX, endY, x, y))
    }
})

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function connect(){
    let opacityValue = 1
    const valueConnectWeb = getRandomArbitrary(3, 6)
    for(let i = 0; i < particleArray.length; i++){
        for(let j = i; j < particleArray.length; j++){
            for (let a = 2; a < particleArray[i].pointsWeb.length; a++){
                for (let b = a; b < particleArray[j].pointsWeb.length; b++){
                    if(particleArray[i].pointsWeb[a].connect > valueConnectWeb || particleArray[j].pointsWeb[b].connect > valueConnectWeb){
                        break
                    } else{
                        let dx = particleArray[i].pointsWeb[a].x - particleArray[j].pointsWeb[b].x
                        let dy= particleArray[i].pointsWeb[a].y - particleArray[j].pointsWeb[b].y
                        let distance = Math.sqrt(dx * dx + dy * dy)
            
                        // opacityValue = 1 - (distance / 200)
                        ctx.strokeStyle = "rgba(255, 255, 255," + opacityValue + ")"
            
                        if (distance < 70){
                            ctx.lineWidth = 1
                            ctx.beginPath()
                            ctx.moveTo(particleArray[i].pointsWeb[a].x, particleArray[i].pointsWeb[a].y)
                            ctx.lineTo(particleArray[j].pointsWeb[b].x, particleArray[j].pointsWeb[b].y)
                            ctx.stroke() 
                            particleArray[i].pointsWeb[a].connect++
                            particleArray[j].pointsWeb[b].connect++
                        }
                    }
                }
            }
        }
    }
}