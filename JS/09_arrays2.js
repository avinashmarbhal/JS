const marvel_heros = ["thor","Ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

// marvel_heros.push(dc_heros) // this push an one array to another as an one element and modifed the orignal array
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros);//this statement(concat) merges two array and then retrun the new merage array
// console.log(allHeros);

const all_new_heros = [...marvel_heros,...dc_heros]//this is also another way we can merge two arrays with the help of this 'spread operato(...)'
// console.log(all_new_heros);

const another_array =[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)//this just remove all the internal array and return the single array 
                                                        //in this flat you have give a depth of array means how many arrays are in that array 
                                                        //but if you don't know or you don't want to give it you can also use Infinity

// console.log(real_another_array);

// console.log(Array.isArray("Avinsh"))//it just retuen wether the given value is array or not it return true/false
// console.log(Array.from("Avinsh")) //it create array from the value we are given and return it
console.log(Array.from({name:"Avinash"})); // it can't create array of key value paire like this
                                            // it just return an empty array '[]'

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));// in this you can create an array of indivistual variavble etc..
