import Link from "next/link"
import Image from "next/image"
import Author from "./author"
export default function Related (){
  return(
    <section className="pt-20">
        <h1 className="py-10 text-3xl font-bold">Related</h1>
        <div className="flex flex-col gap-10">
{Post()}
{Post()}
{Post()}
{Post()}
{Post()}
        </div>
    </section>
  )
}
function Post(){
    return(
        <div className="flex gap-5">
            <div className="flex flex-col justify-start image">
            <Link href={"/"}>
          <Image
            src={"/images/img1.jpg"}
            className="rounded"
            width={"300"}
            height={"200"}
          />
        </Link>
            </div>
            <div className="flex flex-col justify-center info">
        <div className="cat">
          <Link href={"/"} className="text-orange-600 hover:text-orange-800">
            Bussiness, Travel{" "}
          </Link>
          <Link href={"/"} className="text-gray-800 hover:text-gray-600">
            -September 20, 2023
          </Link>
        </div>
        <div className="title">
          <Link
            href={"/"}
            className="text-xl font-bold text-gray-800 hover:text-gray-600"
          >
            Your most unhappy customers are your greatest source of learning
          </Link>
        </div>
        <Author></Author>
      </div>
        </div>
    )
}
