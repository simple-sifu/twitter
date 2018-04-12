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
                <div className="buttons">
                    <ReplyButton />
                    <ReTweetButton />
                    <LikeButton />
                    <MoreOptionsButton />
                </div>
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

const Time = () => (
    <span className="time"> 3h ago </span>
);

const ReplyButton = () => (
    <i className="fa fa-reply reply-button"/>
);

const ReTweetButton = () => (
    <i className="fa fa-retweet retweet-button"/>
);

const LikeButton = () => (
    <i className="fa fa-heart like-button"/>
);

const MoreOptionsButton = () => (
    <i className="fa fa-ellipsis-h more-options-button"/>
);

ReactDOM.render(<Tweet />, document.querySelector('#root'));