"use client";
import { Button } from "@/components/ui/button";
import { useLoginStore } from "@/store";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import axios from "axios";

interface User {
  uid: string;
  email: string;
  fullname: string;
  createdAt: string;
}

const EmailLogin = () => {
  const [isSubmited, setSubmited] = useState(false);
  const toggleLoginStatus = useLoginStore((s) => s.toggleStatus);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);

  const router = useRouter();

  const handleSendOtp = async (actionType: string) => {
    try {
      if (email === "") {
        console.log("Email is required...");
        setError("Email is required!");
        return;
      }
      await axios.post(`https://api.mysuper5.in/api/auth/v3/otp`, {
        email,
        type: actionType,
      });
      setIsOtpSent(true);
    } catch (err) {
      // setError(err.response.data.message)
    } finally {
    }
  };

  const setUserInfoInLocal = (user: User) => {
    localStorage.setItem("isAuth", "yes");
    localStorage.setItem("user_id", user.uid);
    localStorage.setItem("user_name", user.fullname);
    localStorage.setItem("user_email", user.email);
    localStorage.setItem("user_createdAt", user.createdAt);
    localStorage.setItem("user_lastActiveAt", user.createdAt);
    router.push("/");
  };

  const handleLoginSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      const response = await axios.post(
        `https://api.mysuper5.in/api/auth/v3/signin`,
        { email, otp }
      );
      console.log("Signup success:", response.data);
      if (response.data.status === 200) {
        setUserInfoInLocal(response.data.data.user);
      } else {
        setError("Something went wrong! Try again");
      }
    } catch (err) {
      console.log("Error : ", err);
    }
  };

  return (
    <form onSubmit={handleLoginSubmit} className="w-full space-y-9">
      {error && (
        <div className="mt-4 text-red-500 p-2 rounded text-center">{error}</div>
      )}
      <div className="relative w-full">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="peer border-b border-black w-full focus:outline-none focus:border-primary"
          id="email"
        />
        <label
          htmlFor="email"
          className={
            email
              ? "absolute left-0 bottom-6"
              : "absolute left-0 bottom-1 peer-focus:bottom-6"
          }
        >
          Email Address
        </label>
      </div>
      {isSubmited && (
        <div className="relative w-full">
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="peer border-b border-black w-full focus:outline-none focus:border-primary"
            id="otp"
          />
          <label
            htmlFor="otp"
            className={
              otp
                ? "absolute left-0 bottom-6"
                : "absolute left-0 bottom-1 peer-focus:bottom-6"
            }
          >
            Enter OTP
          </label>
        </div>
      )}
      <p
        onClick={toggleLoginStatus}
        className="text-sm text-end font-semibold underline cursor-pointer"
      >
        use phone number to login
      </p>

      {!isSubmited && (
        <Button
          onClick={(e) => {
            setSubmited(true);
            handleSendOtp("login");
          }}
          className="w-full mt-6"
        >
          Send OTP
        </Button>
      )}
      {isSubmited && (
        <Button type="submit" className="w-full mt-6">
          Continue
        </Button>
      )}
    </form>
  );
};

export default EmailLogin;
