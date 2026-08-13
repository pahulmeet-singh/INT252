//write some simple ui for the html file
// const button = document.createElement('button');
// button.textContent = 'Click Me';
// button.style.padding = '10px 20px';
// button.style.fontSize = '16px';
// button.style.margin = '20px';

// button.addEventListener('click', () => {
//     alert('Button was clicked!');
// });

// document.body.appendChild(button);

console.log("Pahulmeet Singh")

// ----------------------------

var a=20
console.log(a)

a=30
console.log(a)// update


var a=40
console.log(a)// redeclare

// ---------------------------

let a1=20
console.log(a1)

a1=30
console.log(a1)// update

// let a1=40
// console.log(a1)// redeclare not allowed

// ---------------------------

const a2=20
console.log(a2)

// a2=30
// console.log(a2)// update not allowed
// const a2=40
// console.log(a2)// redeclare not allowed

// ---------------------------

//testing let and const in block scope

if(true){
    let b=50
    console.log(b)
}

// console.log(b) // not accessible outside the block scope

if(true){
    const c=60
    console.log(c)
}

// console.log(c) // not accessible outside the block scope

// ---------------------------

// testing var in block scope

if(true){
    var d=70
    console.log(d)
}

console.log(d) // accessible outside the block scope

// ---------------------------

// testing var in function scope

function mul(a,b){
    var result=a*b
    console.log(result)
}

mul(5,10)

// console.log(result) // not accessible outside the function scope
// the reason is that var is function scoped, so it is only accessible within the function where it is defined.
//but
console.log(mul(4,5)) // accessible outside the function scope because it is returning the value of result

// ---------------------------

// ARROW FUNCTION

const add=(a,b)=> a+b;
console.log(add(5,6))