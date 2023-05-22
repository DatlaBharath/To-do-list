import { useState, useEffect } from "react";
function List(props) {
    function handleClick(event){
        event.target.style = "text-decoration : line-through"
    }
    const listItems = props.nums.map((num) => {
        return <h2 className="text-cyan-50 bg-purple-700 w-fit mx-auto px-5 rounded-sm my-5" onClick={handleClick}>{num}</h2>;
      });
    return ( 
        <div className="w-fit mx-auto">
            {listItems}
        </div>
     );
}

export default List;