const canvas = document.querySelector('canvas')
const ctx = canvas.getContext("2d")

const button = document.querySelector('button')

let x = 0;
let y = 0;

const draw = () => {
    if (x && y === canvas.height - 90) {
        x = 0
        y = 0
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    const axolotlImage = new Image()
    axolotlImage.src = "https://w7.pngwing.com/pngs/393/856/png-transparent-salamander-siberian-husky-axolotl-drawing-birds-animals-aquarium-fauna.png"
    ctx.drawImage(axolotlImage, x, y, 100, 90)
    x++
    y++
}
button.onclick = () => {
    setInterval(draw, 10)
}