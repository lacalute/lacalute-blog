import '../Pop/pop.css'
import React, { useEffect, useState } from "react";

export function Pop({id, title, date}) {
  const [postId, setPostId] = useState('')

  const submitHandler = e => {
    e.preventDefault()
    console.log(postId)
  }
  return (
    <>
    <div className={postId === id ? 'pop active' : 'pop'} onClick={e => setPostId(id)}>
      <h2 className='pop_title'>{title}</h2>
      <h4 className='pop_date'>{date}</h4>
    </div>
    </>
  )
}