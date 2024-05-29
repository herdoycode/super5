import Link from "next/link";
import SignupForm from "./SignupForm";
import Image from "next/image";
const SignupPage = () => {
  return (
    <div className="flex items-center justify-center bg-secondary px-4 flex-col auth-page relative">
      <div className="flex items-center justify-center absolute top-6">
        <Image src="/logo.png" width={200} height={60} alt="logo" />
      </div>
      <div className="mb-[220px]"></div>
      <div className="px-4 py-6 bg-white dark:bg-black w-full shadow-xl rounded-3xl">
        <h2 className="text-xl font-semibold text-center pt-2 pb-5">
          Signup for Super5
        </h2>
        <SignupForm />

        <p className="text-sm text-gray-400 text-center pt-4">
          By clicking continue, You are agreed to our terms and condition and
          privacy policy
        </p>
      </div>
      <p className="pt-10 font-semibold">
        Already Have an Account?{" "}
        <Link href="/login" className="text-primary">
          Login
        </Link>
      </p>
    </div>
  );
};

export default SignupPage;
