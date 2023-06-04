"use client";
import useSWR from 'swr';
import './page.css'
import { Navigation } from '../components/Nav/nav';
import { Post } from '../components/Post/post';
import { Footer } from '../components/Footer/footer';
import { useState, useEffect } from 'react';



export default function Home() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState({id: '', title: '', date: '', text: ''});
  useEffect(() => {
    setLoading(true);
    fetch('https://blog-backend-9war.onrender.com/posts')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

  return (
    <>
      <h1>Посты</h1>
      <div>
        {data.map(post => <Post id={post._id} date={post.date} title={post.title} />)}
      </div>
    </>
  )
}



