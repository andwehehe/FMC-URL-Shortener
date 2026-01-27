import styles from './Dashboard.module.css';
import Header from '../Layout/Header/Header';
import Body from '../Layout/Body/Body';
import Footer from '../Layout/Footer/Footer';
import { useRef } from 'react';

function Dashboard() {

    const dialogRef = useRef(null);
    const openMenu = () => {
        dialogRef.current.showModal();
    };

    const closeMenu = () => {
        dialogRef.current.close();
    };

    return(
        <main className={styles.dashboard}>
            <Header openMenu={openMenu} />
            <Body props={{ closeMenu, dialogRef }} />
            <Footer />
        </main>
    );
}

export default Dashboard