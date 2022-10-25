import React from 'react';
import faker from 'faker';

// Receiving data from props object in parent comp., passing to child comp.
const CommentDetail = (props) => {
    console.log(props);
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={props.avatar}/>
            </a>
            <div className="content">
                <a href="/" className="author">
                    {props.author}
                </a>
                <div className="metadata">
                    {props.timeAgo}
                </div>
                <div>{props.text}</div>
            </div>
        </div>
    );
};

export default CommentDetail;

// this component is useful for keeping the user data independent