import styles from './imageSlider.module.css'
import { useState } from 'react';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';

export default function ImageSlider({slides = []}) {

    const [current, setCurrent] = useState(0);
    const length = slides.length;

    function prevSlide(){
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    function nextSlide(){
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    return (
        <section className={styles.slider}>
            <FaArrowAltCircleLeft className={styles.leftArrow} onClick={prevSlide} />
            <FaArrowAltCircleRight className={styles.rightArrow} onClick={nextSlide} />
            {
                slides.map((slide, index) => {
                    return (
                        <div className={index === current ? `${styles.slide} ${styles.active}` : styles.slide} key={index}>
                            {index === current && (<img src={slide.image} alt="asoidjisoad" className={styles.image} />)}
                            
                        </div>
                    )
                })
            }
        </section>
    )
}