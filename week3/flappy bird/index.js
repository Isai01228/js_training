const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")
let interval
let frames = 0
const obstacules = []

const images = {
    backg: "./image/background.png",
    bird: "./image/bird3.jpeg",
    obs2: "./image/obs1.jpg",
    obs1: "./image/obs2.png",
    obs3: "./image/obs3.png"
}

class Background {
    constructor() {
        this.x = 0
        this.y = 0
        this.width = canvas.width
        this.height = canvas.height
        this.image = new Image()
        this.image.src = images.backg
        this.image.onload = () => {
            this.draw()
        }
    }
    draw() {
        this.x--
            if (this.x < -canvas.width) this.x = 0
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
        ctx.drawImage(
            this.image,
            this.x + canvas.width,
            this.y,
            this.width,
            this.height
        )
    }
}
class Bird {
    constructor() {
        this.x = 50
        this.y = 50
        this.width = 70
        this.height = 50
        this.image = new Image()
        this.image.src = images.bird
    }
    draw() {
        this.y += 2
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
    }
    fly() {
        this.y -= 30
    }
    isToching(pipe) {
        return (
            this.x < pipe.x + pipe.width &&
            this.x + this.width > pipe.x &&
            this.y < pipe.y + pipe.height &&
            this.y + this.height > pipe.y
        )
    }
}
class Pipe {
    constructor(y, height, imagetype) {
        this.x = canvas.width
        this.y = y
        this.height = height
        this.width = canvas.width / 6
        this.image = new Image()
        this.image2 = new Image()
        this.image.src = images.obs1
        this.image2.src = images.obs2
        this.imagetype = imagetype
    }
    draw() {
        this.x--
            if (this.imagetype) {
                ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
            } else {
                ctx.drawImage(this.image2, this.x, this.y, this.width, this.height)
            }
    }
}

function generatePipes() {
    if (frames % 300 === 0) {
        const max = 100
        const min = 300
        const ventanita = 20
        const randomHeight = Math.floor(Math.random() * (max - min)) + min
        obstacules.push(new Pipe(0, randomHeight, false))
        obstacules.push(
            new Pipe((canvas.height - randomHeight) + ventanita, randomHeight, true)
        )
        console.log(obstacules)
    }
}

function drawPipes() {
    obstacules.forEach(pipe => pipe.draw())
}

const background = new Background()
const bird = new Bird()


function update() {
    frames++
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    background.draw()
    bird.draw()
    generatePipes()
    drawPipes()
    checkColition()
}
document.addEventListener("keydown", ({ keyCode }) => {
    switch (keyCode) {
        case 32:
            bird.fly()
    }
})

function gameOver() {
    clearInterval(interval)
}

function checkColition() {
    if (bird.y >= canvas.height - bird.height) {
        return gameOver()
    }
    obstacules.forEach((pipe, i) => {
        if (pipe.x + pipe.width <= 0) {
            obstacules.splice(i, 1)
        }
        bird.isToching(pipe) ? gameOver() : null
    })
}

function start() {
    interval = setInterval(update, 1000 / 60)
}
start()