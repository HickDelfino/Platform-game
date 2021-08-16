import styles from './modal.module.css';

export default function Modal({children}){
    return(
        <div className={styles.modalBackground}>
            {children}
        </div>
    )
}