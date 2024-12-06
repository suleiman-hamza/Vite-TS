type Person = {
    name: string,
    age: number
}

const personObject = {
    age: 20,
    name: 'Suleiman'
}

function printPerson(person: Person) {
    for (let key in person) {
        console.log(`${key}: ${person[key  as keyof Person]}`) // prints object property key and values in object
        // console.log(person[key as keyof Person])
    }
}

printPerson(personObject);

//Unknown: Type-checks and control flow analysis help you do more with unknown:
function createPerson(value: unknown) {
    if(typeof value === 'string') {
        console.log('This is a string', value.toLocaleUpperCase())
    }
    else if(typeof value === 'number') {
        console.log('This is a number', value * 2)
    }
    let setvalue = value;
    console.log(setvalue)
}

createPerson('Fuji')

// Object, object & {} types
const carModel: object = { //no primitive types
    mercedez: 'G-Wagon',
    BMW: 'M-Competetion',
    benz: 'AMG'
}

const bicycleModel: {} = ['santacruz','canyon', 2] // allows every value except null & undefined
const bicycleNumbers: {} = 2 // allows every value except null & undefined
console.log(typeof bicycleNumbers)

const appliances: Object = true // allows every value except null & undefined
console.log(typeof appliances)

// type arch = {

//     name: string,
//     age: number,
//     married: boolean
// }
// function createP() {
//     return { name: 'abdulrahman', age: 23, married: true }
// }

// const me: arch = createP()

// console.log(me)
// // new example extending interface vs type alias
// type Shop = {
//     doll: boolean,
//     toys: boolean,
//     chairs: boolean
// }

// type Shopy = {
//     books: boolean
// }

// const allShop: Shop | Shopy = {
//     doll: true,
//     toys: true,
//     chairs: false
// }

// // calling math.random
// // function randomCall() {
// //     let call = Math.random() * 6 //math.random returns a random number from 0 to 1, then we multiply by 6
// //     return Math.floor(call) //math.floor return a round down of the number passed as the argument to an integer
// // }
// // console.log(randomCall() + 1)


// // pick random array function
// const names: string[] = ['Suleiman', 'Zainab', 'Habiba', 'Abdulrahman', 'Munira', 'Hanifa', 'Toyyib', 'Musa', 'Nassib', 'Firdausi', 'Zaysham']

// function randomPick(arrNames: string[]): string {
//     let choice = Math.floor(Math.random() * arrNames.length)
//     return arrNames[choice]
// }
// console.log(randomPick(names));

// // type assertion with roll dice function
// type Dice = 1 | 2 | 3| 4 | 5 | 6

// function rollDice(): Dice {
//     let num;
//     num = Math.floor(Math.random() * 6) + 1
//     return num as Dice;
// }

// console.log(rollDice())

// const names = ['Josh', 'Marcel', 'Sadiq']
// let data: Array<info> = []

// type info = {
//     name: string,
//     age?: number,
//     married?: boolean
// }

// let test = "prime";
// test = "proven";

// function onboard({name, age, married}: info) {
//  data.push({name: name, age: age, married: married})
//  console.log(data)  
// }
// onboard({name: 'suleiman', age: 22, married: false})
// console.log(data)

// function greet(name: string): string {
//     return "Hello, " + name.toUpperCase() + "!!"
// }