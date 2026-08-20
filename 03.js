// 20 aug - lec 03

// REDUCE

let arr=[80,90,70,45]

let sum=arr.reduce((accumulator,currentValue)=>{
    return accumulator+currentValue
},0)

console.log(sum)

//the reason the presence of 0 makes no difference is that the reduce() method starts with the first element of the array as the initial value of the accumulator when no initial value is provided. In this case, the first element is 80, so the accumulator starts with 80 and adds each subsequent element to it. The final result is still 285, which is the sum of all elements in the array.
// if we had used an initial value of 0, the accumulator would start with 0 and add each element to it, resulting in the same final sum of 285. Therefore, the presence of 0 as an initial value does not affect the final result in this case.
//------> the only case in which it would make a difference is if the array was empty, in which case the reduce() method would return the initial value provided (0 in this case) instead of throwing an error.

// -----------------------------------------------------------------------

// ARRAY DESTRUCTURING

let arr2=[80,90,70,45]

let[a,b,c]=arr2

console.log(a)
console.log(b)
console.log(c)

// if we wanted to skip a value b, we can do that by using an underscore (_)
//for example, if we wanted to skip the second value (90) in the array, we can use an underscore in its place like this:

let arr3=[80,90,70,45]

let[a1,_,c1]=arr3
//or let [a1,,c1]=arr3
// we prefer to use an underscore (_) to indicate that we are intentionally skipping a value, rather than leaving it blank, as it makes the code more readable and easier to understand.

console.log(a1)
console.log(c1)

// default values can also be assigned to variables during destructuring. If the value being destructured is undefined, the default value will be used instead.

let arr4=[80,90]

let[a2,b2,c2=100]=arr4

console.log(a2)
console.log(b2)
console.log(c2) // 100 is the default value assigned to c2, since there is no third element in the array.

// -----------------------------------------------------------------------

// OBJECT DESTRUCTURING

let obj={
    name: "John",
    age: 30,
    city: "New York"
}

let {name, age, city} = obj;

console.log(name); // "John"
console.log(age); // 30
console.log(city); // "New York"

//the reason using x,y,z in place of the actual property names prints undefined is that the variable names used in the destructuring assignment (x, y, z) do not match the property names of the object (name, age, city). In order to correctly destructure the object and assign its properties to variables, we need to use the same variable names as the property names. For example:
// if we wanted to use different variable names, we could do so by using the following syntax:

// -----------------------------------------------------------------------

// 3 dots are used in rest parameters and spread operator. The rest parameter syntax allows us to represent an indefinite number of arguments as an array, while the spread operator allows us to expand an array or object into individual elements or properties.

// SPREAD OPERATOR

let students=["Aman","Vishal","Rahul"]
students.push("Pahulmeet")
console.log(students)

let newStudents=["Aman","Vishal","Rahul"]
let updatedStudents=[...newStudents,"Pahulmeet"]
console.log(updatedStudents)

//using spread operator for objects

let obj1={
    name: "John",
    age: 30,
    city: "New York"
}

let obj2={
    ...obj1,
    country: "USA"
}

console.log(obj2)


// -----------------------------------------------------------------------

// REST PARAMETERS

function sum1(...numbers){
    let total=0
    for(let number of numbers){
        total+=number
    }
    return total
}

console.log(sum1(1,2,3,4,5)) // 15
console.log(sum1(10,20,30)) // 60

// in spread we expand        an array or object into individual elements or properties, while in rest we collect multiple elements or properties into a single array or object.
// in rest we collect         multiple elements or properties into a single array or object, while in spread we expand an array or object into individual elements or properties.

//spread is used in array and object literals, while rest is used in function parameters and destructuring assignments.

// -----------------------------------------------------------------------

// ES6 MODULES

// import and export demostrated in app.js and Math.js

// -----------------------------------------------------------------------

// mutability and immutability

let student={
    name:"Rahul",
    age:20
}
// mutability means that the value of an object can be changed after it is created. In this case, we are changing the value of the age property of the student object from 20 to 21. This is allowed because objects in JavaScript are mutable by default.
student.age=21
console.log(student.age) // 21

// immutability can be achieved by using the spread operator to create a new object with the updated value, rather than modifying the original object directly.
let update={
    ...student,
    age:30
}

console.log(student.age) // 21
console.log(update.age) // 30

//the reason is that the spread operator creates a new object with the same properties as the original object, but with the updated value for the age property. The original object remains unchanged, so its age property still has the value of 21. The new object, update, has the updated value of 30 for the age property. This demonstrates immutability, where the original object is not modified, but a new object is created with the updated value.

// -----------------------------------------------------------------------

// pure and impure functions

// pure function is a function that always produces the same output for the same input and does not have any side effects. In other words, a pure function does not modify any external state or variables, and its output depends only on its input parameters.
let total=0;
function addTotal(value){
    total+=value
    return total
}

console.log(addTotal(10)) // 10
console.log(addTotal(20)) // 30
console.log(addTotal(30)) // 60

// impure function is a function that may produce different outputs for the same input or has side effects that modify external state or variables. In other words, an impure function may depend on external factors or modify external state, which can lead to unpredictable behavior.   

function addTotalImpure(value){
    total+=value
    return total
}

console.log(addTotalImpure(10)) // 10
console.log(addTotalImpure(20)) // 30
console.log(addTotalImpure(30)) // 60