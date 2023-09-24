import React from 'react'

import CarouselItem from "../../Components/Carousel/Carousel"
import Form from '../../Components/Form/Form'
import AboutItem from '../../Components/AboutItem/AboutItem'
import Work from '../../Components/Work/Work'

const Home = () => {
    return (
        <div>
            <CarouselItem />
            <AboutItem />
            <Work />
            <Form />
        </div>
    )
}

export default Home
