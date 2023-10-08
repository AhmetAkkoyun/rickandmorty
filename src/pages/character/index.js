import React, { useState, useEffect } from "react";
import CharCard from "../../components/CharCard";
import "./index.scss";
import { getCharacters } from "../../service/character";

const CharacterPage = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        getCharacters()
            .then((response) => {
                setCharacters(response.data.results);
            })
            .catch((error) => {
                console.error("Karakter verileri alınamadı:", error);
            });
    }, []);

    return (
        <div className="character-page">
            {characters.map((character) => (
                <CharCard key={character.id} character={character} />
            ))}
        </div>
    );
};

export default CharacterPage;
