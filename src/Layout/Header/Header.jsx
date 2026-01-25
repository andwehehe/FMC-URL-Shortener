import styles from './Header.module.css';
import logo from '/src/assets/icons/logo.svg';
import hamburg_menu from '/src/assets/icons/three-lines.png';

function Heading() {

    return(
        <header className={styles.header}>
            <img className={styles.logo} src={logo} alt="logo" />
            <img className={styles.menu} src={hamburg_menu} alt="menu" />
        </header>
    );
}

export default Heading