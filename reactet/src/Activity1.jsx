// show good morning if time<12 else good evening 
// add one html tag incorrectly ( eg <br> without /) and see how react handles it.

function Greeting() {
    const hours = new Date().getHours();
    const isMorning = hours < 12;
    return (
        <h1>Good {isMorning ? "Morning" : "Evening"}</h1>
    );
}

export default Greeting;

// the import statement for this in App.jsx would be...