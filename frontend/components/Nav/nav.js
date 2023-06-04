import './nav.css'

export const Navigation = () => {
  return (
    <div className='nav'>
      <a className='logo' href="/">Блог Ярослава Королева</a>
      <div className='links'>
        <a className='link' href="https://github.com/lacalute" target="_blank">GitHub</a>
        <a className='link' href="https://vk.com/koron3" target="_blank">VK</a>
        <a className='link' href="https://t.me/nieresa" target="_blank">Telegram</a>
      </div>
    </div>
  )  
}