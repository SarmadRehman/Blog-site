import Author from "./_child/author";
import Image from "next/image";
import Link from "next/link";

export default function section4() {
  return (
    <section className="container py-16 mx:auto md:px-20">
      <div className="grid lg:grid-cols-2">
        <div className="item">
          <h1 className="py-12 text-4xl font-bold">Bussiness</h1>
          <div className="flex flex-col gap-6">
            {/* {posts} */}
            {Post()}
            {Post()}
            {Post()}
            {Post()}
            {Post()}
          </div>
        </div>
        <div className="item">
          <h1 className="py-12 text-4xl font-bold">Travel</h1>
          <div className="flex flex-col gap-6">
            {Post()}
            {Post()}
            {Post()}
            {Post()}
          </div>
        </div>
      </div>
    </section>
  );
}
function Post() {
  return (
    <div className="flex gap-5">
      <div className="flex flex-col justify-start image">
        <Link href={"/"}>
          <Image
            src={"/images/img1.jpg"}
            className="rounded"
            width={"300"}
            height={"250"}
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
  );
}
