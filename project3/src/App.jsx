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
      <div>
        <p onMouseOver={handleMouseOver}>
          Hover over this paragraph.
        </p>
      </div>
    </div>
  )
}
export default App;