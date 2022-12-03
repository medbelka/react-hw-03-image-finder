import React, { Component } from 'react';
import styles from 'components/ImageGallery/ImageGallery.module.css';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import Modal from '../Modal/Modal';


export default class ImageGallery extends Component {
    state = {
        showModal: false,
    }

    toggleModal = () => {
        this.setState(({showModal}) => ({
          showModal: !showModal,
        }))
      }
    
    handleImageClick = (id) => {
        console.log(id)
    }

    render() {
        const { showModal } = this.state;
    return (
        <>
            <ul className={styles.ImageGallery}>
            {this.props.items.map(item => 
                (<ImageGalleryItem 
                        options={item}
                        key={item.id}
                        onClick={this.handleImageClick}
                    />
                ))}
            </ul>
            {showModal && (
             <Modal items={this.props.items} onClose={this.toggleModal}/>
            )}
        </>)
    }
}