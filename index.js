
const {uniq} = require('lodash');

const { arrayNumeros, arrayLetras} = require('./array')

console.log(arrayLetras);
console.log(arrayNumeros);


const arrayNumeroUnico = uniq(arrayNumeros);
const arrayLetraUnico = uniq(arrayLetras);

console.log(arrayLetraUnico);
console.log(arrayNumeroUnico);