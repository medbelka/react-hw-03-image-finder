import styles from 'components/ImageGallery/ImageGallery.module.css';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = () => {
    return (
        <>
        <ul className={styles.ImageGallery}>
            <ImageGalleryItem />
        </ul>
        </>
        )
}