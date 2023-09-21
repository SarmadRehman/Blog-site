import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Format from '@/layout/format'
import Section1 from '../components/section1'
import Section2 from '@/components/section2'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return ( 
    <Format>
      <Section1></Section1>
      <Section2></Section2>
    </Format>
  )
}
