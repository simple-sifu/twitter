import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";

function Tweet(){
    return (
        <div class="tweet">
            <Avatar />
            <div className="content">
                <NameWithHandle />
                <Message />
            </div>
        </div>
    )
}

function Avatar(){
    return (
        <img
          src="https://www.gravatar.com/avatar/nothing"
          className="avatar"
          alt="avatar" />
    );
}

function Message(){
    return (
        <div className="message">
           This is less than 140 characters
        </div>
    );
}

function NameWithHandle(){
    return (
        <span className="name-with-handle">
            <span className="name"> Tommy</span>
            <span className="handle">@simplesifu</span>
        </span>
    );
}


ReactDOM.render(<Tweet />, document.querySelector('#root'));