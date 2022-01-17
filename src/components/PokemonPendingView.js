import { ImSpinner } from 'react-icons/im';
import pendingImage from './pending.png';
import PokemonDataView from './PokemonDataView';

const styles = {
  spinner: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 10,
    fontSize: 24,
  },
};

export default function PokemonPendingView({ pokemonName }) {
  const pokemon = {
    name: pokemonName,
    sprites: {
      other: {
        'official-artwork': {
          front_default: pendingImage,
        },
      },
    },
    stats: [],
  };

  return (
    <div role="alert">
      <div style={styles.spinner}>
        <ImSpinner size="32" className="icon-spin" />
        Loading...
      </div>
      <PokemonDataView pokemon={pokemon} />
    </div>
  );
}
