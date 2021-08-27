import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Card() {
    return (
        <div className="cards">
            <h1>Check out offer!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src=" images/img-9.jpg"
                            text="explore the hidden watterfal deepinside the Amazon Jungle"
                            label='Adventure'
                            path='/services'
                        />
                        <CardItem
                            src=" images/img-2.jpg"
                            text="Travel true Islands of Bali"
                            label='Luxry'
                            path='/services'
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                            src=" images/img-4.jpg"
                            text="maybe you want to play football on a pitch situated on a beautiful rocky island"
                            label='Sport'
                            path='/services'
                        />
                        <CardItem
                            src=" images/img-8.jpg"
                            text="see a real desert with your own eyes"
                            label='Travel'
                            path='/services'
                        />
                        <CardItem
                            src=" images/img-5.jpg"
                            text="visit the best fashion houses in Italy"
                            label='Luxry'
                            path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Card
