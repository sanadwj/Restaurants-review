import React from 'react'
import {Link} from "react-router-dom";
import styled from 'styled-components'

const Card = styled.div`
border: 1px solid #efefef;
background: #fff;
text-align: center;
`

const RestaurantImg = styled.div`
width: 100%;
text-align: center;
margin-left: auto;
margin-right: auto;
padding-top: 20px;
img {
height: 200px;
width: 80%;
border-radius: 10px;
border: 1px solid #efefef;
}
`

const RestaurantName = styled.div`
padding: 20px 0 10px 0;
`

const RestaurantLink = styled.div`
margin: 30px 0 20px 0;
height: 50px;

a {
color: #fff;
background: #000;
padding: 10px 50px;
border: 1px solid #000;
text-decoration: none;
}
`

const Restaurant = (props) => {
    return (
        <Card>
            <RestaurantImg>
                <img src={props.attributes.image_url} alt={props.attributes.name} />
            </RestaurantImg>
            <RestaurantName>{props.attributes.name}</RestaurantName>
            <div className="restaurantScore">{props.attributes.avg_score}</div>
            <RestaurantLink>
                <Link to={`/restaurants/${props.attributes.slug}`}>View Restaurant</Link>
            </RestaurantLink>
        </Card>
    )
}

export default Restaurant