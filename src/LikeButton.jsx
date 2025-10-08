import { useState } from "react";

export default function LikeButton(){

    let [isLiked, setIsLiked] = useState(false);
    let[clicks,setClicks] = useState(0);
    let toggleLike = () =>{
        setIsLiked(!isLiked);
        setClicks(clicks+1);
    };
    let likestyle={color:"red"};
    return (
        <div>
            <p>Click = {clicks}</p>
            <p onClick={toggleLike}>
                {
                    isLiked ? <i  className="fa-regular fa-heart"></i> : <i  style={likestyle} className="fa-solid fa-heart"></i>
                }
          
            </p>
        </div>
    );
}