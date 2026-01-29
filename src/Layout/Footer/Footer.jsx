import styles from './Footer.module.css';
import logo_white from '/src/assets/icons/logo-white.svg';
import facebook_icon from '/src/assets/icons/icon-facebook.svg';
import twitter_icon from '/src/assets/icons/icon-twitter.svg';
import pinterest_icon from '/src/assets/icons/icon-pinterest.svg';
import instagram_icon from '/src/assets/icons/icon-instagram.svg';

function Footer() {

    const FOOTER_INFO = [
        {
            footerHeading: "Features",
            items: [
                "Link Shortening",
                "Branded Links",
                "Analytics"
            ]
        },
        {
            footerHeading: "Resources",
            items: [
                "Blog",
                "Developer",
                "Support"
            ]
        },
        {
            footerHeading: "Company",
            items: [
                "About",
                "Our Team",
                "Careers",
                "Contact"
            ]
        }
    ];

    const SOCIALS = [
        {
            id: "facebook",
            icon: facebook_icon
        },
        {
            id: "twitter",
            icon: twitter_icon
        },
        {
            id: "pinterest",
            icon: pinterest_icon
        },
        {
            id: "instagram",
            icon: instagram_icon
        }
    ];


    return(
        <footer className={styles.footer}>
            {/* Logo */}
            <img src={logo_white} alt="logo" />

            <div className={styles.footer_container_wrapper}>
                {/* Footer Info */}
                {FOOTER_INFO.map(({ footerHeading, items }) => {
                    return(
                        <div className={styles.footerInfo_container} key={footerHeading}>
                            <p className={styles.footerInfo_heading}>{footerHeading}</p>
                            <ul className={styles.footerInfo_list}>
                                {items.map((item) => {
                                    return(
                                        <li className={styles.footerInfo_item} key={item}>{item}</li>
                                    );
                                })}
                            </ul>
                        </div>
                    );
                })}
            </div>

            {/* Socials */}
            <div className={styles.socials_container}>
                {SOCIALS.map(({ icon, id }) => {
                    return(
                        <img src={icon} alt="social" className={styles.socials} key={id} />
                    );
                })}
            </div>
        </footer>
    );
}

export default Footer