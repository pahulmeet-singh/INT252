import React from "react"
function StudentCard({name,onView}){
    console.log("student card rendered")
    return(
        <div>
            <h2>{name}</h2>
            <button onClick={onView}>
                View Student
            </button>
        </div>
    )
}
export default React.memo(StudentCard)
