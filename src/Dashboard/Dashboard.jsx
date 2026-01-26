import styles from './Dashboard.module.css';
import Header from '../Layout/Header/Header';
import Body from '../Layout/Body/Body';
import Footer from '../Layout/Footer/Footer';

function Dashboard() {

    return(
        <main className={styles.dashboard}>
            <Header />
            <Body />
            <Footer />
        </main>
    );
}

export default Dashboard