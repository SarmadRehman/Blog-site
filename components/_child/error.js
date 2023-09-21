
import Image from "next/image";
export default function error() {
     return (
        <div className="flex flex-col items-center justify-center py-10 text-center">
            <h1 className="py-10 text-3xl font-bold text-orange-600">Something Went Wrong</h1>
            <Image src="/images/not_found.png" width={400} height={400} />
        </div>
    );
  
}
