import React, {useState} from 'react'
import './MessageSender.css';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import MoodIcon from '@material-ui/icons/Mood';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


function MessageSender() {
    const[input,setInput]=useState("");
    const[url,setUrl]=useState("");

    const handlesubmit=(event)=>{
        event.preventDefault();
        setInput("");
        setUrl("");
    }
    const inputChangeHandler=(event)=>{
        setInput(event.target.value);

    }
const urlChangeHandler=(event)=>{
    setUrl(event.target.value);
}

    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <form>
               < AccountCircleIcon  style={{ fontSize : '30px'}}className="person"/>
                    <input type="text" placeholder="What is in your mind?" value={input} 
                    onChange={inputChangeHandler}/>
                    <input type="text" placeholder="Image URL(Optional)" value={url}
                    onChange={urlChangeHandler}/>
                    <button  typpe="submit"  onClick={handlesubmit}>Send</button>
                 </form>   
            </div>
            <div className="messageSender__bottom">
                <div className="messageSender__options">
                    <VideocamIcon style={{color:"red"}}/>
                    <h5>Live video</h5>
                </div> 

                <div className="messageSender__options">
                    <PhotoLibraryIcon  style={{color:"blue"}}/>
                    <h5>Photo/video</h5>
                </div> 

                <div className="messageSender__options">
                    <MoodIcon style={{color:"orange"}}/>
                    <h5>Feeling</h5>
                </div> 

             </div>    
        </div>
    )
}

export default MessageSender
