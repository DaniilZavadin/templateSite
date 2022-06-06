import React from 'react';
import Button from "../Button/Button"
import './Card.scss'

const Card = ({ image, name, onClick }) => {
    return (
        <div className='card-wrapper'>
            <img src={image} alt={name} className='card-wrapper__image'/>
            <div className='card-wrapper__text'>
                {name}
                <Button text={"Learn more"} onClick={onClick}/>
            </div>
        </div>
    );
}

export default Card;