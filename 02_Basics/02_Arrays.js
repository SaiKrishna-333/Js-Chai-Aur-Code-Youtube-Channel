const marvelHeroes=["thor","ironman","spiderman"]
const dc_heroes=["superman","flash","batman"]

// marvelHeroes.push(dc_heroes);
// console.log(marvelHeroes)

// const allHeroes = marvelHeroes.concat(dc_heroes);
// console.log(allHeroes)

const allHeroes = [...marvelHeroes,...dc_heroes]

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array=another_array.flat(Infinity)
// console.log(real_another_array)


console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name:"Hitesh"}))

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));