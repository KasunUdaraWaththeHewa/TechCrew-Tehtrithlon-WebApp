import Navbar from "@/components/navbar";
import Image from "next/image";
import Login from "@/components/login";


export default function Home() {
  return (
    <>
      <Navbar />
      {/* <Image
        src="/assets/images/background.png"
        alt="hero"
        className="w-full h-screen object-cover"
        width={1920}
        height={600}
      /> */}
      <Login/>
    </>
  );
}
