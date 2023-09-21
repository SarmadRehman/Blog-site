import { ImFacebook, ImTwitter, ImYoutube } from "react-icons/im";
import Link  from "next/link";
import Newsletter from "./_child/newsletter";
function footer() {
  const bg = {
    backgroundImage: "url('/images/footer.png')",
    backgroundRepeat : "no-repeat",
    backgroundPosition: "bottom left",
  }
  return (
    <footer className='bg-gray-50' style={bg}>


<Newsletter></Newsletter>
      <div className='container flex justify-center py-12 mx-auto'>
        <div className='py-5'>
          <div className='flex justify-center gap-6 '>
          <Link  href={"/"}>
              
                <ImFacebook color="#888888 " />
             
            </Link>
            <Link  href={"/"}>
              
                {" "}
                <ImYoutube color="#888888 " />
              
            </Link>
            <Link  href={"/"}>
              
                <ImTwitter color="#888888 " />
              
            </Link>
          </div>
          <p className="py-5 text-gray-400 ">Copyright © 2023 All rights reserved</p>
          <p className="text-center text-gray-400 ">Terms & Conditions</p>
        </div>
      </div>
    </footer>
  )
}

export default footer
