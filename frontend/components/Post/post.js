
import './post.css'


export const Post = ({id, date, title}) => {
  return (
    <div className='post'>
      <a className='post_link' href={`/post/${id}`}>
        <h4 className='post_date'>{date}</h4>
        <h1 className='post_title'>{title}</h1>
      </a>
      <hr></hr>
    </div>
  )
}