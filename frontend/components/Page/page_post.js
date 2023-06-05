'use client'
import { useState, useEffect } from 'react'
import { Loader } from '../Loader/Loader'
import { BASE_URL } from '../../app/api/index'
import './page_post.css'

export const Page = ide => {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(`${BASE_URL}/post/${ide.ide}`)
      .then(res => res.json())
      .then(data => {
        setData(data)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <Loader />

  return (
    <>
      <h1 className="page_title">{data?.title}</h1>
      <h4 className="page_date">{data?.date}</h4>
      <p className="page_text animation">{data?.text}</p>
    </>
  )
}
