import React from "react";
import memesData from "../memesData";

export default function Meme(){

    function getAnyUrl(){
        // const meme = memesData.map(data => {return data});
        const data = memesData.data.memes;
        const numOfObjects = data.length;
        const ranNum = Math.floor(Math.random() * numOfObjects);
        console.log(ranNum);
        let url = data[ranNum].url;
        console.log(url);
        // console.log(memes[0]);
    }
    return (
        <main>
           <form className="form">
             <input 
                type="text"
                placeholder="Top text"
                className="form--input" 
              />
             <input 
                type="text"
                placeholder="Bottom text"
                className="form--input" 
              />
             <button className="form--button" onClick={getAnyUrl}
             >
                Get a new meme image
             </button>
           </form>
        </main>
)
}