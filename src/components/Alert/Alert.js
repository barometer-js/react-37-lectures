import PropTypes from 'prop-types';
import s from './Alert.module.css';

console.log(s);

function Alert({ text, type }) {
  return (
    <p role="alert" className={s[type]}>
      {text}
    </p>
  );
}

Alert.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['success', 'warning', 'error']).isRequired,
};

export default Alert;
