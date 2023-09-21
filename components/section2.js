import Link from "next/link"
import Image from "next/image"
import Author from "./_child/author"
import getPost from "@/lib/helper"
export default function section2() {
  getPost(2).then(res=> console.log(res));
  return (
    <section className="container py-10 mx:auto md:px-20">
<h1 className="py-12 text-4xl font-bold text-center ">Latest Posts</h1>
    {/* {grid columns } */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
      {Post()}
      {Post()}
      {Post()}
      {Post()}
      {Post()}
      {Post()}
    </div>
    </section>
  )
}

function Post() {
    return(
        <div className="items">
            <div className="images">
            <Link href={"/"}><Image src={"/images/img1.jpg"} className="rounded" width={"500"} height={"350"} /></Link>
              </div>
            <div className="flex flex-col justify-center py-4 info">
            <div className="cat">
          <Link href={"/"} className="text-orange-600 hover:text-orange-800">Bussiness, Travel </Link>
          <Link href={"/"} className="text-gray-800 hover:text-gray-600">-September 20, 2023</Link>
        </div>
        <div className="title">
          <Link href={"/"} className="text-xl font-bold text-gray-800 hover:text-gray-600">Your most unhappy customers are your greatest source of learning</Link>
        </div>
        <p className="py-3 text-gray-500">
        Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
        </p>
          <Author></Author>
            </div>
        </div>
    )
}
