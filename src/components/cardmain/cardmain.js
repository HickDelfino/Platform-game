import styles from "./cardmain.module.css";

export default function CardMain({img, title, description}){
    return(
        <div className={styles.cardContainer}>
            <img src={img} className={styles.backgroundFormat} />
            <div className={styles.descriptionContainer}>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
}