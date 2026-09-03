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
//     <>
//     <div>
//       <h1>My Intro</h1>
//       <p>Name: {name}</p>
//       {/* <p>Course: {course}</p> */}
//       <p>Semester: {sem}</p>
      
//     </div>
//     <div>
//       <h2> Lovely Professional University</h2>
//     </div>
//     </>
//   )
// }
// export default App;

// these parentheses allow us to write multi-line JSX code without any issues. It is a common practice to wrap the JSX code in parentheses for better readability and to avoid potential errors when returning multiple lines of JSX.

// to manually comment out in jsx we use curly braces.
// this is because in the return function , we cannot use the normal comment syntax. So we use curly braces to wrap the comment and then use the normal comment syntax inside it.







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
// import { useState } from 'react';

// function App() {
//   const [num1, setNum1] = useState(0);
//   const [num2, setNum2] = useState(0);

//   const sum = num1 + num2;
//   const product = num1 * num2;

//   return (
//     <div>
//       <h1>Math Operations</h1>

//       <input
//         type="number"
//         value={num1}
//         onChange={(e) => setNum1(Number(e.target.value))}
//         placeholder="Enter first number"
//       />

//       <input
//         type="number"
//         value={num2}
//         onChange={(e) => setNum2(Number(e.target.value))}
//         placeholder="Enter second number"
//       />

//       <p>Sum: {sum}</p>
//       <p>Product: {product}</p>
//     </div>
//   );
// }

// export default App;



// same as above but now using a button for the user to click and display the results in JSX on the webpage
// import { useState } from 'react';
// import Welcome from'./Welcome'
// import Activity1 from './Activity1'

// function App() {
//   const [num1, setNum1] = useState(0);
//   const [num2, setNum2] = useState(0);
//   const [sum, setSum] = useState(null);
//   const [product, setProduct] = useState(null);
//   const [showResults, setShowResults] = useState(false);

//   const handleCalculate = () => {
//     setSum(Number(num1) + Number(num2));
//     setProduct(Number(num1) * Number(num2));
//     setShowResults(true);
//   };

//   return (
//     <>
//     <div>
//       <h1>Math Operations</h1>

//       <input
//         type="number"
//         value={num1}
//         onChange={(e) => setNum1(e.target.value)}
//         placeholder="Enter first number"
//       />

//       <input
//         type="number"
//         value={num2}
//         onChange={(e) => setNum2(e.target.value)}
//         placeholder="Enter second number"
//       />

//       <button onClick={handleCalculate}>Calculate</button>

//       {showResults && (
//         <div>
//           <p>Sum: {sum}</p>
//           <p>Product: {product}</p>
//         </div>
//       )}
//     </div>
//     </>
//   );
// }

// export default App;



// import StudentCard from './StudentCard';
// function App() {
//   return (
//     <div>
//       <h1>Student Dashboard</h1>
//       <StudentCard />

//     </div>
//   )
// }
// export default App;



//learning props in react
import StudentCard from './components/StudentCard';
function App() {
  return (
    <div>
      <h1>Student Dashboard</h1>
      <StudentCard 
        name="Pahul"
        course="CSE"
        rollNo="12345"
      />
      <StudentCard 
        name="John Doe"
        course="ECE"
        rollNo="67890"
      />
      <StudentCard 
        name="Jane Smith"
        course="ME"
        rollNo="54321"
      />
    </div>
  )
}
export default App;

// this is called props drilling. We are passing the props from the parent component to the child component. The child component can then use these props to display the data. This is a common pattern in React for passing data from parent to child components.
