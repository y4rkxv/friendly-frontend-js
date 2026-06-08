// 'use strict'


// age = 10

// // console.log(age)

// // const greeting = "HI"

// // const name = "Alex"


// // const message = `${greeting}, ${name}`

// // const year = 2026 
// // const message = year === 2026 ? "dpdf][dofdf]d[fd][fp" : "d[fopd[fopdfofopeofpeofefoepfo"

// // console.log(message)

// const user = {
// name: "blackDragon" ,
// age: 12,
// favoriteGame:  "FORTNITE" 

// }

// delete user.age
// console.log(user.age)

// const name = "Yarik"
// const age = 29

// const user = {
//     name:name,
//     age:age
// }
// console.log(user)

// for (let propName in user){
// console.log(user[propName])
// }

// const nums = {
//     2: "Second",
//     3: "Third",
//     1: "First"
// }
// for (const num in nums ){
//     console.log(nums[num])
// }


const obj1 = {
    name: "Max",
    age: 10
}
const obj2 = {    
    name: "Max",
    age: 10}


const areObjectsEqual = (object1, object2) => {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);


  if (keys1.length !== keys2.length) {
    return false;
  }


  for (const key of keys1) {
    if (object1[key] !== object2[key]) {
      return false; 
    }
  }


  return true;
};

console.log(areObjectsEqual(obj1, obj2)); 