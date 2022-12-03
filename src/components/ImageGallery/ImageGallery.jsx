import styles from 'components/ImageGallery/ImageGallery.module.css';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({items}) => {
    return (
        <>
        <ul className={styles.ImageGallery}>
        {items.map(item => 
            (   <ImageGalleryItem 
                    options={item}
                    key={item.id}
                />
            ))}
        </ul>
        </>
        )
}