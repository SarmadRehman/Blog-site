
import Image from "next/image"
import Link from "next/link"
export default function author() {
  return (
    <div className="flex py-5 author ">
      <Image src={"/images/author/author1.jpg"} className="rounded-full" width={"60"} height={60}></Image>
    <div className="flex flex-col justify-center px-4">
<Link href={"/"} className="font-bold text-gray-800 text-md hover:text-gray-600">Flying High </Link>
<span className="text-sm text-gray-500">CEO and Founder </span>
    </div>
    </div>
  )
}
