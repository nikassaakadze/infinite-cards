import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';
import Card from './Card';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string'

export default function Friends() {
  const [users, setUsers] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(false);

  const location = useLocation()
  const {id} = queryString.parse(location.search)

  const observer = useRef(
    new IntersectionObserver(
      (entries) => {
        const firstEntry = entries[0];
        if (firstEntry.isIntersecting) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      },
      { threshold: 1 }
    )
  );

  async function getUsers() {
    setLoading(true);
    await axios
      .get(`http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/6/friends/1/10`)
      .then((res) => {
        setUsers((prevUsers) => [...prevUsers, ...res.data.list]);
        setLoading(false);
      });
  }

  useEffect(() => {
    getUsers();
    console.log("changed")
console.log(id)
  }, [pageNumber, id]);

  

  useEffect(() => {
    const currentObserver = observer.current;
    if (currentObserver) {
      currentObserver.disconnect();
    }
    observer.current = new IntersectionObserver(
      (entries) => {
        const firstEntry = entries[0];
        if (firstEntry.isIntersecting) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      },
      { threshold: 1 }
    );
  }, []);

  useEffect(() => {
    const currentObserver = observer.current;
    if (currentObserver) {
      currentObserver.observe(document.getElementById('observer'));
    }
  }, [users]);

  return (
    <div className="feed-wrap">
      {users.map(({ name, lastName, imageUrl, title, id }, index) => (
        <Card id={id} key={index} name={name} lastname={lastName} imageUrl={imageUrl} title={title} />
      ))}
      {loading && (
        <div className="loader">
          <div className="loader-icon"></div>
        </div>
      )}
      <div id="observer"></div>
    </div>
  );
}
