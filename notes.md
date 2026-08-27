# Notes

lec 1 - 13 august

## Var vs let vs const

- var is globally scoped while let and const are block scoped.

- var can be updated and redeclared within its scope
- let can be updated but not redeclared
- const can neither be updated nore be redeclared

### blocked scope variable

- a variable that is only accessible within the block it is defined in.

## Functions

- a function is a set of instructions that takes some input, performs some specific task and produce output.
- a function is a set of codes that can be reused in the program at any time.

----

lec 2 - 17 august

### Arrow Functions

## Arrays

- Array in JS is an object which is used to represent a collection of similar type of elements.
- It allows you to store more than one value or a group of values in a single variable name.
- We can store any valid values such as objects, numbers, strings, function, and also other arrays.

## Map

- Map() cretes a new array by applying a funtion to every element of an existing array.

## Filter

- Filter() creates a new array with all elements that pass the test implemented by the provided function.

----

lec 3 - 20 august

## Reduce

- Reduce() takes an array and reduces it to a single value by applying a function to each element of the array.

## Array Destructuring

- Array destructuring is a feature in JavaScript that allows you to extract values from arrays and assign them to variables in a more concise and readable way.

## Object Destructuring

- Object destructuring is a feature in JavaScript that allows you to extract values from objects and assign them to variables in a more concise and readable way.

## Spread Operator

- The spread operator is a feature in JavaScript that allows you to expand an iterable (like an array or object) into individual elements or properties.
- if the ... is on the giving side of the assignment operator,(like passing data or creating a new array) it is called spread operator
and if it is on the receiving side of the assignment operator, it is called rest operator.

## Rest Parameter

- The rest parameter is a feature in JavaScript that allows you to represent an indefinite number of arguments as an array.
- spread is used in array and object literals, while rest is used in function parameters and destructuring assignments.

## ES6 MODULES

- ES6 modules are a way to organize and share code in JavaScript. They allow you to split your code into smaller, reusable pieces called modules, which can be imported and exported as needed.

----

lec 4 - 24 august

## shallow copy and deep copy

- A shallow copy creates a new object or array that references the same memory location as the original object or array. This means that if you modify the shallow copy, the changes will also affect the original object or array.

- A deep copy creates a new object or array that is completely independent of the original object or array. This means that if you modify the deep copy, the changes will not affect the original object or array.

## SPA vs MPA

- SPA (Single Page Application) is a web application that loads a single HTML page and dynamically updates the content as the user interacts with the app. It provides a smoother user experience and faster navigation since it doesn't require full page reloads.
- MPA (Multi-Page Application) is a web application that consists of multiple separate pages, each with its own HTML structure. Navigation between pages requires full page reloads.

### SPA coupling vs MPA coupling

- SPA coupling refers to the tight integration of components and modules within a single-page application. Changes in one part of the application can affect other parts, making it more challenging to maintain and scale.
- MPA coupling refers to the loose integration of separate pages in a multi-page application. The frontend and backend are more interdependent. All coding is usually housed under one project, making it easier to maintain and scale.

### what is seo and how it works

- SEO (Search Engine Optimization) is the practice of optimizing a website to improve its visibility and ranking on search engine results pages (SERPs). It involves various techniques and strategies to make the website more attractive to search engines, thereby increasing organic traffic.

## REACT Components

- React components are the building blocks of a React application. They are reusable pieces of code that define how a part of the user interface (UI) should look and behave. Components can be either class-based or functional, and they can manage their own state and lifecycle methods.

### JavaScript DOM

- The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the structure of a document as a tree of nodes, where each node is an object representing a part of the document. JavaScript can manipulate the DOM to dynamically update the content, structure, and styling of a web page.

----

lec 5- 27 august
