import styles from './Dashboard.module.css';
import Header from '../Layout/Header/Header';
import Body from '../Layout/Body/Body';

function Dashboard() {

    return(
        <main className={styles.dashboard}>
            <Header />
            <Body />
        </main>
    );
}

export default Dashboard