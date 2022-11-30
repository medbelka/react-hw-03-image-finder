import styles from 'components/Searchbar/Searchbar.module.css'

export const Searchbar = ({ children, onSubmit }) => {
    return (
        <header className={styles.Searchbar}>
        <form className={styles.SearchForm}>
        <button type="submit" 
                className={styles.SearchFormButton}>
            <span className={styles.SearchFormButtonLabel}></span>{children}
        </button>

        <input
            className={styles.SearchFormInput}
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
        />
        </form>
        </header>
        )
    }