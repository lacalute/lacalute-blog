import './nav.css'
// import the icons
import Image from 'next/image'
import Link from 'next/link'
import { BsGithub, BsTelegram } from 'react-icons/bs'
const VK = require('../../app/vk.svg')

export const Navigation = () => {
  return (
    <div className="nav">
      <Link className="logo" href="/">
        Блог Ярослава Королева
      </Link>
      <div className="links">
        <a className="link" href="https://github.com/lacalute" target="_blank">
          <BsGithub size={23} />
        </a>
        <a className="link" href="https://vk.com/koron3" target="_blank">
          <Image src={VK} alt="vk icon" width={25} height={25} />
        </a>
        <a className="link" href="https://t.me/nieresa" target="_blank">
          <BsTelegram size={23} />
        </a>
        <Link className="link" href="/about">
          Обо мне
        </Link>
      </div>
    </div>
  )
}
