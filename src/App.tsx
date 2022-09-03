import React, { useState, useEffect } from 'react';
import { POKEMONS } from './models/mock-pokemon';
import Pokemon from './models/pokemon';

const App: React.FC = () => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    // déclaration du hook effet
    useEffect(() => {
        setPokemons(POKEMONS)
    }, []);

    return (
        <div>
            <h1 className='center'>Pokédex</h1>
            <p>il y a {pokemons.length} pokémons dans le pokédex</p>

            <div className='container'>
                <div className='row'>
                    {pokemons.map(pokemon => (
                        <div key={pokemon.name} className="card col m4">
                            <div className='card horizontal'>
                                <div className='card-image'>
                                    <img src={pokemon.picture} alt={pokemon.name}></img>
                                    <h2>{pokemon.name}</h2>
                                </div>
                                <div className='card-stacked'>
                                    <p>{pokemon.name}</p>
                                    <p><small>{pokemon.created.toString()}</small></p>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>

            </div>
        </div>
    )
};

export default App;