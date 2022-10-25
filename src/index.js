import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            {/* Wrap child comp in parent comp, child comp will show inside the child in props.children */}
            <ApprovalCard>
                {/* Passing CommentDetail component as a prop (configuring ApprovalCard compone–nt) */}
                <CommentDetail
                    author="Ari"
                    timeAgo="Today at 4:45PM"
                    text="Amazing!"
                    avatar={faker.image.image()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author="Bob"
                    timeAgo="Today at 6:45PM"
                    text="I like this"
                    avatar={faker.image.image()}
                />
            </ApprovalCard>
            
            <ApprovalCard>
                <CommentDetail
                    author="Zach"
                    timeAgo="Today at 9:45PM"
                    text="Double like this"
                    avatar={faker.image.image()}
                />
            </ApprovalCard>
            

        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'))