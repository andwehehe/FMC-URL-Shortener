import styles from './LinkShortener.module.css';
import bg_shorten_mobile from '../assets/icons/bg-shorten-mobile.svg';

function LinkShortener() {

    return(
        <form className={styles.linkInput_wrapper} id='link_shortener'>
            <img 
                className={styles.input_bg_decor}
                src={bg_shorten_mobile} 
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
        </form>
    );
}

export default LinkShortener