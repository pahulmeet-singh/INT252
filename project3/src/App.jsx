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
      <p onMouseOver={handleMouseOver}>
        Hover over this paragraph.
      </p>
    </div>
  )
}
export default App;