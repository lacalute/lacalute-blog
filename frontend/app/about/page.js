import Image from 'next/image'
import '../page.css'
const about_img = require('./about.jpg')

export default function About() {
  return (
    <>
      <h1 className="my_blog">Это мой блог</h1>
      <div className="about-1">
        <Image src={about_img} alt="about" className="img_about" />
        <div className="about-1 text">
          <h1 className="title">Меня зовут Ярослав Королев</h1>
          <p className="bottom">
            Я заканчиваю 9 класс и собираюсь поступать учиться в Польшу. Занимаюсь программированием, особенно
            Data Science, Machine Learning и немного Web-разработкой (хоть и особо не люблю ее). Люблю
            математику и физику, читаю книги по философии и ложусь спать в 22:00 каждый день
          </p>
        </div>
      </div>
      <div className="continue">
        <h1 className="continue_text">Продолжение следует ...</h1>
      </div>
    </>
  )
}
