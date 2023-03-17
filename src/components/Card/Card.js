import React from 'react'
import { CardBody, CardHero, CardName, CardTitle, UserCard } from './card.styled'
import { Link } from 'react-router-dom'

export default function Card({name, lastname, imageUrl, title, id}) {
  return (
    <Link to={`/user?&id=${id}`}>
      <UserCard>
        <CardHero src={imageUrl} alt={name}/>
        <CardBody>
          <CardName>{name} {lastname}</CardName>
          <CardTitle>{title}</CardTitle>
        </CardBody>
      </UserCard>
    </Link>
  )
}
