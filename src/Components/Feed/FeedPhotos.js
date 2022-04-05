import React, { useEffect } from 'react'
import { PHOTOS_GET } from '../../api';
import useFetch from '../../Hooks/useFetch'
import FeedPhotosItem from './FeedPhotosItem'
import Error from '../Helper/Error'
import Loading from '../Helper/Loading'
import styles from './FeedPhotos.module.css';

const FeedPhotos = () => {

  const {data, error, loading, request} = useFetch();

  useEffect(()=> {

    async function getPhoto() {
 
      const {url, options} = PHOTOS_GET({page:1, total:6, user: 0});
      
      const {response, json} = await request(url, options)
    }
    
    getPhoto();
    
  }, [request])
  // console.log(data) ;

  if(error) return <Error error={error} /> 
  if(loading) return <Loading />
  
  if(data){
  return (
    <ul className={`${styles.feed} animeLeft`}>
      
      {data.map((photo) => {
        
        // console.log(foto);
        return <FeedPhotosItem key={photo.id} photo={photo}/>
      })}
    </ul>
  )
} else{
  return null;
}
}

export default FeedPhotos