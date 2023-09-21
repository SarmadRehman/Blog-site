import Format from "@/layout/format"
import Author from "@/components/_child/author"
import Image from "next/image"
 export default function Page(){
  return(
    <Format>
        <section className="container w-1/2 py-16 mx-auto md:px-2">
            <div className="flex justify-center "> 
                <Author></Author>
            </div>
            <div className="py-10 post">
                <h1 className="pb-5 text-4xl font-bold text-center"> Your most unhappy customers are your greatest source of learning
</h1>
<p className="text-xl text-center text-gray-500">lorem ipsum dolor sit amet, consectetur adipiscing   elit, sed do eiusmod tempor incididunt ut labore        et dolore magna al      traces. Ut enim ad minim veniam,</p>
        <div className="py-10">
            <Image src={"/images/img1.jpg"} width= {900} height={600}></Image>
        </div>
        <div className="flex flex-col gap-4 text-lg text-gray-600 content ">
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
        </div>
            </div>
        </section>
    </Format>
  )
}
