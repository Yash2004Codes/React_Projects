import React ,{useState} from "react";
//import Square from './Square.jsx'


function Board(){

    const [board ,setBoard] = useState(Array(9).fill(null));
    
    function handleClick(index,e){

        const newBoard= [...board]
        newBoard[index] = e.target.value;
        setBoard(newBoard);
    }

    

    return(
        <>
        <div>
            {
                board.map(
                    (value ,index)=>{
    
                    <Square key={index}
                    value={value}
                    onClick={()=>handleClick()}></Square>
                    }
                )
            }
        </div>
        </>
    );
}

function Square({ value, onClick }) {
    return (
      <button
        onClick={onClick}
        style={{
          width: "100px",
          height: "100px",
          fontSize: "24px",
          cursor: "pointer",
          textAlign: "center",
        }}
      >
        {value}
      </button>
    );
  }

export default Board