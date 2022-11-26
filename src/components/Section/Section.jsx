import styles from '../Feedback/Feedback.module.css';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <section>
      <h3 className={styles.mainFeedbackText}>{title}</h3>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
