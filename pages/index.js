import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/header'
import Head from 'next/head'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return ( 
    <div>
      <Header></Header>
    </div>
  )
}
