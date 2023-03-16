import { useEffect, useState } from 'react';
import axios from 'axios';
import Friends from '../components/Friends';
import queryString from 'query-string';
import { Link, useLocation } from 'react-router-dom';
export default function User(){
  const [user, setUser] = useState([])
  const [loading, setLoading] = useState(false)
  const location = useLocation()
  const {id} = queryString.parse(location.search)
  async function getUsers() {
    setLoading(true)
    await axios
      .get(`http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${id}`)
      .then((res) => {
        setUser(res.data)
        setLoading(false)
      });
  }

  useEffect(() => {
    getUsers();
  }, [id]);
  return(
    <div className="wrapper">
      <Link to="/">Home</Link>
      <div className="inner">
        <div className="user-header">
          <img src={user?.imageUrl} className="user-img" />
          <div className="user-info">
            <h1>{user?.name} {user?.lastName}</h1>
          </div>
        </div>
        <div className="user-description">
          <ul>
            <li><strong>Email</strong>: {user?.email} </li>
            <li><strong>Ip Address</strong>: {user?.ip}</li>
            <li><strong>Job area</strong>: {user?.jobArea}</li>
            <li><strong>Job Type</strong>: {user?.jobType}</li>
          </ul>
          <ul>
            <li><strong>City</strong>: {user?.address?.city} </li>
            <li><strong>Country</strong>: {user?.address?.country}</li>
            <li><strong>State</strong>: {user?.address?.state}</li>
            <li><strong>Street Address</strong>: {user?.address?.streetAddress}</li>
            <li><strong>Zip code</strong>: {user?.address?.zipCode}</li>
          </ul>
        </div>
        <h2>Frineds:</h2>
        <Friends />
      </div>
    </div>
  )
}