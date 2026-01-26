import styles from './Header.module.css';
import logo_black from '/src/assets/icons/logo-black.svg';
import hamburg_menu from '/src/assets/icons/three-lines.png';

function Heading() {

    return(
        <header className={styles.header}>
            <img className={styles.logo} src={logo_black} alt="logo" />
            <img className={styles.menu} src={hamburg_menu} alt="menu" />
        </header>
    );
}

export default Heading