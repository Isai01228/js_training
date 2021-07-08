// array.filter() regresa los elementos de mi arreglo solo si cumplen una condicion
// array.map() recorre mi array
// array.sort()ordena los elementos de un array
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]; //multiplcados por 6
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present', 'rice', 'fly', 'ant', 'air', 'aunt', 'play', 'xbox', 'sony']; // las que su length sea menor a 5 y que incluyan la letra e
const names = [{ name: 'Esteban', edad: 23 },
        { name: 'Eunice', edad: 25 },
        { name: 'Joshua', edad: 21 },
        { name: 'Daniel', edad: 19 },
        { name: 'Jackie', edad: 18 }
    ] //ordenado por edad no por nombre


const array1 = array.map((el) => {
    return el * 6;
})
console.log(array1)

const array2 = words.filter(word => word.includes('e') === word.length <= 5)
console.log(array2)

const array3 = names.sort((a, b) => {
    if (a.edad > b.edad) {
        return 1
    }
    if (a.edad < b.edad) {
        return -1
    }
})
console.log(array3)


const spiderman = {
    name: 'peter parker',
    edad: 20,
    saludo: () => {
        console.log('hola soy spiderman')
    },
    superpoder: ['escalar', 'fuerza', 'sentido aracnido'],
    origenDePoder: 'piquete de araña',

    movies: {
        spiderman1: {
            traje: 'azul',
            villano: 'green globin'
        },
        spiderman3: {
            traje: 'negro',
            villano: 'venom'
        },
        spiderman2077: {
            traje: 'azul chido',
            villano: 'no se'
        }
    }
}

const { movies: { spiderman1: { villano } } } = spiderman
console.log(villano)