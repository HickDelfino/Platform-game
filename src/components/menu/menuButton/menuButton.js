import { Link } from 'react-router-dom';
import styles from './menuButton.module.css';

export default function MenuButton({ href, children }) {

    return (
        <Link to={href}>
            <button className={styles.button} onClick={(event) => {
                const button = event.currentTarget;
                const circle = document.createElement("span");
                const diameter = Math.max(button.clientWidth, button.clientHeight);
                const radius = diameter / 2;
                circle.style.width = circle.style.height = `${diameter}px`;
                circle.style.left = `${event.clientX - (button.offsetLeft + radius)}px`;
                circle.style.top = `${event.clientY - (button.offsetTop + radius)}px`;
                circle.classList.add(styles.ripple);
                const ripple = button.getElementsByClassName(styles.ripple)[0];
                if (ripple) {
                    ripple.remove();
                }
                button.appendChild(circle);
            }}>{children}</button>
        </Link>
    )
}