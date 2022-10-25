import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
                {/* Here we pass a prop from the parent to a child component */}
                <ApprovalCard />
                <CommentDetail
                    author="Ari"
                    timeAgo="Today at 4:45PM"
                    text="Really inspiring"
                    avatar={faker.image.image()}
                />
            

            <CommentDetail
                author="Sam"
                timeAgo="Today at 6:45PM"
                text="I like this"
                avatar={faker.image.image()}
            />

            <CommentDetail
                author="Zach"
                timeAgo="Today at 9:45PM"
                text="Double like this"
                avatar={faker.image.image()}
            />

        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'))

// <link
//  rel="stylesheet"
//  href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"
// />

// https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.5.0/semantic.min.css