import { useState } from "react"
import Data from "./Data"
export default function Meme(){
    const[memeImage, setMemeImage]= useState("https:\/\/i.imgflip.com\/1g8my4.jpg")
    return(
        <>
        <div className="container">
        <form className="Form">
            <div className="text-1">
            <input type="text" value="Top text" className="text-1-discription"/>
            </div>
            <div className="text-2">
                <input type="text" value="Buttom text" className="text-2-discription"/>
            </div>
            </form>
            <div className="btn">
            <button onClick={handleClick}  className="form-button">Get a new meme image</button>
             
            </div>
            <div className="image">
            <img src={memeImage} alt="no img" />
            </div>
           
            </div>
            
        </>
       
    )
    function handleClick(){
        const memesList = Data.data.memes
        const randomNumber= Math.floor(Math.random()*memesList.length)
        setMemeImage(memesList[randomNumber].url)
    }
}