import React from 'react'
import CardItem from './CardItem'
import './Cards.css';


function Cards() {
    return (
        <div className='cards'>
            <h1>Veja nossas áreas de atuação</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                <ul className='cards__items'>
            <CardItem
              src='images/milky.jpg'
              text='Escute a via lactea conosco.'
              label='Espaço'
              path='/services'
            />
            <CardItem
              src='images/tele.jpg'
              text='Compre seu rádio telescópio na Astro.'
              label='Telescópio'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/ceu.jpg'
              text='O ceu te aguarda.'
              label='Espaço'
              path='/services'
            />
            <CardItem
              src='images/luz.jpg'
              text='Veja de perto as belezas do universo'
              label='Conhecimento'
              path='/products'
            />
            <CardItem
              src='images/terra.jpg'
              text='Conheça melhor seu próprio planeta'
              label='Conhecimento'
              path='/sign-up'
            />
          </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
