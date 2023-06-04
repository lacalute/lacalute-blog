'use client';
import './page_post.css'
import useSWR from 'swr';

export const Page = (ide) => {
  
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR(`http://localhost:8000/post/${ide.ide}`, fetcher);
  if (data != undefined) {
    console.log(data);
    return (
      <>
      <h1 className='page_title'>{data.title}</h1>
      <h4 className='page_date'>{data.date}</h4>
      <p className='page_text'>{data.text}</p>
      </>
     
    )  
  }
  
}

