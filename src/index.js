import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail
                name="Ari"
                date="Today at 4:45PM"
                text="Really inspiring"
                avatar={faker.image.image()}
            />

            <CommentDetail
                name="Sam"
                date="Today at 6:45PM"
                text="I like this"
                avatar={faker.image.image()}
            />

            <CommentDetail
                name="Zach"
                date="Today at 9:45PM"
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