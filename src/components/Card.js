import React from 'react';

const Card = ({ id, name, username, email }) => {
    return (
        <div id="Card" className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img src={`https://robohash.org/${id}?200x200`} alt={`${name}'s Profile Picture`} />
            <div>
                <h2>{name}</h2>
                <p>Username: @{username}</p>
                <p>{email}</p>
            </div>
        </div>
    );
};

export default Card;