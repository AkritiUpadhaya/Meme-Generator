import { useState } from "react"
import Data from "./Data"
export default function Meme(){
    const[meme, setMeme]=useState({
        topText:"",
        bottomText:"",
        randomImage: "https:\/\/i.imgflip.com\/1g8my4.jpg"

    })
    const[memeImage, setMemeImage]= useState(Data)
    
    function handleClick(){
        const memesList = memeImage.data.memes
        const randomNumber= Math.floor(Math.random()*memesList.length)
        const url=memesList[randomNumber].url
        setMeme(prevMeme=>({
            ...prevMeme, randomImage: url
        }))
    }
    function handleChange(event){
        const {name,value}= event.target
        setMeme(prevMeme=>({
             ...prevMeme,
             [name]:value
        }))
    }
    return(
        <>
        <div className="container">
        <form className="Form">
          <input type="text" placeholder="Top Text" className="text-1-discription" name="topText" value={meme.topText} onChange={handleChange}/>
            <input type="text" placeholder="Bottom text" className="text-2-discription" name="bottomText" value={meme.bottomText}   onChange={handleChange}/>
          </form>
            <div className="btn">
            <button onClick={handleClick}  className="form-button">Get a new meme image</button>
             </div>
              <div className="image">
                <img src={meme.randomImage} alt="no img" className="image--1"/>
            <div className="top-text">
                <h2 className="image-top">{meme.topText}</h2>
                </div>
            <div className="bottom-text">
            <h2 className="image-bottom">{meme.bottomText}</h2>
            </div>
            </div>
           </div>
        </>
    )
}   