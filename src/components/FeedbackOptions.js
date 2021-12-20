import style from './Feedback.module.css';
import PropTypes from 'prop-types';
// import styles from './Feedback.module.css'
// import { Button } from 'react-bootstrap';
// import 'bootstrap';

const FeedbackOptions = ({onClick}) => (
    <div className={style.feedbackButton}>
            <button type='button' onClick={() => onClick("good")} className={style.buttons}>Good</button>
            <button type='button' onClick={() => onClick("neutral")} className={style.buttons}>Neutral</button>
            <button type='button' onClick={() => onClick("bad")} className={style.buttons}>Bad</button>
        </div>
    
)

 

FeedbackOptions.propTypes = {
    onGood: PropTypes.func.isRequired,
    onNeutral: PropTypes.func.isRequired,
    onBad: PropTypes.func.isRequired
}



export default FeedbackOptions;