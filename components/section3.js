import { Swiper, SwiperSlide } from "swiper/react"
import Link from "next/link"
import Image from "next/image"
import Author from "./_child/author"
import fetcher from "@/lib/fetcher";
import Spinner from "./_child/spinner";
import Error from "next/error";
import data from "@/pages/api/data"
export default function section3() {
  const {data, isLoading, isError} = fetcher('api/popular')
  if(isLoading) return <Spinner></Spinner>
  if(isError) return <Error></Error>
  return (
    
    <section className="container py-16 mx:auto md:px-20">
        <h1 className="py-12 text-4xl font-bold text-center">Most Popular</h1>
      
      {/* {Swiper} */}
      <Swiper slidesPerView={2}>
       {
       data.map((value,index)=>(
       <SwiperSlide key={index}><Post data={value}></Post></SwiperSlide>
       ))
} 
      </Swiper>
    </section>
  )
}
function Post({data}) {
  const { category, img, published, author, description, title} = data;
    return(
        <div className="grid">
            <div className="images">
            <Link href={"/"}><Image src={img} width={"600"} height={"400"} /></Link>
              </div>
            <div className="flex flex-col justify-center py-4 info">
            <div className="cat">
          <Link href={"/"} className="text-orange-600 hover:text-orange-800">{category || "unknown"}</Link>
          <Link href={"/"} className="text-gray-800 hover:text-gray-600">{published || "unknown"}</Link>
        </div>
        <div className="title">
          <Link href={"/"} className="text-3xl font-bold text-gray-800 md:text-4xl hover:text-gray-600">{title || "unknown"}</Link>
        </div>
        <p className="py-3 text-gray-500">
       {description || "unknown"}
        </p>
        {author?<Author></Author>: <></>}
            </div>
        </div>
    )
}
