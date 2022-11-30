// import * as basicLightbox from 'basiclightbox';
import styles from 'components/Modal/Modal.module.css'

// const instance = basicLightbox.create(`
//     <img src="assets/images/image.png" width="800" height="600">
// `)

// instance.show()
export const Modal = () => {
    return <div className={styles.Overlay}>
                <div className={styles.Modal}>
                <img 
                    src="" 
                    alt="" />
                </div>
            </div>
}