import React from 'react'
import './Feed.css';
import MessageSender from './MessageSender';
import Post from './Post';
import StoryReels from './StoryReels';

function Feed() {
    return (
        <div className="feed">
          <StoryReels/> 
          <MessageSender/> 
          <Post/>
        </div>
    )
}

export default Feed
