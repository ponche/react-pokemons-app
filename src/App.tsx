import React, { useState } from 'react';
import { POKEMONS } from './models/mock-pokemon';

const App: React.FC = () => {
    const [name, setName] = useState<String>('React');
    const [nbPokemons, setNbPokemons] = useState<Number>(POKEMONS.length)

    return (
        <div>
            <h1>Hello, {name} !</h1>
            <p>il y a {nbPokemons} dans le pokédex</p>
        </div>
    )
};

export default App;