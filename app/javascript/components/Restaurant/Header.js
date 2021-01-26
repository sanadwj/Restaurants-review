import React from 'react'
import Rating from '../Rating/Rating'
import styled from 'styled-components'

const Wrapper = styled.div`
padding: 50px 100px 50px 0;
text-align: center;

img {
height: 200px;
width: 200px;
border-radius: 10px;
border: 1px solid rgba(0,0,0,0.1);
margin-bottom: -8px;
}
h1{
font-size: 30px;
`

const TotalReviews = styled.div`
font-size: 18px;
padding: 10px 0;
`

const TotalOutOf = styled.div`
font-size: 18px;
font-weight: bold;
padding: 10px 0;
`


const Header = ({attributes, reviews, average, ...props}) => {
    const { image_url, name } = attributes

    return (
        <Wrapper>
            <img src={image_url} alt={name}/>
            <h1>
                {name}
            </h1>
            <div>
                <TotalReviews>
                    <span className="review-count">{reviews ? reviews.length : 0}</span> user reviews
                </TotalReviews>
                <Rating score={average} />
                <TotalOutOf>{average.toFixed(1)} out of 5 stars</TotalOutOf>
            </div>
        </Wrapper>
    )
}

export default Header