"use client"

import Navbar from "@/components/Navbar";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {

const router = useRouter();

const handleLogin = () => {
  console.log("login successfull");

  router.push("/categories");
}

  return (
    <div>
      <img src={"/images/logo.webp"} alt="" className="h-20" />
      <h1 className="text-2xl font-bold">{process.env.NEXT_PUBLIC_STORE_NAME}</h1>


    </div>
  );
}
