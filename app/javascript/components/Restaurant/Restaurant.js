import React, { useState, useEffect } from 'react'
import axios from "axios";

const Restaurant = (props) => {
    const [restaurant,setRestaurant] = useState({})
    const [review,setReview] = useState({})

    useEffect(() => {
        const slug = props.match.params.slug
        const url =`/api/v1/restaurants/${slug}`
        axios.get(url)
            .then(res => setRestaurant(res.data))
            .catch(res => console.log(res))
    }, [])
    return (
        <div className="wrapper">
            <div className="column">
                <div className="header"></div>
                <div className="reviews"></div>
            </div>
            <div className="column">
                <div className="reviewForm">[Review form goes here]</div>
            </div>
        </div>
    )
}

export default Restaurant