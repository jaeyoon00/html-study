// counter.jsx 

import { useState } from "react";

// function return을 html 태그들 하는 것
const Counter = () => {
    let count = 0;
    const [i, setI] = useState(0);
    const [number, setNumber] = useState(0);
    const onClickDiv = () => {
        if(Number !==0) setI(i / Number);
        else alert("0이 아닌거 넣어주세요");
    };
    return (
    <div>     
        <h1>{i}</h1>
        <input
        onChange={(e) => setNumber(Number(e.target.value))} 
        value={number}
        />
        <button onClick={()=>setI(i + 1)}>+</button>
        <button onClick={()=>setI(i - 1)}>-</button>
        <button onClick={()=>setI(i * 1)}>*</button>
        {number != 0 && <button onClick={onClickDiv}>/</button>}
        
    </div>
);

};
export default Counter;
