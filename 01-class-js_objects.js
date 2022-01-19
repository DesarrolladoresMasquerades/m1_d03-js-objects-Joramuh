// Class code examples

const person1 = {
    firstName : "Chee Kean",
    weight : 231,
    height : 1.7
}

const person2 = { 
    firstName : "Marco Santo",
    weight : 231,
    height : 1.7
}

const person3 = {
    firstName : "Carlo Max",
    weight : 231,
    height : 1.7
}

const person4 =  {
    firstName : "Caroluna",
    weight :  231,
    height : 1.7
}

// accessing a property with a dot notation
console.log ( person1.firstName,
person1.weight)

// Accessing a property with a bracket notation (indirect access, or dynamic)
console.log (person1["weight"])

const personKey = ["firstName", "weight", "height"]

for(key of personKey){
    console.log (`person1 $[key]: `, person1[key])
}

person1.nationality = "Italian"

console.log(person1.favFood)

person1["favFood"] = "pizza"

const newKey =`favourite Book`
person1[newKey] = "guide to galaxy"

console.log("person1:", person1)

for (key in person1) console.log (person1[key])

// object.keys(person1)
for (key of Object.keys(person1)) console.log(person1[key])

console.log("Accessing a number", person1[1])

console.log("reading index from keys", Object.keys(person1)[1])
console.log("Object length", person1.length)

const tween1= {
    name : "Carlos",
    age : 24
}

const tween2 =  {
    name : "Carlos",
    age : 24
}

console.log (
    tween1 === tween2,
    "Carlos" === "Carlos"
)

// list values
for (i = 0; i < Object.keys(person1).length; i++){
    console.log(person1[`${Object.keys(person1)[i]}`])
}

// missing console log 
01-class-js_objects
for (let i = 0; i < Object.keys(person1).length; i++){
Object.keys(person1)[i]
}