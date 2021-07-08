//objetos(colecciones que se componen de llave,valor)
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


const { movies } = spiderman
console.log(movies)


// console.log(spiderman.superpoder)
// for (i = 0; i <= spiderman.superpoder.length; i++) {
// console.log(spiderman.superpoder[i])
// }
// console.log(spiderman.edad)
// console.log(spiderman.origenDePoder)
const name = "Daniel"

const { name: namehero, origenDepoder } = spiderman
// console.log(name)