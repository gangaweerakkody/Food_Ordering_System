import React from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
const FoodItem = ({id,name,price,description,image}) => {
  return (
    <div className='food-item'>
        <div className="food-item-img-container">
            <img src={image} alt="" className="food-item-image" />
        </div>

        <div className="food-item-info"></div>
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt=""/>
            </div>
            <p className="food-item-desc">{description}</p>
            <p className="food-item-price">${price}</p>
    </div>
  )
}

export default FoodItem
