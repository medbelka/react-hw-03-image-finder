import styles from 'components/ImageGalleryItem/ImageGalleryItem.module.css'

export const ImageGalleryItem = ({options}) => {
    return <li className={styles.ImageGalleryItem}>
            <img className={styles.ImageGalleryItemImage}
                src={options.webformatURL}
                alt={options.tags} />
           </li>
}