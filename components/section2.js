import Link from "next/link"
import Image from "next/image"
import Author from "./_child/author"
import getPost from "@/lib/helper"
import fetcher from "@/lib/fetcher"
import Spinner from "./_child/spinner"
import Error from "./_child/error"
export default function section2() {
  
  const {data, isLoading, isError} = fetcher('api/posts')
  if(isLoading) return <Spinner></Spinner>
  if(isError) return <Error></Error>

  return (
    <section className="container py-10 mx:auto md:px-20">
<h1 className="py-12 text-4xl font-bold text-center ">Latest Posts</h1>
    
    {/* {grid columns } */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
      {
        data.map((value, index)=> (
          <Post data = {value} key={index}></Post>
        ))
      }
    </div>
    </section>
  )
}

function Post({data}) {
  const {id, category, img, published, author, description, title} = data;
    return(
        <div className="items">
            <div className="images">
            <Link href={`posts/${id}`}><Image src={img || "/"} className="rounded" width={"500"} height={"350"} /></Link>
              </div>
            <div className="flex flex-col justify-center py-4 info">
            <div className="cat">
          <Link href={`posts/${id}`}className="text-orange-600 hover:text-orange-800">{category || "unknown"} </Link>
          <Link href={`posts/${id}`} className="text-gray-800 hover:text-gray-600">{published || "unknown"}</Link>
        </div>
        <div className="title">
          <Link href={`posts/${id}`} className="text-xl font-bold text-gray-800 hover:text-gray-600">{title || "unknown"}</Link>
        </div>
        <p className="py-3 text-gray-500">
        {description || "unknown"}
        </p>
        { author ? <Author {...author}></Author> : <></>}
            </div>
        </div>
    )
}
