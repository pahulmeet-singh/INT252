function App(){
  function handleClick(){
    alert("Button Clicked");
  }
  return(
    <div>
      <button onClick={handleClick}>
        Clickme
      </button>
    </div>
  )
}
export default App;