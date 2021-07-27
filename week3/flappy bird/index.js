const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")
let interval
let frames = 0
const obstacules = []

const images = {
    backg: "./image/background.png",
    bird: "./image/bird3.jpeg",
    obs1: "./image/obs1.jpg",
    obs2: "./image/obs2.png",
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
            this.x < pipe.width &&
            this.x + this.width > pipe.x &&
            this.y < pipe.y + pipe.height &&
            this.y + this.height > pipe.y
        )
    }
}

const background = new Background()
const bird = new Bird()


function update() {
    frames++
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    background.draw()
    bird.draw()
}
document.addEventListener("keydown", ({ keyCode }) => {
    switch (keyCode) {
        case 32:
            bird.fly()
    }
})

function start() {
    interval = setInterval(update, 1000 / 60)
}
start()