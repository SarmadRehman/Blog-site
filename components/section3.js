import { Swiper, SwiperSlide } from "swiper/react"
import Link from "next/link"
import Image from "next/image"
import Author from "./_child/author"
export default function section3() {
  return (
    <section className="container py-16 mx:auto md:px-20">
        <h1 className="py-12 text-4xl font-bold text-center">Most Popular</h1>
      
      {/* {Swiper} */}
      <Swiper slidesPerView={2}>
        <SwiperSlide> {Post()}  </SwiperSlide>
        <SwiperSlide> {Post()}  </SwiperSlide>
        <SwiperSlide> {Post()}  </SwiperSlide>
        <SwiperSlide> {Post()}  </SwiperSlide>
      </Swiper>
    </section>
  )
}
function Post() {
    return(
        <div className="grid">
            <div className="images">
            <Link href={"/"}><Image src={"/images/img1.jpg"} width={"600"} height={"400"} /></Link>
              </div>
            <div className="flex flex-col justify-center py-4 info">
            <div className="cat">
          <Link href={"/"} className="text-orange-600 hover:text-orange-800">Bussiness, Travel </Link>
          <Link href={"/"} className="text-gray-800 hover:text-gray-600">-September 20, 2023</Link>
        </div>
        <div className="title">
          <Link href={"/"} className="text-3xl font-bold text-gray-800 md:text-4xl hover:text-gray-600">Your most unhappy customers are your greatest source of learning</Link>
        </div>
        <p className="py-3 text-gray-500">
        Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
        </p>
          <Author></Author>
            </div>
        </div>
    )
}
