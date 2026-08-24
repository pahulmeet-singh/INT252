// 24 august - lec 04

// shallow copy and deep copy

// SHALLOW COPY
const original={
    name:"Pahul",
    details:{age:25}
}

const shallowcopy={
    ...original
}
shallowcopy.name="Vishal"
shallowcopy.details.age=30

console.log(original.name) // Pahul
console.log(original.details.age) // 30

//why do we get the updated age and not the updated name?
// the reason is that the spread operator creates a shallow copy of the original object.
// This means that the top-level properties are copied, but nested objects are still referenced. 
// In this case, the details property is a nested object, so when we change the age property in the shallow copy, it also affects the original object.

// -----------------------------------------------------------------------------------

// DEEP COPY
const original1={
    name:"Pahul",
    details:{age:25}
}

const deepcopy=JSON.parse(JSON.stringify(original1))
deepcopy.name="Vishal"
deepcopy.details.age=30

console.log(original1.name) // Pahul
console.log(original1.details.age) // 25

// In this case, we are using JSON.parse() and JSON.stringify() to create a deep copy of the original object. 
// This means that all nested objects are also copied, so when we change the age property in the deep copy, it does not affect the original object.

// DEEP COPY using structuredClone() method
const original2={
    name:"Pahul",
    details:{age:25}
}

const deepcopy1=structuredClone(original2)
deepcopy1.name="Vishal"
deepcopy1.details.age=45

console.log(original2.name) // Pahul
console.log(original2.details.age) // 25
console.log(deepcopy1.details.age) // 45

// In this case, we are using structuredClone() method to create a deep copy of the original object. 
// This means that all nested objects are also copied, so when we change the age property in the deep copy, it does not affect the original object.

// we prefer 

// -----------------------------------------------------------------------------------

let a={name:"Pahul"}
let b={name:"Pahul"}
console.log(a===b) // false
//cause different memory location

let a1={name:"Rahul"}
let b1=a1
console.log(a1===b1) // true
//cause same memory location

// let x
// let a3=(x,10)
// let b3=(x,10)
// console.log(a3===b3) //true

let a4={x:10}
let b4={x:10}
console.log(a4===b4) // false

let a5={x:10}
let b5=a5
console.log(a5===b5) // true

// -----------------------------------------------------------------------------------

// SPA vs MPA