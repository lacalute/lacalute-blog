import './nav.css'
// import the icons
import {BsTelegram} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
const VK = require('../../app/vk.svg')
import Image from 'next/image';


export const Navigation = () => {
  return (
    <div className='nav'>
      <a className='logo' href="/">Блог Ярослава Королева</a>
      <div className='links'>
        <a className='link' href="https://github.com/lacalute" target="_blank"><BsGithub size={23} /></a>
        <a className='link' href="https://vk.com/koron3" target="_blank">
          <Image src={VK} width={25} height={25}/>
        </a>
        <a className='link' href="https://t.me/nieresa" target="_blank"><BsTelegram size={23}/></a>
        <a className='link' href="/about">About</a>
      </div>
    </div>
  )  
}