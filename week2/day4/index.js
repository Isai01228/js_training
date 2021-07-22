// const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// const firstRepeatedValue = (input) => {
//     for (i = 0; i <= input.length; i++) {
//         for (z = i++; z <= input.length; z++) {
//             if (z = i) {
//                 return `el primer valor que se repite es : ${z}`
//             }
//         }
//     }
// }
// console.log(firstRepeatedValue(input))


const fibonacci = (num) => {
    const array = [0, 1]
    let num_output
    if (num == 0) {
        console.log('null')
    }
    if (num == 1) {
        console.log('0')
    }
    if (num == 2) {
        console.log('1')
    } else {
        let indice_1 = 0
        let indice_2 = 1
        for (i = 2; i < num; i++) {
            num_output = indice_1 + indice_2
            indice_1 = indice_2
            indice_2 = num_output

            array.push(num_output)
        }
    }

    return array;
}
console.log(fibonacci(7))
    // fibonacci(7) // => 0 1 1 2 3 5 8 (fibonacci)
    //                    0 1 2 3 4 5 6 (indice)
    //                    1 2 3 4 5 6 7 (numeros)