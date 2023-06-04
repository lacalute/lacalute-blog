import '../Pop/pop.css'
import React, { useEffect, useState } from "react";

export function Pop({id, title, date, setPostId, postId}) {
  return (
    <>
    <div className={postId === id ? 'pop active' : 'pop'} onClick={() => setPostId(id)}>
      <h2 className='pop_title'>{title}</h2>
      <h4 className='pop_date'>{date}</h4>
    </div>
    </>
  )
}