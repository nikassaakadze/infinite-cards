import { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import Friends from '../components/Friends';
import queryString from 'query-string';
import { Link, useLocation } from 'react-router-dom';
import { View } from '../components/feed.styled';
import { Avatar, Description, Headline, Info, List, ListItem, UserHeader } from './view.styled';

export default function User(){

const [user, setUser] = useState([])

const location = useLocation()
const {id} = queryString.parse(location.search)

async function getUsers() {
  await axios.get(`http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${id}`)
    .then((res) => {
      setUser(res.data)
    });
}

  useEffect(() => {
    getUsers();
  }, [id]);
  return(
    <View>
      <Fragment>
        <UserHeader>
          <Avatar src={user?.imageUrl + '/' + id} className="user-img" alt={user?.name} />
          <Info>{user?.name} {user?.lastName}</Info>
        </UserHeader>
        <Description>
          <List>
            <ListItem>
              <strong>Email</strong>: {user?.email} 
            </ListItem>
            <ListItem>
              <strong>Ip Address</strong>: {user?.ip}
            </ListItem>
            <ListItem>
              <strong>Job area</strong>: {user?.jobArea}
            </ListItem>
            <ListItem>
              <strong>Job Type</strong>: {user?.jobType}
            </ListItem>
          </List>
          <List>
            <ListItem>
              <strong>City</strong>: {user?.address?.city} 
            </ListItem>
            <ListItem>
              <strong>Country</strong>: {user?.address?.country}
            </ListItem>
            <ListItem>
              <strong>State</strong>: {user?.address?.state}
            </ListItem>
            <ListItem>
              <strong>Street Address</strong>: {user?.address?.streetAddress}
            </ListItem>
            <ListItem>
              <strong>Zip code</strong>: {user?.address?.zipCode}
            </ListItem>
          </List>
        </Description>
        <Headline>Friends:</Headline>
        <Friends />
      </Fragment>
    </View>
  )
}