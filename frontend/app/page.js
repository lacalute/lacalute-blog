"use client";
import useSWR from 'swr';
import './page.css'
import { Navigation } from '../components/Nav/nav';
import { Post } from '../components/Post/post';
import { Footer } from '../components/Footer/footer';

export default function Home() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR('http://localhost:8000/posts', fetcher);
 
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  return (
    <>
      <h1>Посты</h1>
      <div>
        {data.map(post => <Post id={post._id} date={post.date} title={post.title} />)}
      </div>
    </>
  )
}



