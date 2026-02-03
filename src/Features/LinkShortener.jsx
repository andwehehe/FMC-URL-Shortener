import styles from './LinkShortener.module.css';
import bg_shorten_mobile from '/src/assets/icons/bg-shorten-mobile.svg';
import bg_shorten_desktop from '/src/assets/icons/bg-shorten-desktop.svg';

function LinkShortener({ props }) {

    const { isMobile, longUrl, loading, shortenUrl, setLongUrl, shortenedUrl } = props;

    const handleChange = (e) => {
        setLongUrl(e.target.value)
        // if( shortenedUrl.length >=0 && shortenedUrl[shortenedUrl.length-1].longUrl === e.target.value) return;
        
    };

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
                value={longUrl}
                onChange={handleChange}
            />

            <button className={styles.shortener_BTN} type='submit' onClick={shortenUrl} disabled={loading || !longUrl}>
                {loading ? "Shortening..." : "Shorten It!"}
            </button>

        </div>
    );
}

export default LinkShortener