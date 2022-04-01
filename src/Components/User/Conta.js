import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Feed from '../Feed/Feed'
import UsePhotoPost from './UsePhotoPost'
import UserHeader from './UserHeader'
import UseStats from './UseStats'



const Conta = () => {
  return (
    <section className='container'>
      <UserHeader />
      
      <Routes>
        <Route path='/' element={<Feed />} />
        <Route path='estatisticas' element={<UseStats />} />
        <Route path='postar' element={<UsePhotoPost />} />
      </Routes>
    </section>
  )
}

export default Conta