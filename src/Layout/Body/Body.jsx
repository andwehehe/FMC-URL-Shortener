import styles from './Body.module.css';
import illustration_working from '/src/assets/icons/illustration-working.svg';
import brand_recognition_icon from '/src/assets/icons/icon-brand-recognition.svg';
import detailed_records_icon from '/src/assets/icons/icon-detailed-records.svg';
import fully_customizable_icon from '/src/assets/icons/icon-fully-customizable.svg';
import promotion_bg_mobile from '/src/assets/icons/bg-boost-mobile.svg';
import close_icon from '/src/assets/icons/close.png';
import LinkShortener from '../../Features/LinkShortener';

const STATS_INFO = [
    {
        img: brand_recognition_icon,
        title: "Brand Recognition",
        description: "Boost you brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.",
        key: "stats-info-1"
    },
    {
        img: detailed_records_icon,
        title: "Detailed Records",
        description: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
        key: "stats-info-2"
    },
    {
        img: fully_customizable_icon,
        title: "Fully Customizable",
        description: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
        key: "stats-info-3"
    }
];

function Body({ props }) {

    const { closeMenu, dialogRef } = props;

    return(
        <>
            <section className={styles.body}>

                {/* Introduction */}
                <article className={styles.introduction}>
                    
                    {/* illustration img */}
                    <div className={styles.illustration_img_wrapper}>
                        <img
                            className={styles.illustration}
                            src={illustration_working} 
                            alt="illustration working" 
                        />
                    </div>

                    <article className={styles.introduction__component}>
                        <h1 className={styles.introduction__title}>More than just shorter links</h1>
                        <p className={styles.introduction__description}>
                            Build your brand's recognition and get detailed
                            insights on how your links are performing.
                        </p>
                        <button className={styles.getStarted_BTN}>Get Started</button>
                    </article>
                </article>
                
            {/* lower half bg */}
            <div className={styles.lowerBG}>
                {/* Link Input */}
                <div className={styles.input_wrapper}>
                    <LinkShortener />
                </div>

                {/* Additional Info */}
                <div className={styles.extraInfo}>
                    <h2 className={styles.extraInfo__title}>
                        Advanced Statistics
                    </h2>
                    <p className={styles.extraInfo__description}>
                        Track how your links are performing across the web with our
                        advanced statistics dashboard.
                    </p>
                </div>

                <section className={styles.additionalInfo__wrapper}>
                    <hr className={styles.connector_HR} />
                    {STATS_INFO.map(({ img, title, description, key }) => {
                        return(
                            <article className={styles.additionalInfo__container} key={key}>
                                <div className={styles.additionalInfo__img_container}>
                                    <img src={img} alt="title" />
                                </div>
                                <h3 className={styles.additionalInfo__title}>{title}</h3>
                                <p className={styles.additionalInfo__description}>{description}</p>
                            </article>
                        );
                    })}
                </section>
            </div>

            </section>

            {/* Promotion */}
            <div className={styles.promotion_container}>
                <img className={styles.promotion_BG} src={promotion_bg_mobile} alt="background style" />
                <h2 className={styles.promotion}>Boost your links today</h2>
                <button className={styles.getStarted_BTN}>Get Started</button>
            </div>

            {/* Overlay menu */}
            <dialog className={styles.overlay_menu} ref={dialogRef}>
                <img 
                    className={styles.close_icon} 
                    src={close_icon} 
                    alt="close" 
                    onClick={closeMenu}
                />
                <nav className={styles.menu_nav}>
                    <ul>
                        <li className={styles.nav_item}>Features</li>
                        <li className={styles.nav_item}>Pricing</li>
                        <li className={styles.nav_item}>Resources</li>
                    </ul>
                </nav>

                <hr className={styles.nav_hr}/>

                <div className={styles.register_account}>
                    <button onClick={closeMenu}>Login</button>
                    <button onClick={closeMenu}>Sign Up</button>
                </div>
            </dialog>
        </>
    );
}

export default Body