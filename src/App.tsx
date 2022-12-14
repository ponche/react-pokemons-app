import React from 'react';
import PokemonList from './pages/pokemon-list';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import PokemonsDetail from './pages/pokemon-detail';
import PageNotFound from './pages/page-not-found';
import PokemonEdit from './pages/pokemon-edit';

const App: React.FC = () => {
  

    return (
        <Router>
            <div>
                {/* La barre de navigation commun à toutes les pages */}
                <nav>
                    <div className="nav-wrapper teal">
                        <Link to="/" className='brand-logo center'>Pokédex</Link>
                    </div>
                </nav>
                {/* Le système de gestion des routes de notre application */}
                <Switch>
                    <Route exact path="/" component={PokemonList} />
                    <Route exact path="/pokemons" component={PokemonList} />
                    <Route exact path="/pokemons/edit/:id" component={PokemonEdit} />
                    <Route path="/pokemons/:id" component={PokemonsDetail} />
                    <Route component={PageNotFound} />
                </Switch>
            </div>
        </Router>
    )
};

export default App;