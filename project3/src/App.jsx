function App(){
  function handleClick(){
    alert("Button Clicked");
  }
  function handleMouseOver(){
    alert("Mouse Over");
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
    </div>
  )
}
export default App;

//tailwind css to center a paragraph in the middle of the page: text-center
// and to center a button in the middle of the page: flex justify-center items-center