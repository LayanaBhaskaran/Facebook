import React from 'react'
import './Post.css';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import CommentIcon from '@material-ui/icons/Comment';
import ShareIcon from '@material-ui/icons/Share';
import post1 from './post1.PNG';
import post2 from './post2.PNG';

function Post() {
    return (
        <div className="post">
            <div className="post__top">
              <AccountCircleIcon className="post__person"/>
              <div className="post__topInfo">
                  <h4>Person1</h4>
                  <p>timestamp..</p>
               </div>
             </div> 
              <div className="post__bottom">
                  <h6>Hello</h6>
               </div>
              <div className="post__image">
              <img src={post1}/>
             </div> 

           <div className="post__options">
               <div className="post__opt">
               <ThumbUpIcon/><h6>Like</h6>
             </div>
            
             <div className="post__opt">
               <CommentIcon/><h6>Comment</h6>
             </div>


             <div className="post__opt">
               <ShareIcon/><h6>Share</h6>
             </div>
            
             </div>
              
             <div className="post__top">
              <AccountCircleIcon className="post__person"/>
              <div className="post__topInfo">
                  <h4>Person2</h4>
                  <p>timestamp..</p>
               </div>
             </div> 
              <div className="post__bottom">
                  <h6>Home</h6>
               </div>
              <div className="post__image">
              <img src={post2}/>
             </div> 

           <div className="post__options">
               <div className="post__opt">
               <ThumbUpIcon/><h6>Like</h6>
             </div>
            
             <div className="post__opt">
               <CommentIcon/><h6>Comment</h6>
             </div>


             <div className="post__opt">
               <ShareIcon/><h6>Share</h6>
             </div>
            
             </div>
              



             </div>
    )
}

export default Post
