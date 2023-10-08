import axios from "axios";

export function getCharacters() {
    return axios.get("https://rickandmortyapi.com/api/character/?page=2");
}
