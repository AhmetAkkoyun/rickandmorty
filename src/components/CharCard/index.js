import React, { useState } from 'react';
import './index.scss';

const CharCard = ({ character }) => {
    const getStatusDotClassName = (status) => {
        if (status === 'Alive') {
            return 'status-dot alive';
        } else if (status === 'Dead') {
            return 'status-dot dead';
        } else if (status === 'unknown') {
            return 'status-dot unknown';
        } else {
            return 'status-dot';
        }
    };

    const [isCardShrunk, setIsCardShrunk] = useState(false);

    const handleCardClick = () => {
        setIsCardShrunk(true);
    };

    return (
        <div className={`charCard ${isCardShrunk ? 'shrink-effect' : ''}`} onClick={handleCardClick}>
            <div className="char-image">
                <img src={character.image} alt={character.name} />
            </div>
            <div className="char-info">
                <h2>
                    <a
                        href={`https://rickandmortyapi.com/api/character/${character.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {character.name}
                    </a>
                </h2>
                <div className="status-row">
                    <div className={getStatusDotClassName(character.status)}></div>
                    <p>
                        {character.status} - {character.species}
                    </p>
                </div>
                <div className="info-row">
                    <div>
                        <p>Last known location:</p>
                        <p>
                            <a
                                href={`${character.location.url}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {character.location.name}
                            </a>
                        </p>
                    </div>
                    <div>
                        <p>First seen in:</p>
                        <p>
                            <a
                                href={`${character.episode}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {character.origin.name}
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CharCard;
