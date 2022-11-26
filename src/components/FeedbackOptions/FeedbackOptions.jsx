import React from 'react';
import styles from '../Feedback/Feedback.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, plusOneFeedback }) => {
  return (
    <ul className={styles.buttonList}>
      {options.map(option => {
        // console.log(option);
        return (
          <li className={styles.oneButtonContainer} key={option}>
            <button
              type="button"
              onClick={() => plusOneFeedback(option)}
              className={styles.button}
            >
              {option}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  plusOneFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
