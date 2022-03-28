import React from 'react'
import Home from '../Components/Home/Home'
import {NotFound} from '../Components/NotFound/NotFound'
import Navbar from '../Components/Navbar/Navbar'
import Section from '../Components/Section/Section'
import{Routes, Route} from 'react-router-dom'
import BookDetailsPage from '../Components/BookDetailsPage/BookDetailsPage'
const AllRoutes = () => {
  return (
    <>
    <Navbar />
    <Routes>
        <Route path='/' element ={<Home />} />
        <Route path='/bookdetailspage/:id' element ={<BookDetailsPage />} />
        <Route path='/section/:id' element ={<Section />} />
        <Route path='*' element ={<NotFound />} />
    </Routes>
    </>
  )
}

export default AllRoutes