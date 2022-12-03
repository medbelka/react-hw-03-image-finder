import styles from 'components/Button/Button.module.css';

export const Button = (onClick) => {
    return (
            <div className={styles.ButtonContainer}>
                <button 
                    type='button' 
                    className={styles.Button}
                    onClick={(e)=>onClick(e)}>
                        Load more
                </button>
            </div>
    )
}