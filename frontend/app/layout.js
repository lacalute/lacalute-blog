import './globals.css'
import { Inter } from 'next/font/google'
import { Footer } from '../components/Footer/footer'
import { Navigation } from '../components/Nav/nav'
import '../components/Footer/footer.css'
import '../components/Nav/nav.css'
import './page.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ярослав Королев Блог'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='container'>
          <Navigation />
          {children}
        </div>
      </body>

    </html>
  )
}
