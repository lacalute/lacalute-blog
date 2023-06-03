"use client";
import useSWR from 'swr';
 


export default function Home() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR('http://localhost:8000/posts', fetcher);
 
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  console.log(data);
  return data.map(post => <h1>{post.author}</h1>);
}



