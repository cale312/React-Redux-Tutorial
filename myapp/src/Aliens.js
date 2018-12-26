import React from 'react';

const Aliens = (props) => {
    const { aliens, deleteAlien } = props;
    const alienList = aliens.map(alien => {
        return alien.age > 1 ? (
            <div className="alien" key={alien.id}>
                <div>Name: { alien.name }</div>
                <div>Age: { alien.age }</div>
                <div>Rank: { alien.rank }</div>
                <button onClick={ () => { deleteAlien(alien.id) } }>Delete Alien</button>
                <br/><br/>
            </div>
        ) : null;
    });

    return( <div className="alien-list"> { alienList } </div> )
}

export default Aliens;
