import styles from './reviewCard.module.css';
import Speech from 'react-speech';

export default function ReviewCard({review}){
    return (
        <div className={styles.reviewContainer}>
            <h4 className={styles.reviewAuthor}>{review.author}</h4>
            <span className={styles.reviewAvaliation}>Aval: {review.avaliation}</span>
            <p className={styles.reviewDescription}>{review.review}</p>
            <Speech text={review.review} />
        </div>
    )
}