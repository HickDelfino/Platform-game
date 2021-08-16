import styles from "./menuButtonsList.module.css";
import MenuButton from "../menuButton/menuButton";

export default function MenuButtonsList() {
    return (
        <div className={styles.navlink}>
            <MenuButton href="/promo">Promoção</MenuButton>
            <MenuButton href="/">Categorias</MenuButton>
            <MenuButton href="/">Noticias</MenuButton>
            <MenuButton href="/">Sobre nós</MenuButton>
        </div>
    )
}