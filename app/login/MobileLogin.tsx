"use client";
import { Button } from "@/components/ui/button";
import { useLoginStore } from "@/store";
import { FormEvent, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

interface User {
  uid: string;
  email: string;
  fullname: string;
  createdAt: string;
}

const MobileLogin = () => {
  const [isSubmited, setSubmited] = useState(false);
  const toggleLoginStatus = useLoginStore((s) => s.toggleStatus);
  const [phoneNumber, setNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);

  const router = useRouter();

  const handleSendOtp = async (actionType: string) => {
    try {
      await axios.post(`https://api.mysuper5.in/api/auth/otp`, {
        phoneNumber,
        type: actionType,
      });
    } catch (err) {
      // setError(err.response.data.data.info);
    } finally {
      setIsOtpSent(true);
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
        `https://api.mysuper5.in/api/auth/signin/v2`,
        { phoneNumber, otp }
      );
      console.log("Signup success:", response.data);
      if (response.data.status === 200) {
        setUserInfoInLocal(response.data.data.user);
      } else {
        setError("Something went wrong! Try again");
      }
    } catch (err) {
      // setError(err.response.data.data.info);
    }
  };

  return (
    <form className="w-full space-y-9">
      <div className="relative w-full">
        <input
          type="text"
          value={phoneNumber}
          onChange={(e) => setNumber(e.target.value)}
          className="peer border-b border-black w-full focus:outline-none focus:border-primary"
          id="number"
        />
        <label
          htmlFor="number"
          className={
            phoneNumber
              ? "absolute left-0 bottom-6"
              : "absolute left-0 bottom-1 peer-focus:bottom-6"
          }
        >
          Phone Number
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
        use email to login
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

export default MobileLogin;
