import { useState } from "react";

function Add(props) {
    const [ele , setEle] = useState('')
    function handleClick(){
        props.setNums([...props.nums,ele])
    }
    function handleChange(event){
        setEle(event.target.value)
    }
    return ( 
        <div className="w-fit mx-auto mb-10">
            <button className="text-white bg-blue-500 border-2 hover:bg-blue-950 border-blue-500 px-2" onClick={handleClick}> Add </button>
            <input className="text-pink-700 border-purple-600 border-2" type="text" onChange={handleChange}/>
        </div>
    );
}

export default Add;