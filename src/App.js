import './App.css'

//components
import Header from './components/header/Header'
import Form from './components/form/Form'
import CharactersContainer from './components/charactersContainer/CharactersContainer'

//provider
import { CharactersProvider } from './context/CharactersProvider'

const App = () => {
  return (
    <CharactersProvider>
      <Header />
      <Form />

      <CharactersContainer />
    </CharactersProvider>
  )
}

export default App