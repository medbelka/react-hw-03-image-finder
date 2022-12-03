// import * as basicLightbox from 'basiclightbox';
import { Component } from 'react';
import { createPortal } from 'react-dom';
import styles from 'components/Modal/Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown)
    }

    componentWillUnmount(){
        window.removeEventListener('keydown', this.handleKeyDown)
    }

    handleKeyDown = e => {
        if (e.code === 'Escape') {
            this.props.onClose()
        }
    }

    handleBackdropClick = event => {
        if(event.currentTarget === event.target) {
            this.props.onClose()
        }
    }

    render() {
    return createPortal(
        <div className={styles.Overlay} onClick={this.handleBackdropClick}>
            <div className={styles.Modal}>
            {/* {this.props.items} */}
            <img 
                src=""
                alt=""
                    // src={item.largeImageURL}
                    // alt={item.tag} 
            />
            </div>
        </div>, 
        modalRoot
        );
    }
}
// const instance = basicLightbox.create(`
//     <img src="assets/images/image.png" width="800" height="600">
// `)

// instance.show()