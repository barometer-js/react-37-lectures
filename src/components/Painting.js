import PropTypes from 'prop-types';
import defaultImg from './default.jpg';

function Painting(props) {
  const {
    imageUrl = defaultImg,
    title,
    author = 'no name',
    profileUrl,
    price,
    quantity,
  } = props;
  return (
    <div>
      <img src={imageUrl} alt={title} width="480" />
      <h2>{title}</h2>
      <p>
        Author: <a href={profileUrl}>{author}</a>
      </p>
      <p>Price: {price}credits</p>
      <p>Available: {quantity < 10 ? 'runs out' : 'is in stock'}</p>
      <button type="button">Add to bag</button>
    </div>
  );
}

Painting.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  profileUrl: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default Painting;
