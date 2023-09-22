
import Image from "next/image"
import Link from "next/link"
export default function author({name, img, designation }) {
  if(!name && !img) return <h1>NOt image or name of Author returned 'author.js'</h1>
  return (
    <div className="flex py-5 author ">
      <Image src={img} className="rounded-full" width={"60"} height={60}></Image>
    <div className="flex flex-col justify-center px-4">
<Link href={"/"} className="font-bold text-gray-800 text-md hover:text-gray-600">{name} </Link>
<span className="text-sm text-gray-500">{designation}</span>
    </div>
    </div>
  )
}
