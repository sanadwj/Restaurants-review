import React, { useState, useEffect } from 'react'
import axios from "axios";
import styled from 'styled-components'

import Header from "./Header";
import Review from './Review'
import ReviewForm from "./ReviewForm";

const Wrapper = styled.div`
margin-left: auto;
margin-right: auto;
display: grid;
grid-template-columns: repeat(2, 1fr);
`

const Column = styled.div`

background: #fff;
height: 100vh;
overflow-y: scroll;
overflow-x:hidden;
::-webkit-scrollbar {
    display: none;
}

&:last-child {
background: #000;
overflow-y: hidden;
`

const Main = styled.div`
padding-left: 50px;
`

const Restaurant = (props) => {
    const [restaurant,setRestaurant] = useState({
        included: undefined
    })
    const [reviews, setReviews] = useState([])
    const [review,setReview] = useState({})
    const [loaded,setLoaded] = useState(false)

    useEffect(() => {
        const slug = props.match.params.slug
        const url =`/api/v1/restaurants/${slug}`
        axios.get(url)
            .then(res => {
                    setRestaurant(res.data)
                    setReviews(res.data.included)
                    setLoaded(true)
                }
            )
            .catch(res => console.log(res))
    }, [])


    const handleChange = (e) => {
        e.preventDefault()
        setReview(Object.assign({}, review, {[e.target.name]: e.target.value}))
        console.log('review:', review)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const csrfToken = document.querySelector('[name=csrf-token]').content
        axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken

        const restaurant_id = restaurant.data.id
        axios.post('/api/v1/reviews', {review, restaurant_id})
            .then(res => {
                // const included = [...restaurant.included, res.data]
                // setRestaurant({...restaurant, included})
                setReviews([...reviews, res.data.data])
                setReview({title: '', description: '', score: 0})
            })
            .catch(res => {})
    }

    const handleDestroy = (id, e) => {
        e.preventDefault()

        const csrfToken = document.querySelector('[name=csrf-token]').content
        axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken

        axios.delete(`/api/v1/reviews/${id}`)
            .then( (data) => {
                const included = [...reviews]
                const index = included.findIndex( (data) => data.id == id )
                included.splice(index, 1)

                setReviews(included)
            })
            .catch( data => console.log('Error', data) )
    }

    const setRating = (score, e) => {
        e.preventDefault()
        setReview({...review, score})
    }

    let total, average = 0
    let userReviews

    if (reviews && reviews.length > 0) {
        total = reviews.reduce((total, review) => total + review.attributes.score, 0)
        average = total > 0 ? (parseFloat(total) / parseFloat(reviews.length)) : 0

        userReviews = reviews.map( (review, index) => {
            return (
                <Review
                    key={index}
                    id={review.id}
                    attributes={review.attributes}
                    handleDestroy={handleDestroy}
                />
            )
        })
    }
    return (

        <Wrapper>
            { loaded &&
            <>
            <Column>
                <Main>
                        <Header
                            attributes={restaurant.data.attributes}
                            reviews={reviews}
                            average={average}
                        />
                    {userReviews}
                </Main>
            </Column>
            <Column>
                <ReviewForm
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    setRating={setRating}
                    attributes={restaurant.data.attributes}
                    review={review}
                />
            </Column>
            </>
            }
        </Wrapper>

    )
}

export default Restaurant