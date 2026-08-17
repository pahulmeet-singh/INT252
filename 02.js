// 17 aug-lec 2
// difference between functions and arrow functions
let a,b

function multiply(a,b){
    return a*b
}

//now writing arrow function for the same multiply function
let multiply1=(a,b)=>{
    return a*b
}

// now writing arrow function in one line
let multiply2=(a,b)=> a*b

console.log(multiply(2,3))
console.log(multiply1(2,3))
console.log(multiply2(2,3))

//the brackets in a an arrow function can be removed only if there is a single argument.
let multiply3=a=> a*2

console.log(multiply3(2))

//if there is no argument, then we have to use brackets
let multiply4=()=> 2*2

console.log(multiply4())

//the reason that we need brackets when there is no argument is that the arrow function syntax requires parentheses to indicate the absence of parameters. Without parentheses, the function would be ambiguous and could lead to syntax errors.
// and the reson we need brackets for more than one argument is that the arrow function syntax requires parentheses to group multiple parameters together. Without parentheses, the function would be ambiguous and could lead to syntax errors.

// ------------------------------------------------------------

// ARRAYS- 

let arr=[10,20,30,40,50]
console.log(arr)

for(let i=0;i<arr.length;i++){
    console.log(arr[i])
}

// for of loop
for(let mark of arr){
    console.log(mark)
}

// for in loop
for(let index in arr){
    console.log(index)
    console.log(arr[index])
}

// for each loop
arr.forEach((mark,index)=>{
    console.log(mark)
    console.log(index)
})

// for each loop with arrow function
arr.forEach((mark,index)=>console.log(mark,index))
// for each loop with arrow function and single parameter
arr.forEach (mark=>console.log(mark))