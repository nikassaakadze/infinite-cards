import axios from 'axios';
import React, { useEffect, useState, useRef, Fragment } from 'react';
import Card from './Card/Card';
import { Loader, LoaderIndic, Wrapper } from './feed.styled';
import LoaderGIF from '../assets/loader.gif'
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
      .get(`http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${id}/friends/${pageNumber}/4`)
      .then((res) => {
        setUsers((prevUsers) => [...prevUsers, ...res.data.list]);
        setLoading(false);
      });
  }

  useEffect(() => {
    getUsers();
  }, [pageNumber]);

  useEffect(() => {
    setPageNumber(1)
    setUsers([])
    window.scrollTo({top: 0});
  }, [id])


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
    <Fragment>
    <Wrapper>
      {users.map(({ name, lastName, imageUrl, title, id }, index) => (
        <Card id={id} key={index} name={name} lastname={lastName} imageUrl={imageUrl + '/' + id} title={title} />
      ))}
    </Wrapper>
      {loading && (
        <Loader>
          <LoaderIndic src={LoaderGIF} alt="loading..." />
        </Loader>
      )}
      <div id="observer"></div>
    </Fragment>
  );
}
