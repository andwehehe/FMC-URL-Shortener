import styles from './LinkShortener.module.css';
import bg_shorten_mobile from '/src/assets/icons/bg-shorten-mobile.svg';
import bg_shorten_desktop from '/src/assets/icons/bg-shorten-desktop.svg';
import { useState, useEffect } from 'react';

function LinkShortener() {

    const [ isMobile, setIsMobile ] = useState(window.innerWidth < 953);

    const handleResize = () => {
        setIsMobile(window.innerWidth < 953);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return() => window.removeEventListener('resize', handleResize);
    }, [])

    return(
        <div className={styles.linkInput_wrapper}>
            <img 
                className={styles.input_bg_decor}
                src={isMobile ? bg_shorten_mobile : bg_shorten_desktop} 
                alt="background style" 
            />

            <input
                className={styles.link_input} 
                type="url" 
                name='url-input'
                placeholder='Shorten a link here...' 
            />

            <button className={styles.shortener_BTN} type='submit'>
                Shorten It!
            </button>
        </div>
    );
}

export default LinkShortener