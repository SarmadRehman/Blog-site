import Image from "next/image";
import Link from "next/link";
import Author from "./_child/author";
import fetcher from "@/lib/fetcher";
import Spinner from "./_child/spinner";
import Error from "next/error";
import data from "@/pages/api/data";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import SwiperCore from "swiper";
// Import Swiper styles
import 'swiper/css';
export default function section1() {

  const {data, isLoading, isError} = fetcher('api/trending')
  if(isLoading) return <Spinner></Spinner>
  if(isError) return <Error></Error>
  SwiperCore.use([Autoplay])

  const bg = {
      background: "url('/images/banner.png')no-repeat" ,
      backgroundPosition: "right" ,
  }
  return (
     <section className="py-16" style={bg}>
      <div className="container mx-auto md:px-20">
        <h1 className="pb-12 text-4xl font-bold text-center">Trending</h1>
    <Swiper
        slidesPerView={1}
          autoplay={{
            delay:2000}} 
          >
    {
      data.map((value, index) => (
        <SwiperSlide key={index}><Slide data={value}></Slide></SwiperSlide>
      )) 
}  
 </Swiper>     
      </div>
    </section>
  );
}
function Slide({data}) {
  const { id,category, img, published, author, description, title, } = data;
 
  return (
    
    <div className="grid md:grid-cols-2">
      <div className="image">
        <Link href={`posts/${id}`}><Image src={img} width={"600"} height={"600"} /></Link>
        
      </div>
      <div className="flex flex-col justify-center info">
        <div className="cat">
          <Link href={`posts/${id}`}className="text-orange-600 hover:text-orange-800">{category}</Link>
          <Link href={`posts/${id}`} className="text-gray-800 hover:text-gray-600">{published}</Link>
        </div>
        <div className="title">
            <Link href={`posts/${id}`} className="text-3xl font-bold text-gray-800 md:text-6xl hover:text-gray-600">{title}</Link>
          </div>
        <p className="py-3 text-gray-500">
        {description}
        </p>
        {author?<Author></Author>: <></>}
      </div>

    </div>
  );
}
