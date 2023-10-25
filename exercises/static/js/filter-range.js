
/**
 * Filtra uma array com base no valor base e máximo
 * @param {Array} arr - Array a ser filtrado
 * @param {Number} a - Menor valor
 * @param {Number} b - Maior valor
 * @returns {Array} - Array filtrado
 */
const filterRange = (arr, a, b) => {
    return arr.filter(item => item >= a && item <= b);
}

let arr = [1,2,4,5,6,8,9,11];
let filtered = filterRange(arr, 2, 8);
alert(filtered);