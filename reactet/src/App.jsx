// printing hello world in react
// function App() {
//   return (
//     <div>
//       <h1>Hello, World!</h1>
//     </div>
//   );
// }





// export default App;

// using JSX to display a simple introduction
// function App() {
//   const name = "John Doe";
//   const course = "BTech";
//   const sem = 1;
//   return(
//     <div>
//       <h1>My Intro</h1>
//       <p>Name: {name}</p>
//       <p>Course: {course}</p>
//       <p>Semester: {sem}</p>
//     </div>
//   )
// }

// export default App;

// these parentheses allow us to write multi-line JSX code without any issues. It is a common practice to wrap the JSX code in parentheses for better readability and to avoid potential errors when returning multiple lines of JSX.





//functions to sum and multiply two numbers and display the results in JSX on the webpage
// function App() {
//   const num1 = 5;
//   const num2 = 10;

//   const sum = num1 + num2;
//   const product = num1 * num2;

//   return (
//     <div>
//       <h1>Math Operations</h1>
//       <p>Sum: {sum}</p>
//       <p>Product: {product}</p>
//     </div>
//   );
// }

// export default App;





//same as above but taking input from user and displaying the results in JSX on the webpage
import { useState } from 'react';

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  const sum = num1 + num2;
  const product = num1 * num2;

  return (
    <div>
      <h1>Math Operations</h1>

      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(Number(e.target.value))}
        placeholder="Enter first number"
      />

      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(Number(e.target.value))}
        placeholder="Enter second number"
      />

      <p>Sum: {sum}</p>
      <p>Product: {product}</p>
    </div>
  );
}

export default App;


// to manually comment out in jsx we use curly braces.
// this is because in the return function , we cannot use the normal comment syntax. So we use curly braces to wrap the comment and then use the normal comment syntax inside it.
