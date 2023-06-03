"use client";
import useSWR from 'swr';
import './page.css'
import Image from 'next/image';
import card_img from './min.jpg'


export default function Home() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR('http://localhost:8000/posts', fetcher);
 
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  console.log(data);
  return (
    <html>
      <body>
        <div className='container'>
          <div className='nav'>
            <a className='logo' href="/">Блог Ярослава Королева</a>
            <div className='links'>
              <a className='link' href="">GitHub</a>
              <a className='link' href="">VK</a>
              <a className='link' href="">Telegram</a>
            </div>
          </div>
          <h1>Посты</h1>
          <div className='main'>
            
            <div className='card'>
              <div className='card_img'>
              </div>
              <h1 className='card_title'>Как выучить CSS?</h1>
              <h3 className='card_date'>02.03.2023</h3>
              <h4 className='card_description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>
            </div>
            <div className='card'>
              <div className='card_img'>
              </div>
              <h1 className='card_title'>Как выучить CSS?</h1>
              <h3 className='card_date'>02.03.2023</h3>
              <h4 className='card_description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>
            </div>
            <div className='card'>
              <div className='card_img'>
              </div>
              <h1 className='card_title'>Как выучить CSS?</h1>
              <h3 className='card_date'>02.03.2023</h3>
              <h4 className='card_description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}



