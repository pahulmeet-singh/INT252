function App(){
  function handleClick(){
    alert("Button Clicked");
  }
  function handleMouseOver(){
    alert("Mouse Over");
  }
  function handleInputChange(event){
    console.log("Value changed: ", event.target.value);
  }
  function handleSubmit(event){
    event.preventDefault();
    alert("Form Submitted");
  }
  return(
    <div>
      <button onClick={handleClick}>
        Clickme
      </button>

      <div className={'text-center'}>
        <p onMouseOver={handleMouseOver}>
          Hover over this paragraph.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleInputChange} placeholder="Type something..." />
      <button type="submit">Submit Form</button>
      </form>

      <button onClick={() => alert("Button Clicked. Arrow function alert")} >
        Submit Button
      </button>

    </div>
  )
}
export default App;

//tailwind css to center a paragraph in the middle of the page: text-center
// and to center a button in the middle of the page: flex justify-center items-center

//meaning of action and method in form tag:
// The `action` attribute in a form tag specifies the URL where the form data should be sent when the form is submitted. If the `action` attribute is not specified, the form will submit to the current page URL by default. 
// The `method` attribute in a form tag specifies the HTTP method to be used when submitting the form data. The two most common methods are "GET" and "POST". "GET" appends the form data to the URL, while "POST" sends the form data in the body of the request, which is more secure for sensitive information.

// what is the use of useState in react:
// The `useState` hook in React is used to add state management to functional components. It allows you to declare a state variable and a function to update that variable. When the state changes, the component re-renders to reflect the new state. This is useful for managing dynamic data and user interactions within a component.
// for example, you can use `useState` to keep track of a counter value, form input values, or any other piece of data that may change over time in your component.