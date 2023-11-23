import React from 'react'
import Image from '../Helper/Image';
import styles from './FeedPhotosItem.module.css';

const FeedPhotosItem = ({ photo, setModalPhoto }) => {

  console.log(photo)

  function handleClick(e) {
    setModalPhoto(photo);
  }

  return (
    <li className={styles.photo} onClick={handleClick}>


      <Image className={styles.image} src={'//' + photo.src} alt={photo.title} />
      <span className={styles.visualizacao}>{photo.acessos}</span>
    </li>
  )
}

export default FeedPhotosItem