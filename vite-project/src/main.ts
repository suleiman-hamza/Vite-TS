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

// Object, object & {} types, which one ?
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

// tuple types
const group: [string, number, undefined, boolean] = ['Justin', 27, undefined, false];
// tuple types has fixed size & element in it has a distinct type
// all you need to get  a tupke type is to explicitly annotate 😂😂🤦‍♂️
let [firstname, birthAge, something, tall] = group;

type Peeps = [name: string, age: number, status: boolean] // tuple with labels as meta information

const Peep: [string, number, boolean] = ['suleiman', 22, true] // tuple without labels

//tuples can also be used to annotate function arguements
function hello(...args: Peeps) {
    console.log('hello', ...args)
}
// if you need to collect arguements use tuples before you use them in your code
hello(...Peep)

//interface versus type aliases
// declaration merging: one of the important diff that distinguish type alias and interface
interface match {
    hit: string,
    at: number
}

interface match {
    timeOf: number
}

const applyMatch: match = {
    hit: 'bad vibez',
    at: 2024,
    timeOf: 20
}

type arch = {
    name: string,
    age: number,
    married: boolean
}

function createP() {
    return { name: 'abdulrahman', age: 23, married: true }
}

const me: arch = createP();

console.log(me)

// new example extending interface vs type alias
type Shop = {
    doll: boolean,
    toys: boolean,
    chairs: boolean
}

type Shopy = {
    books: string[],
}

const allShop: Shop | Shopy = {
    doll: true,
    toys: true,
    chairs: false,
    books: ['get rich quick', 'before they arrive']
}
console.log(allShop)

// calling math.random
// function randomCall() {
//     let call = Math.random() * 6 //math.random returns a random number from 0 to 1, then we multiply by 6
//     return Math.floor(call) //math.floor return a round down of the number passed as the argument to an integer
// }
// console.log(randomCall() + 1)


// pick random array element function
type randomNames = string[];
const names = ['Suleiman', 'Zainab', 'Habiba', 'Abdulrahman', 'Munira', 'Hanifa', 'Toyyib', 'Musa', 'Nassib', 'Firdausi', 'Zaysham']

function randomPick(arrNames: randomNames): string {
    let choice = Math.floor(Math.random() * arrNames.length)
    console.log(choice)
    return arrNames[choice]
}
console.log(randomPick(names));

// type assertion with roll dice function
type Dice = 1 | 2 | 3| 4 | 5 | 6

function rollDice(): Dice {
    let num;
    num = Math.floor(Math.random() * 6) + 1
    return num as Dice;
}
console.log(rollDice())

const nameless = ['Josh', 'Marcel', 'Sadiq']
let data: Array<info> = []

type info = {
    name: string,
    age?: number,
    married?: boolean
}

// function onboard({name, age, married}: info) {
//  data.push({name: name, age: age, married: married})
//  console.log(data)  
// }
// onboard({name: 'suleiman', age: 22, married: false})
// console.log(data)

function greet(name: string): string {
    return "Hello, " + name.toUpperCase() + "!!"
}
// object
type Pointer = {
    x: number
    y: number
}

function printCoord(pt: Pointer) {
    console.log("The Coordinate value ox x is", + pt.x)
    console.log("The Coordinate value ox y is", + pt.y)
}

const pointerobj = {
    x: 654.3,
    y: 546.90
}

printCoord(pointerobj)

//optional properties
function printName(obj: {first: string, last?: string}) {
    console.log(obj.first, obj.last?.toUpperCase())
}

printName({first: 'alice'});

//Union Types
function printID(id: string | number) {
    console.log(id)
}

printID("fortnite"); // 100% works
// won't work because its not string or number printID({alloy});

const date = new Date().toUTCString();
const dateB = new Date().getDate();
console.log(date);
console.log(dateB);

//Type System
//UNION TYPES
type BoardGame = {
    name: string
    price: number
    quantity: number
    minimumAge: number
    players: number
}

type PuzzleGame = {
    name: string
    price: number
    quantity: number
    minimumAge: number
    pieces: number
}

type Doll = {
    name: string;
    price: number;
    quantity: number;
    minimumAge: number;
    material: string;
};

// super type that represent the base of all toys
type ToyBase2 = {
    name: string
    price: number
    quantity: number
    minimumAge: number
}

//better option represents all possible toys
type Toy = Doll | PuzzleGame | BoardGame

function printToys(toy: ToyBase2) {
    return toy;
}

const doll = {
    name: 'Mickey Mouse',
    price: 9.99,
    quantity: 2,
    minimumAge: 20,
    material: 'Splush'
}

const puzzle = {
    name: 'Cross word',
    price: 19.99,
    quantity: 1,
    minimumAge: 10,
    pieces: 7
}

const result = printToys(doll)
console.log(result)

//INTERSECTION TYPES

type ToyBase = {
    name: string
    price: number
    quantity: number
    minimumAge: number
}

type BoardGame2 = ToyBase & {
    players: number
}

type Doll2 = ToyBase & {
    material: string
}

function printAnotherToy(toy: Doll2) {
    console.log(toy)
}

const anotherDoll = {
    name: 'Barbie',
    price: 6.99,
    quantity: 3,
    minimumAge: 12,
    material: 'cotton'
}

printAnotherToy(anotherDoll);

// union of interfaces
interface Arsenal {
    player: string
    position: string
    number: number
}

type Showcase = Arsenal & {
    location: string
}

// interfaces can only extend an object type or intersection of object types
interface club extends Showcase {

}
//3.2 Explicitly Defining Models with Discriminated Union Types

type Circle = {
    radius: number;
};

type Square = {
    x: number;
}

type Triangle = {
    x: number;
    y : number;
}

type Rectangle ={
    x: number;
    y : number;
}

type Shape = Triangle | Circle | Square | Rectangle; 
// Parts of your modeled union type have a huge overlap in their properties
/**There's some similarities btw the types but there is also still enough 
information to differentiate between them in an area function**/

function area(shape: Shape) {
    if('radius' in shape) {
        return Math.PI * shape.radius * shape.radius
    } else if ('y' in shape) {
        return 1/2 * (shape.x * shape.y)
    } else {
        return `Square is ${shape.x * shape.x} cm in area`
    }
}

// looking at the properties for rectangle, see that it contains the same properties as Triangle:

const printArea = area({x: 8})
console.log(printArea)

// To make each part of a union is distinguishable, we extend our models with an identifying property that makes absolutely clear what we are dealing with
// This addition of a kind property. This property takes a string literal type identifying the part of the model

/*This can happen through the addition of a kind property. This property takes a string
literal type identifying the part of the model*/
type Circle2 = {
    radius: number;
    kind: 'circle'
}
type Square2 = {
    x: number;
    kind: 'square'
}
type Triangle2 = {
    x: number;
    y: number;
    kind: 'triangle'
}

type Shape2 = Triangle2 | Circle2 | Square2

/*Note that we don’t set kind to string but to the exact literal type "circle" (or
"square" and "triangle", respectively). This is a type, not a value, but the only com‐
patible value is the literal string*/

/*Adding the kind property with string literal types ensures there can’t be any overlap
between parts of the union, as the literal types are not compatible with one another.
This technique is called discriminated union types*/

function area2(shape: Shape2) {
    switch(shape.kind) {
        case "triangle":
            return (shape.x * shape.y) / 2;
        case "circle":
            return Math.PI * shape.radius * shape.radius;
        case "square":
            return shape.x * shape.x;
        default:
            throw Error('not possible')
    }
}
const printArea2 = area2({
    x: 8,
    kind: 'square'
})
console.log(printArea2)