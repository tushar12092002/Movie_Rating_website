import React, { useState } from "react";
import Star from "./Star";


const containerstyle = {
    display: "flex",
    alignItems : "center" ,
    gap:"16px"
}


const starcontainerStyle = {
    display : "flex" ,
    // gap : "4px" ,

}



    function StarRating({maxRating = 10 , color = "#fcc419" , size =48  }) {  // maxRating = 5 (default value)

      const [rating ,setRating] = useState(0);
      const [tempRating , settempRating] = useState(0)

      const textStyle = {
        lineHeight: "1",
        margin : "0",
        color,
        fontSize : `${size/1.5}px`,
        messages : []
    }

      function handleRating(rating){
         setRating(rating)
         
      }

    return (
        <div  style = {containerstyle} >

        <div style={starcontainerStyle}>
            {Array.from({length:maxRating} , (_ , i) => <Star key = {i} onRate ={()=> handleRating(i+1)} 
            full={(tempRating || rating) >= i + 1} onHoverin = {()=> settempRating(i+1)}
            onHoverout = {()=> settempRating(0)} color = {color} size = {size}  ></Star>)}  
        </div> 
        <p style={textStyle}> {tempRating ||rating || ""}  </p>

        </div>
    )
}


export default StarRating



