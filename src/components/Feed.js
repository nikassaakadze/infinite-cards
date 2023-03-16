import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';
import Card from './Card';

export default function Feed() {
  const [users, setUsers] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(false);

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
      .get(`http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${pageNumber}/10`)
      .then((res) => {
        setUsers((prevUsers) => [...prevUsers, ...res.data.list]);
        setLoading(false);
      });
  }

  useEffect(() => {
    getUsers();
  }, [pageNumber]);

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
      {users.map(({ name, lastName, imageUrl, title, id }) => (
        <Card id={id} key={id} name={name} lastname={lastName} imageUrl={imageUrl} title={title} />
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
