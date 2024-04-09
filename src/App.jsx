import './App.css';
import useFecthCharacters from './hooks/useFecthCharacters';

function App() {
  const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/1';
  const urlRick = 'https://rickandmortyapi.com/api/character/1';
  const pokemonData= useFecthCharacters(urlPokemon);
const RickAndMortyCharacter = useFecthCharacters(urlRick)
  return (
    <>
    <div className="card">
      <h1>Información de Pokemon</h1>
      {pokemonData.loading && <p>Loading...</p>}
      {pokemonData.error && <p>Error: {pokemonData.error.message}</p>}
      {pokemonData.characters && (
        <div>
          <p>{pokemonData.characters.name}</p>
          <img src={pokemonData.characters.sprites.front_default} alt="Pokemon" />
    </div>
    )}
    </div>
    <div className="card">
      <h1>Información de Ricky Morti</h1>
      {RickAndMortyCharacter.loading && <p>Loading...</p>}
      {RickAndMortyCharacter.error && <p>Error: {RickAndMortyCharacter.error.message}</p>}
      {RickAndMortyCharacter.characters && (
        <div>
          <p>{RickAndMortyCharacter.characters.name}</p>
          <img src={RickAndMortyCharacter.characters.image} alt="Ricky" />
    </div>
    )}
    </div>
    </>
  )
}

export default App;
/*import useFetchCharacter from './hooks/useFecthCharacters.js';
import './App.css';
import CardApp from './components/CardApp.jsx';

function App() {
  const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/1';
  const urlRick = 'https://rickandmortyapi.com/api/character/1';
  const { data: pokemon, loading: pokemonLoading} = useFetchCharacter(urlPokemon)
  const { data: rick, loading: rickLoading } = useFetchCharacter(urlRick)
  const isLoading = <p>Loading</p>
  


  return (
    <>
    
    {pokemonLoading 
      ? (isLoading) 
      : (<CardApp 
          title='Personaje Pokemon'
          name={pokemon.name}
          image={pokemon.sprites.other.dream_world.front_default}
          />)
    }
    {rickLoading 
      ? (isLoading) 
      : (<CardApp 
          title='Personaje Rick and Morty'
          name={rick.name}
          image={rick.image}
        />)
    }    
    </>
    );
}

export default App;
*/
