import { Component } from 'react';

export default class PokemonInfo extends Component {
  state = {
    pokemon: null,
    loading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.pokemonName;
    const nextName = this.props.pokemonName;

    if (prevName !== nextName) {
      console.log('Changed pokemon name');

      this.setState({ loading: true });

      fetch(`https://pokeapi.co/api/v2/pokemon/${nextName}`)
        .then(res => res.json())
        .then(pokemon => this.setState({ pokemon }))
        .finally(() => this.setState({ loading: false }));
    }
  }

  render() {
    const { pokemon, loading } = this.state;
    const { pokemonName } = this.props;

    return (
      <div>
        <h1>PakemonInfo</h1>
        {loading && <div>Loading...</div>}
        {!pokemonName && <div>Enter pokemon name</div>}
        {pokemon && <div>{pokemon.name}</div>}
      </div>
    );
  }
}
