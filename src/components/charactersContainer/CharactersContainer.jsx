//modules
import {useContext} from 'react'

//styles
import './CharactersContainer.css'

//context
import { CharactersContext } from '../../context/CharactersProvider'

//component
import Character from '../card/Character'

const CharactersContainer = () => {
    const {characters} = useContext(CharactersContext)

    return (
        <main className = "charactersContainer">
            {
                characters.map(data => (
                    <Character 
                        key = {data.name}
                        name = {data.name}
                        img = {data.image}
                        status = {data.status} 
                        specie = {data.species}
                        lastLocation = {data.location.name}
                        firstSeen = {data.origin.name}
                    />
                ))
            }
        </main>
    )
}

export default CharactersContainer