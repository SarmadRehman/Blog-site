import Format from "@/layout/format";
import Author from "@/components/_child/author";
import Image from "next/image";
import Related from "@/components/_child/related";
import getPost from "@/lib/helper";
import fetcher from "@/lib/fetcher";
import Spinner from "@/components/_child/spinner";
import Error from "@/components/_child/error";
import { useRouter } from "next/router";
import { SWRConfig } from "swr";

export default function Page({ fallback }) {
  const router = useRouter();
  const { postId } = router.query;
  const { data, isLoading, isError } = fetcher(`api/posts/${postId}`);
  if (isLoading) return <Spinner></Spinner>;
  if (isError) return <Error></Error>;
  return (
    <SWRConfig value={{ fallback }}>
      <Article {...data}></Article>
    </SWRConfig>
  );
}

function Article({ img, author, description, title, subtitle }) {
  return (
    <Format>
      <section className="container w-1/2 py-16 mx-auto md:px-2">
        <div className="flex justify-center ">
          {author ? <Author {...author}></Author> : <></>}
        </div>
        <div className="py-10 post">
          <h1 className="pb-5 text-4xl font-bold text-center">
            {title || "unknown"}
          </h1>
          <p className="text-xl text-center text-gray-500">
            {subtitle || "unknown subtitle"}
          </p>
          <div className="py-10">
            <Image src={img} width={900} height={600}></Image>
          </div>
          <div className="flex flex-col gap-4 text-lg text-gray-600 content ">
            <p>{description || "unknown description"}</p>
          </div>
        </div>
        <Related></Related>
      </section>
    </Format>
  );
}

export async function getStaticProps({ params }) {
  const posts = await getPost(params.postId);
  return {
    props: {
      fallback: {
        "api/posts": posts,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = await getPost();
  const paths = posts.map((value) => {
    return {
      params: {
        postId: value.id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}
