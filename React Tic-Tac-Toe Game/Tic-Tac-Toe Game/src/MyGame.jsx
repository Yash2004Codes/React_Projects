import React, { useState } from "react";

function MyGame() {

    const [board,setBoard] = useState(Array(9).fill(null));
    const [isXNext,setisXNext] = useState(true); // player turn
    const [winner,setWinner] = useState(null);


    return(
        <>
    <div>
        {
            board.map(
                (value,index)=>{
                <button key={index}>{value}</button>
                }
            )
        }
    </div>
        </>
    );
}

export default MyGame;

/* 
1) break into componenets
2) plan state
3)code components
*/