import styles from '../Feedback/Feedback.module.css';
import PropTypes from 'prop-types';

const Notifications = ({ message }) => {
  return <p className={styles.mainFeedbackText}>{message}</p>;
};

Notifications.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notifications;
