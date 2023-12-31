import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Format from '@/layout/format'
import Section1 from '../components/section1'
import Section2 from '@/components/section2'
import Section3 from '@/components/section3'
import Section4 from '@/components/section4'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return ( 
    <Format>
      <Section1></Section1>
      <Section2></Section2>
      <Section3></Section3>
      <Section4></Section4>
    </Format>
  )
}
