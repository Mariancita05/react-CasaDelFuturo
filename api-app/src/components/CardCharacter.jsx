import React from 'react'
import "./cardCharacter.css"
import { Link } from 'react-router-dom';

export const CardCharacter = ({character}) => {
  
  return (
    <article className='card' >
      <Link to={"/characters/"+character.id}>
    <h2>{character.Nombre}</h2>
    </Link>
    <h3>{character.Ocupacion}</h3>
    <img src={character.Imagen} alt={character.Nombre} />
  </article>
  )
}
