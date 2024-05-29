"use client";
import { Button } from "@/components/ui/button";
import { useLoginStore } from "@/store";
import { useState } from "react";

const MobileLogin = () => {
  const [isSubmited, setSubmited] = useState(false);
  const toggleLoginStatus = useLoginStore((s) => s.toggleStatus);
  const [number, setNumber] = useState("");
  const [otp, setOtp] = useState("");
  return (
    <form className="w-full space-y-9">
      <div className="relative w-full">
        <input
          type="text"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          className="peer border-b border-black w-full focus:outline-none focus:border-primary"
          id="number"
        />
        <label
          htmlFor="number"
          className={
            number
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
      <Button
        onClick={(e) => {
          e.preventDefault();
          setSubmited(true);
        }}
        className="w-full mt-6"
      >
        {isSubmited ? "Continue" : "Send OTP"}
      </Button>
    </form>
  );
};

export default MobileLogin;
