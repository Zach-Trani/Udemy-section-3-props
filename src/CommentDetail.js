import React from 'react';
import faker from 'faker';

const CommentDetail = ({
    name, 
    date, 
    text,
    avatar
}) => {
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={avatar}/>
            </a>
            <div className="content">
                <a href="/" className="author">
                    {name}
                </a>
                <div className="metadata">
                    <span className="date">{date}</span>
                </div>
                <div className="text">{text}</div>
            </div>
        </div>
    );
};

export default CommentDetail;