import { ImFacebook, ImTwitter, ImYoutube } from "react-icons/im";
import Link from "next/link";
export default function header() {
  return (
    <header className="bg-gray-50">
      <div className="flex flex-col items-center py-3 text-center xl:container xl:mx-auto sm:flex-row sm:justify-between">
        <div className="flex justify-center order-2 py-4 md:flex-none w-96 sm:order-1 sm:py-0">
          <input type="text" className="input-text" placeholder="Search" />
        </div>
        <div className="shrink w-80 sm:order-2">
          <Link legacyBehavior href={"/"}>
            <a className="text-3xl font-bold uppercase ">Design</a>
          </Link>
        </div>
        <div className="flex justify-center order-3 w-96">
          <div className="flex gap-6">
            <Link legacyBehavior href={"/"}>
              <a>
                <ImFacebook color="#888888 " />
              </a>
            </Link>
            <Link legacyBehavior href={"/"}>
              <a>
                {" "}
                <ImYoutube color="#888888 " />
              </a>
            </Link>
            <Link legacyBehavior href={"/"}>
              <a>
                <ImTwitter color="#888888 " />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
