import React, { useEffect } from 'react'
import { PHOTOS_GET } from '../../api';
import useFetch from '../../Hooks/useFetch'
import FeedPhotosItem from './FeedPhotosItem'
import Error from '../Helper/Error'
import Loading from '../Helper/Loading'
import styles from './FeedPhotos.module.css';

const FeedPhotos = ({ setInfinite, page = 1, user = 0, setModalPhoto }) => {

  const { data, error, loading, request } = useFetch();

  useEffect(() => {

    async function getPhoto() {

      const total = 6;

      const { url, options } = PHOTOS_GET({ page, total, user });

      const { response, json } = await request(url, options)

      if (response && response.ok && json.length < total) {

        // console.log('Request: ', json);
        setInfinite(false);

      }
    }

    getPhoto();

  }, [request, user, setInfinite, page])
  // console.log(data) ;

  if (error) return <Error error={error} />
  if (loading) return <Loading />

  if (data) {
    return (
      <ul className={`${styles.feed} animeLeft`}>

        {data.map((photo) => {

          // console.log(foto);
          return <FeedPhotosItem setModalPhoto={setModalPhoto} key={photo.id} photo={photo} />
        })}
      </ul>
    )
  } else {
    return null;
  }
}

export default FeedPhotos