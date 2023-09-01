import React from 'react'


// import css module
import Style from './coursesDetails.module.css'

//import components

import Header from '../../src/components/Header'
import Footer from '../../src/components/Footer/Footer'
import Detail from '../../src/components/common/courseDetails/detail/Detail'
import Tozihat from '../../src/components/common/courseDetails/tozihat/Tozihat'
import Review from '../../src/components/common/courseDetails/review/Review'


const CoursesDetails = () => {
return (
    <>
    <Header />
    <Detail />
    <Tozihat />
    <Review />
    <Footer />
    </>
)
}

export default CoursesDetails;