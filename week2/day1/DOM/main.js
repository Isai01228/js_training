// queryselector() agarra objetos de html
// document.addEventlListener añade un evento al escuvhar lo que le diga
const num1 = document.querySelector(".num1")
const num2 = document.querySelector(".num2")
const button = document.querySelector("button")

const buttonAction = () => {
    const { value: value1 } = num1
    const { value: value2 } = num2
    alert(`La suma es: ${parseInt(value1) + parseInt(value2)}`)
}
button.addEventListener("click", buttonAction)


const inputRest = document.querySelector('input[id="input1"]')
const inputRest2 = document.querySelector('input[id="input2"]')
const button2 = document.querySelector('button[id="button2"]')

const buttonRest = () => {
    const { value: value3 } = inputRest
    const { value: value4 } = inputRest2
    alert(`La resta es: ${parseInt(value3) - parseInt(value4)}`)
}
button2.addEventListener("click", buttonRest)

const inputMult = document.querySelector('input[id="input3"]')
const inputMul2 = document.querySelector('input[id="input4"]')
const button3 = document.querySelector('button[id="button3"]')

const buttonMult = () => {
    const { value: value5 } = inputMult
    const { value: value6 } = inputMul2
    alert(`La multiplicación: ${parseInt(value5) * parseInt(value6)}`)
}
button3.addEventListener("click", buttonMult)

const inputDiv = document.querySelector('input[id="input5"]')
const inputDiv2 = document.querySelector('input[id="input6"]')
const button4 = document.querySelector('button[id="button4"]')

const buttonDiv = () => {
    const { value: value7 } = inputDiv
    const { value: value8 } = inputDiv2
    alert(`La multiplicación: ${parseInt(value7) / parseInt(value8)}`)
}
button4.addEventListener("click", buttonDiv)