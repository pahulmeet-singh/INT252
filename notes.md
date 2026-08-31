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
  - state refers to the data that determines the behavior and rendering of a component. It can change over time, usually in response to user actions or other events, and when it does, the component re-renders to reflect the new state.
  - lifecycle methods are special methods in class-based React components that allow you to hook into different stages of a component's life, such as when it is created, updated, or destroyed. These methods enable you to perform actions like fetching data, updating the DOM, or cleaning up resources at specific points in the component's lifecycle.

### JavaScript DOM

- The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the structure of a document as a tree of nodes, where each node is an object representing a part of the document. JavaScript can manipulate the DOM to dynamically update the content, structure, and styling of a web page.

----

lec 5- 27 august

## what is metadata and what are meta tags?

- Metadata is data that provides information about other data. In the context of web development, metadata is used to describe the content and structure of a web page, helping search engines and browsers understand the page's purpose and relevance
examples of metadata include the page title, description, keywords, author, and viewport settings.
for example, the metadata for a web page might include the following information:
  - Title: "My Sample Web Page"
  - Description: "This is a sample web page that demonstrates the use of metadata and meta tags."
  - Keywords: "web development, HTML, CSS, JavaScript"

- Meta tags are HTML elements that provide metadata about a web page. They are placed in the `<head>` section of the HTML document and can include information such as the page's title, description, keywords, author, and viewport settings. Meta tags play a crucial role in SEO and how search engines index and display web pages in search results.
examples of meta tags include:
  - `<meta name="description" content="This is a sample web page.">`
  - `<meta name="keywords" content="web, development, HTML, CSS, JavaScript">`
  - `<meta name="author" content="John Doe">`
  - `<meta charset="UTF-8">`
  - `<meta name="viewport" content="width=device-width, initial-scale=1">`
  
### is title a meta tag?

- The title of a web page is not considered a meta tag. The title is defined using the `<title>` element, which is placed within the `<head>` section of the HTML document. While the title provides important information about the content of the page and is used by search engines for indexing and displaying search results, it is not classified as a meta tag. Meta tags, on the other hand, are specific HTML elements that provide additional metadata about the page, such as descriptions, keywords, and author information.

## Virtual DOM

- The virtual DOM (Document Object Model) is a concept used in modern web development frameworks, such as React, to improve the performance and efficiency of updating the user interface (UI). It is an in-memory representation of the actual DOM, which allows for faster updates and rendering of changes to the UI.
- it is a lightweight copy of the real DOM that can be manipulated and updated without directly affecting the actual DOM. When changes are made to the virtual DOM, a diffing algorithm is used to compare the new virtual DOM with the previous version, and only the necessary updates are applied to the real DOM. This minimizes the number of direct manipulations to the actual DOM, which can be slow and resource-intensive.

### what is the difference between virtual DOM and real DOM?

- The virtual DOM is a lightweight, in-memory representation of the actual DOM, while the real DOM is the actual structure of the web page that is rendered in the browser. The virtual DOM allows for efficient updates and rendering of changes to the UI by minimizing direct manipulations to the real DOM, which can be slow and resource-intensive. In contrast, the real DOM is responsible for displaying the content and structure of the web page to the user.

#### what is a diffing algorithm?

- A diffing algorithm is a computational method used to compare two versions of a data structure, such as the virtual DOM, and identify the differences between them. In the context of web development frameworks like React, the diffing algorithm is used to efficiently update the user interface (UI) by determining which parts of the virtual DOM have changed and need to be updated in the actual DOM.

### what is diffing and reconcilation and why are they important in react?

- Diffing is the process of comparing two versions of a data structure, such as the virtual DOM, to identify the differences between them. Reconciliation is the process of updating the actual DOM based on the differences identified during the diffing process. These processes are important in React because they allow for efficient updates to the user interface (UI) by minimizing direct manipulations to the actual DOM, which can be slow and resource-intensive. By using diffing and reconciliation, React can ensure that only the necessary changes are applied to the real DOM, resulting in improved performance and a smoother user experience.

### JSX

- JSX (JavaScript XML) is a syntax extension for JavaScript that allows developers to write HTML-like code within their JavaScript code. It is commonly used in React to define the structure and appearance of user interface (UI) components. JSX makes it easier to create and manage UI elements by allowing developers to write code that closely resembles the final rendered output.

## MVC

- MVC (Model-View-Controller) is a software architectural pattern used for developing web applications. It separates the application into three interconnected components: the Model, which manages the data and business logic; the View, which handles the presentation and user interface; and the Controller, which processes user input and interacts with the Model and View to update the application state.

## Disadvantages of ReactJs

1. The high pace of development in the React ecosystem can make it challenging for developers to keep up with the latest features, best practices, and updates. This rapid evolution may lead to compatibility issues and require frequent learning and adaptation.
2. The steep learning curve for beginners can make it difficult for new developers to get started with React. Understanding concepts like JSX, state management, and the virtual DOM may require additional time and effort compared to other frameworks or libraries.
3. React's flexibility and unopinionated nature can lead to inconsistencies in code structure and architecture across different projects. Developers may have different approaches to solving problems, which can result in a lack of standardization and maintainability challenges.
4. Poor documentation and limited official resources can make it difficult for developers to find reliable information and guidance when working with React. This may lead to confusion and reliance on third-party tutorials or community resources, which can vary in quality and accuracy.
5. View Part - React focuses primarily on the view layer of an application, which means that developers need to integrate additional libraries or frameworks for state management, routing, and other functionalities. This can increase the complexity of the application and require more effort to set up and maintain.
6. JSX as a barrier - JSX, while powerful, can be a barrier for developers who are not familiar with its syntax and concepts. It may take time to become comfortable with JSX and understand how it integrates with JavaScript and the React ecosystem.

### what is the purpose of a bundler in ReactJs?

- A bundler in ReactJs is a tool that takes the various JavaScript files, CSS files, and other assets of a React application and combines them into a single or a few optimized files for deployment. The purpose of a bundler is to improve the performance and efficiency of the application by reducing the number of HTTP requests, minimizing file sizes through techniques like minification and tree shaking, and ensuring that all dependencies are properly resolved and included in the final build. Popular bundlers used in ReactJs development include Webpack, Parcel, and Rollup.

## What is VITE?

- Vite is a modern build tool and development server for web applications, including ReactJs projects. It is designed to provide a faster and more efficient development experience by leveraging native ES modules in the browser and using a highly optimized build process. Vite offers features like hot module replacement (HMR), fast cold starts, and optimized production builds, making it a popular choice for developers looking to streamline their workflow and improve the performance of their applications.