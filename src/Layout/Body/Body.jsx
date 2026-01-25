import styles from './Body.module.css';
import illustration_working from '/src/assets/icons/illustration-working.svg';
import LinkShortener from '../../Features/LinkShortener';

function Body() {

    return(
        <section className={styles.body}>

            {/* illustration img */}
            <div className={styles.illustration_img_wrapper}>
                <img
                    className={styles.illustration}
                    src={illustration_working} 
                    alt="illustration working" 
                />
            </div>

            {/* Introduction */}
            <article className={styles.introduction}>
                <h1 className={styles.introduction__title}>More than just shorter links</h1>
                <p className={styles.introduction__description}>
                    Build your brand's recognition and get detailed
                    insights on how your links are performing.
                </p>
                <button className={styles.getStarted_BTN}>Get Started</button>
            </article>

            {/* Link Input */}
            <LinkShortener />

        </section>
    );
}

export default Body