'use client';
import './page.css'
import React, { useEffect, useState } from "react";
import useSWR from 'swr'
import { Pop } from '../../components/Pop/pop';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export function Create() {
  const [values, setValues] = useState({ id: 'string', title: '', date: '', text: '' })
  const notify = (msg) =>toast(msg)
  const submitHandler = e => {
    e.preventDefault()
    console.log(JSON.stringify(values))
    fetch('https://blog-backend-9war.onrender.com/create', {
      method: 'POST',
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(values),
    })
    window.location.reload()
    // setValues({id: '' ,title:'' , date: '', text:''})
    notify('Пост опубликован!')
  }
  return (
  <form method='post' onSubmit={submitHandler}>
    <h4 className='input_text'>Название поста</h4>
    <input className='post_input' required value={values.title} onChange={e => setValues({ ...values, title: e.target.value })} id='title' type='text' />
    <h4 className='input_text'>Дата публикации</h4>
    <input className='post_input' required value={values.date} onChange={e => setValues({ ...values, date: e.target.value })} id='date' type='date' />
    <h4 className='input_text'>Текст поста</h4>
    <textarea className='post_input text' required value={values.text} onChange={e => setValues({ ...values, text: e.target.value })} id='text' type='text'></textarea>
    <button className='post_submit'  type='submit'>Опубликовать</button>
    <ToastContainer />
  </form>
  )
}



export function Delete() {
  const [postId, setPostId] = useState('')
  const notify = (msg) =>toast(msg)
  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data, error } = useSWR('https://blog-backend-9war.onrender.com/posts', fetcher)

  const deleteHandler = () => {
    if (postId) {
      // fetch запрос на удаление
      fetch('https://blog-backend-9war.onrender.com/delete', {
        method: 'POST',
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({
          "title": "string",
          "date": "string",
          "text": "string",
          "id": postId
        })
      
    })

      window.location.reload()
      console.log(postId)
      notify('Пост удален!')
    }
  }

  if (data != undefined) {
    return (
      <>
        <div className="pops">
          {data.map(item => (
            <Pop
              key={item._id}
              postId={postId}
              setPostId={setPostId}
              id={item._id}
              title={item.title}
              date={item.date}
            />
          ))}
        </div>
        <button onClick={deleteHandler}  className="post_submit">
          Удалить
        </button>
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
