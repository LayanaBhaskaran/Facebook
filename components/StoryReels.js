import React from 'react'
import './StoryReels.css';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import motive1 from './motive1.PNG';
import motive2 from './motive2.PNG';
import motive3 from './motive3.PNG';
import motive4 from './motive4.PNG';

function StoryReels() {
    return (
        <div className="storyreels">  
            <img src={motive1} alt="story1" />
            <img src={motive2} alt="story2"/>
            <img src={motive3} alt="story3"/>
            <img src={motive4} alt="story4"/>
            


        </div>
    )
}

export default StoryReels
