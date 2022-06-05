import React, { useState } from "react";

const Adding = ()=>{
    const[Alltodos,setAlltodos] = useState("");
    return(
        <>
        <div className="addss">
            <button className="all" onClick={()=>setAlltodos()}>All</button>
            <button className="done">Done</button>
            <button className="to">Todo</button>
        </div>
        </>
    )
}

export default Adding