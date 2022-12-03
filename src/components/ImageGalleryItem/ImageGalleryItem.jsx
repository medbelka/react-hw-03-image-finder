import styles from 'components/ImageGalleryItem/ImageGalleryItem.module.css'


export const ImageGalleryItem = ({options}) => {
    const onImageClick = e => {
        console.log(e.target.id)
        return e.target.id;
        // this.props.onClick(selectedImage)
    }

    return <li className={styles.ImageGalleryItem} >
            <img className={styles.ImageGalleryItemImage}
                src={options.webformatURL}
                alt={options.tags} 
                id={options.id}
                onClick={onImageClick}/>
           </li>
}