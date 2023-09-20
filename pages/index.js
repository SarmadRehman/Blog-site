import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Format from '@/layout/format'
import Section1 from '../components/section1'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return ( 
    <Format>
      <Section1></Section1>
    </Format>
  )
}
