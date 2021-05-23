import {createContext, useState, useEffect} from 'react'

export const CharactersContext = createContext()

export const CharactersProvider = ({children}) => {
    const [characters, setCharacters] = useState([])

    const getCharacters = (url = 'https://rickandmortyapi.com/api/character') => {
        fetch(url)
        .then(response => response.json())
        .then(response => {
            setCharacters(response.results)
        })
    }

    useEffect(() => {
        getCharacters()
    }, [])

    return(
        <CharactersContext.Provider value = {{characters, getCharacters}}>
            {children}
        </CharactersContext.Provider>
    )
}