import React from 'react'
import { Link } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import Image from '../Helper/Image';
import PhotoComments from './PhotoComments';
import styles from './PhotoContent.module.css'
import PhotoDelete from './PhotoDelete';

const PhotoContent = ({ data, single }) => {


  const user = React.useContext(UserContext);
  const { photo, comments } = data;



  return (
    <div className={`${styles.photo} ${single ? styles.single : ''}`}>
      <div className={styles.img}>
        <Image src={'http://' + photo.src} alt={photo.title} />

      </div>
      <div className={styles.detalhes}>
        <div>
          <p className={styles.autor}>
            {user.data && user.data.username === photo.author ? <PhotoDelete id={photo.id} /> : <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>}
            <span className={styles.visualizacoes}>{photo.acessos}</span>
          </p>
          <h1 className='title'>
            <Link to={`foto/${photo.id}`}>{photo.title}</Link>

          </h1>

          <ul className={styles.atributos}>
            <li> {photo.peso} Kg</li>
            <li> {photo.idade} anos</li>

          </ul>
        </div>
      </div>


      <PhotoComments single={single} id={photo.id} comments={comments} />

    </div>
  )
}

export default PhotoContent