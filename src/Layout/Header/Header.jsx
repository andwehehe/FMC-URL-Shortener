import styles from './Header.module.css';
import logo_black from '/src/assets/icons/logo-black.svg';
import hamburg_menu from '/src/assets/icons/three-lines.png';

function Heading({ openMenu }) {

    return(
        <header className={styles.header}>
            <div className={styles.nav__menu_wrapper}>
                <img className={styles.logo} src={logo_black} alt="logo" />
                <nav className={styles.menu_desktop}>
                    <ul>
                        <li className={styles.nav__item}>Features</li>
                        <li className={styles.nav__item}>Pricing</li>
                        <li className={styles.nav__item}>Resources</li>
                    </ul>
                </nav>
            </div>

            <div className={styles.register_account_desktop}>
                <img className={styles.menu_mobile} src={hamburg_menu} alt="menu" onClick={openMenu}/>
                <div className={styles.register_account_buttons}>
                    <button>Login</button>
                    <button>Sign Up</button>
                </div>
            </div>
        </header>
    );
}

export default Heading