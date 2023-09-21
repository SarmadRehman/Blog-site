import Author from "./_child/author";
import Image from "next/image";
import Link from "next/link";
import fetcher from "@/lib/fetcher";
import Spinner from "./_child/spinner";
import Error from "next/error";
import data from "@/pages/api/data";
export default function section4() {
  const {data, isLoading, isError} = fetcher('api/popular')
  if(isLoading) return <Spinner></Spinner>
  if(isError) return <Error></Error>
  return (
    <section className="container py-16 mx:auto md:px-20">
      <div className="grid lg:grid-cols-2">
        <div className="item">
          <h1 className="py-12 text-4xl font-bold">Bussiness</h1>
          <div className="flex flex-col gap-6">
            {/* {posts} */}
           {data[1]? <Post data= {data[1]}></Post> : <></>}
           {data[2]? <Post data= {data[2]}></Post> : <></>}
           {data[3]? <Post data= {data[3]}></Post> : <></>}
          </div>
        </div>
        <div className="item">
          <h1 className="py-12 text-4xl font-bold">Travel</h1>
          <div className="flex flex-col gap-6">
           {data[4]? <Post data= {data[4]}></Post> : <></>}
           {data[5]? <Post data= {data[5]}></Post> : <></>}
           {data[2]? <Post data= {data[2]}></Post> : <></>}
          </div>
        </div>
      </div>
    </section>
  );
}
function Post({data}) {
  const { category, img, published, author, title} = data;
  return (
    <div className="flex gap-5">
      <div className="flex flex-col justify-start image">
        <Link href={"/"}>
          <Image
            src={img}
            className="rounded"
            width={"300"}
            height={"250"}
          />
        </Link>
      </div>
      <div className="flex flex-col justify-center info">
        <div className="cat">
          <Link href={"/"} className="text-orange-600 hover:text-orange-800">
            {category}
          </Link>
          <Link href={"/"} className="text-gray-800 hover:text-gray-600">
            {published}
          </Link>
        </div>
        <div className="title">
          <Link
            href={"/"}
            className="text-xl font-bold text-gray-800 hover:text-gray-600"
          >
            {title}
          </Link>
        </div>
        {author?<Author></Author>: <></>}
      </div>
    </div>
  );
}
