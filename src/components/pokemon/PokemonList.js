import React, {Component} from 'react';
import PokemonCard from './PokemonCard';
import axios from 'axios';

class PokemonList extends Component {

    state = {
        url: "https://pokeapi.co/api/v2/pokemon/",
        pokemon: null
    };

    async componentDidMount() {
        const res = await axios.get(this.state.url);
        this.setState({ pokemon: res.data["results"] })
    }

    render() {
        return (
            <div>
            {
                this.state.pokemon ? (
                    <div className={'row'}>
                        {this.state.pokemon.map((pokemon) => (
                            <PokemonCard
                            name={pokemon.name}
                            key={pokemon.name}
                            url={pokemon.url}>
                            </PokemonCard>
                        ))}
                    </div>
                ) : (
                    <h1>Loading Pokemon</h1>
                )
            }
            </div>
        );
    }
}

export default PokemonList;