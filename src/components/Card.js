import React from 'react'
import { CardBody, CardHero, CardName, CardTitle, UserCard } from './card.styled'
import { Link } from 'react-router-dom'

export default function Card({name, lastname, imageUrl, title, id}) {
  function scrollTop (){
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  return (
    <Link onClick={scrollTop} to={`/user?&id=${id}`}>
      <UserCard>
        <CardHero src={imageUrl}/>
        <CardBody>
          <CardName>{name} {lastname}</CardName>
          <CardTitle>{title}</CardTitle>
        </CardBody>
      </UserCard>
    </Link>
  )
}
