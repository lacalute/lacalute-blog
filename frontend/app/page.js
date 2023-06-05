'use client'
import { useEffect, useState } from 'react'
import { Loader } from '../components/Loader/Loader'
import { Post } from '../components/Post/post'
import { BASE_URL } from './api'
import './page.css'

export default function Home() {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    fetch(`${BASE_URL}/posts`)
      .then(res => res.json())
      .then(data => {
        setData(data)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <Loader />

  return (
    <>
      <h1>Посты</h1>
      <div>
        {data &&
          data
            .reverse()
            .map(post => <Post key={post._id} id={post._id} date={post.date} title={post.title} />)}
      </div>
    </>
  )
}
