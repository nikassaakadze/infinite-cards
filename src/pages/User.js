import { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import Friends from '../components/Friends';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { View } from '../components/feed.styled';
import { Avatar, Description, Headline, Info, List, ListItem, UserHeader } from './view.styled';

export default function User(){

const [user, setUser] = useState({})
const [error, setError] = useState(false)

const location = useLocation()
const {id} = queryString.parse(location.search)

  useEffect(() => {
    async function getUsers() {
      try {
        const response = await axios.get(`http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${id}`);
        setUser(response.data);
      } catch (error) {
        setError(true)
      }
    }
    getUsers();
  }, [id]);

  const { name, lastName, email, ip, jobArea, jobType, address, imageUrl } = user;

  return(
    <View>
      {
        error ? <span>An error occurred</span> :
        <Fragment>
        <UserHeader>
          {/* Taking random pictures by adding an id to the link */}
          <Avatar src={imageUrl + '/' + id} className="user-img" alt={name} />
          <Info>{name} {lastName}</Info>
        </UserHeader>
        <Description>

          <List>
            <ListItem>
              <strong>Email</strong>: {email} 
            </ListItem>
            <ListItem>
              <strong>Ip Address</strong>: {ip}
            </ListItem>
            <ListItem>
              <strong>Job area</strong>: {jobArea}
            </ListItem>
            <ListItem>
              <strong>Job Type</strong>: {jobType}
            </ListItem>
          </List>

          <List>
            <ListItem>
              <strong>City</strong>: {address?.city} 
            </ListItem>
            <ListItem>
              <strong>Country</strong>: {address?.country}
            </ListItem>
            <ListItem>
              <strong>State</strong>: {address?.state}
            </ListItem>
            <ListItem>
              <strong>Street Address</strong>: {address?.streetAddress}
            </ListItem>
            <ListItem>
              <strong>Zip code</strong>: {address?.zipCode}
            </ListItem>
          </List>

        </Description>
        <Headline>Friends:</Headline>
        {/* User's friends list */}
        <Friends />
      </Fragment>
      }
    </View>
  )
}