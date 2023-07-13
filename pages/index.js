import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <ol>
        <li><Link href="faculties/FITU">Фиту</Link></li>
        <li>Механический факультет</li>
        <li>Горный факультет</li>
        <li>Фиту</li>
      </ol>
    </main>
  )
}
