import Navbar from "@/components/navbar";
import Image from "next/image";
import LoginPage from "@/components/login";

export default function Login() {
  return (
    <>
      {/* <Navbar /> */}
      {/* <Image
        src="/assets/images/background.png"
        alt="hero"
        className="w-full h-screen object-cover"
        width={1920}
        height={600}
      /> */}
      <LoginPage/>
    </>
  );
}