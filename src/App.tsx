import React, { useState } from 'react';
import { POKEMONS } from './models/mock-pokemon';
import Pokemon from './models/pokemon';

const App: React.FC = () => {
    const [pokemon] = useState<Pokemon[]>(POKEMONS);

    return (
        <div>
            <h1>Pokédex</h1>
            <p>il y a {pokemon.length} pokémons dans la pokédex</p>
        </div>
    )
};

export default App;