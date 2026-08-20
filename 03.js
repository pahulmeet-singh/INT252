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