//modules
import {useState, useContext, useEffect} from 'react'

//styles
import './Form.css'

//context
import { CharactersContext } from '../../context/CharactersProvider'

const Form = () => {
    const [character, setCharacter] = useState('')
    const {getCharacters} = useContext(CharactersContext)

    const handleOnChange = (e) => {
        setCharacter(e.target.value)
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()
        const alert = document.getElementById('alert')

        if(character === "" || character === " "){
            alert.classList.toggle('active')

            setTimeout(() => {
                alert.classList.remove('active')
            }, 5000);
        }

        getCharacters(`https://rickandmortyapi.com/api/character/?name=${character}`)
    }

    useEffect(() => {
        if(character === ""){
            getCharacters()
        }
    }, [character, getCharacters])

    return (
        <form className = "form" onSubmit = {handleOnSubmit}>
            <div className = "form__group">
                <input 
                    placeholder = "Search Character"
                    name = "Character"
                    value = {character}
                    onChange = {handleOnChange}
                    className = "form__input"
                />

                <button className = "form__button" type = "submit">
                    Search
                </button>

                <p className = "form__alert" id = "alert">
                    Please write the name of a character
                </p>
            </div>
        </form>
    )
}

export default Form