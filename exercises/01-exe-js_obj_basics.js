const ironhacker = {
    firstName: 'Tio',
    age: 39,
    favoriteLanguage: 'JavaScript',
    isSatisfied: true,
    worksAt: 'Google',
    isRemote: false
}

// 1: update favoriteLanguage to 'React' 
// ... your code here
ironhacker.favoriteLanguage = "React"
console.log( "Ironhacker:", ironhacker)


// 2: Update ironhacker's age to 29
// ... your code here
ironhacker.age = 29
console.log("Ironhacker:", ironhacker)

// 3: Remove the 'isRemote' property
// ... your code here
delete ironhacker.isRemote // also delete ironhacker["isRemote"]
console.log("Ironhacker:", ironhacker)

// 4: Add a new property: 'didGraduate' and set it to a valid boolean value
// ... your code here
ironhacker.didGraduate = true
console.log("Ironhacker:", ironhacker)

// 5: list all keys of the ironhacker object
// ... your code here
// try also with object.key 
for (const key in ironhacker){
    console.log (key)
}

// 6: check if ironhacker has property 'works at'
// ... your code here

console.log(ironhacker["worksAt"], ironhacker.hasOwnProperty("worksAt"), !!ironhacker.worksAt ) // diff methods