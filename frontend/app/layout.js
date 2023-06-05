import { Inter } from 'next/font/google'
import '../components/Footer/footer.css'
import { Navigation } from '../components/Nav/nav'
import '../components/Nav/nav.css'
import './globals.css'
import './page.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ярослав Королев Блог',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          <Navigation />
          {children}
        </div>
      </body>
    </html>
  )
}
