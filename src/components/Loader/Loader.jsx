import { InfinitySpin } from 'react-loader-spinner';
import styles from 'components/Loader/Loader.module.css';
// import { ImageGallery } from 'components/ImageGallery/ImageGallery';

export const Loader = (items) => {
    // const items = {
    //     id,
    //     webFormatURL,
    //     tags,
    // }
    // const parsedItems = items.map(item => {
    //     return {id: item.id,
    //       webformatURL: item.webformatURL, 
    //       largeImageURL: item.largeImageURL,
    //       tags: item.tags,
    //     }
    //   } )
return (
    <div>
        <div className={styles.LoaderContainer}>
            <InfinitySpin className={styles.LoaderIcon}
            width='200'
            color="#325ca8"
            />
        </div>
        {/* <ImageGallery items={parsedItems}/> */}
    </div>
)
}