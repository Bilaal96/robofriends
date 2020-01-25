import React from 'react';
import './Scroll.css';

const Scroll = ({ children }) => {
    return (
        <div
            id="Scroll"
            className="pa3 ma3"
            style={{
                overflowY: 'scroll',
                border: '2px solid #A3DBDE',
                height: '800px'
            }}
        >
            {children}
        </div>
    );
}

export default Scroll;