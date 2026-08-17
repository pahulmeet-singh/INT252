// /**
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

// -----------------------------------------------------------------------

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


 
// -----------------------------------------------------------------------

// MAP

let newMarks=arr.map(mark=>{
    return mark+5;
})
console.log(newMarks)

//example
let fruits=["apple","banana","mango"]
let result=fruits.map((fruits,index,array)=>{
    console.log("Fruit:",fruits)
    console.log("Index:",index)
    console.log("Array:",array)
})


//example2: lowercase names array and use map to make it uppercase

let students=["john","jane","alice","bob"]
let upperCaseStudents=students.map(student=>{
    return student.toUpperCase()
})
console.log(upperCaseStudents)


//example3: using map to create an array of objects from an array of strings

let names=["john","jane","alice","bob"]
let nameObjects=names.map(name=>{
    return {name:name}
})
console.log(nameObjects)


//example4: using map to create an array of lengths from an array of strings

let words=["hello","world","javascript","map"]
let wordLengths=words.map(word=>{
    return word.length
})
console.log(wordLengths)

//example5: using map to create an array of objects with name and age properties from an array of objects
let students1=[
    {name:"john",age:20},
    {name:"jane",age:22},
    {name:"alice",age:21},
    {name:"bob",age:23}
]
let studentNames=students1.map(student=>{
    return student.name
})
console.log(studentNames)

// -----------------------------------------------------------------------

// FILTER

let marks=[10,20,30,40,50]
let passingMarks=marks.filter(mark=>{
    return mark>=30
})
console.log(passingMarks)

//example2: using filter to create an array of even numbers from an array of numbers

let numbers=[1,2,3,4,5,6,7,8,9,10]
let evenNumbers=numbers.filter(number=>{
    return number%2===0
})
console.log(evenNumbers)

//example3: using filter to create an array of objects with age greater than 21 from an array of objects

let students2=[
    {name:"john",age:20},
    {name:"jane",age:22},
    {name:"alice",age:21},
    {name:"bob",age:23}
]
let adultStudents=students2.filter(student=>{
    return student.age>21
})
console.log(adultStudents)

//example4: using filter to create an array of strings that start with a specific letter from an array of strings

let fruits1=["apple","banana","mango","avocado","grape"]
let aFruits=fruits1.filter(fruit=>{
    return fruit.startsWith("a")
})
console.log(aFruits)

// -----------------------------------------------------------------------