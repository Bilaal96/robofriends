import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    //? Test ErrorBoundary Component
    // if (true) {
    //     throw new Error('Nooo!');
    // }

    return (
        <section id="CardList">
            {
                robots.map((user) => {
                    return (
                        <Card
                            key={user.id}
                            id={user.id}
                            name={user.name}
                            username={user.username}
                            email={user.email}
                        />
                    );
                })
            }
        </section>

    );
}

export default CardList;