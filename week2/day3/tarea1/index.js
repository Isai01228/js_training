const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

ctx.fillStyle = "#808080"
ctx.fillRect(150, 560, 300, 140)

ctx.fillStyle = "#888888"
ctx.fillRect(220, 599, 150, 100)

ctx.fillStyle = "#909090"
ctx.fillRect(50, 560, 500, 20)

ctx.fillStyle = "#989898"
ctx.fillRect(100, 540, 400, 20)

ctx.fillStyle = "#A0A0A0"
ctx.fillRect(150, 520, 300, 20)

ctx.fillStyle = "#A0A0A0"
ctx.fillRect(180, 500, 250, 20)


ctx.arc(700, 200, 150, 0, Math.PI * 2)
ctx.fillStyle = "white"
ctx.fill()