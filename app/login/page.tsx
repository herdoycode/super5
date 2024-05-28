"use client";
import { useLoginStore } from "@/store";
import Image from "next/image";
import Link from "next/link";
import EmailLogin from "./EmailLogin";
import MobileLogin from "./MobileLogin";

const LoginPage = () => {
  const loginStatus = useLoginStore((s) => s.status);
  return (
    <div className="flex items-center justify-center bg-secondary px-4 flex-col auth-page relative">
      <div className="flex items-center justify-center absolute top-6">
        <Image src="/logo.png" width={200} height={60} alt="logo" />
      </div>
      <div className="mb-[250px]"></div>
      <div className="px-4 py-6 bg-white dark:bg-black w-full shadow-xl rounded-3xl">
        <h2 className="text-xl font-semibold text-center pt-2 pb-5">
          Login to Super5
        </h2>
        {loginStatus === "email" && <EmailLogin />}
        {loginStatus === "phone" && <MobileLogin />}

        <p className="text-sm text-gray-400 text-center pt-4">
          By clicking continue, You are agreed to our terms and condition and
          privacy policy
        </p>
      </div>
      <p className="pt-10 font-semibold">
        New User?{" "}
        <Link href="/signup" className="text-primary">
          Create your account
        </Link>{" "}
      </p>
    </div>
  );
};

export default LoginPage;
