'use client';
import './page.css'
import React, { useEffect, useState } from "react";
import useSWR from 'swr'
import { Pop } from '../../components/Pop/pop';


export function Create() {
  const [values, setValues] = useState({ title: '', date: '', text: '' })

  const submitHandler = e => {
    e.preventDefault()
    console.log(JSON.stringify(values))
    fetch('http://localhost:8000/create', {
      method: 'POST',
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(values),
    })
  }

  return (
  <form method='post' onSubmit={submitHandler}>
    <h4 className='input_text'>Название поста</h4>
    <input className='post_input' required value={values.title} onChange={e => setValues({ ...values, title: e.target.value })} id='title' type='text' />
    <h4 className='input_text'>Дата публикации</h4>
    <input className='post_input' required value={values.date} onChange={e => setValues({ ...values, date: e.target.value })} id='date' type='date' />
    <h4 className='input_text'>Текст поста</h4>
    <input className='post_input' required value={values.text} onChange={e => setValues({ ...values, text: e.target.value })} id='text' type='text' />
    <button className='post_submit' type='submit'>Опубликовать</button>
  </form>
  )
}



export function Delete() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR('http://localhost:8000/posts', fetcher);
  
  if (data != undefined) {
    console.log(data)
    return (
      <>
      <div className='pops'>
        {data.map(item => <Pop key={item._id} id={item._id} title={item.title} date={item.date} />)}
      </div>
      <button className='post_submit'>Удалить</button>
      </>
    )
  }
  
}

export default function Home() {
  return (
    <div className='container'>
      <div className='nav'>
        <a className='logo' href="/">Админ панель</a>
        <div className='links'>
          <a className='link' href="https://github.com/lacalute" target="_blank">GitHub</a>
          <a className='link' href="https://vk.com/koron3" target="_blank">VK</a>
          <a className='link' href="https://t.me/nieresa" target="_blank">Telegram</a>
        </div>
      </div>
      <h1>Создание поста</h1>
      <div className='create_post'>
        <Create />
      </div>
      <h1>Удаление поста</h1>
      <div className='delete_post'>
        <Delete />
      </div>
    </div>
  )
}
