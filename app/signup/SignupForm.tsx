"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";

const SignupForm = () => {
  const [isSubmited, setSubmited] = useState(false);
  const [isRefered, setRefered] = useState(false);
  const [otp, setOtp] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [refer, setRefer] = useState("");
  return (
    <form className="w-full space-y-9">
      <div className="relative w-full">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="peer border-b border-black w-full focus:outline-none focus:border-primary"
          id="name"
        />
        <label
          htmlFor="name"
          className={
            name
              ? "absolute left-0 bottom-6"
              : "absolute left-0 bottom-1 peer-focus:bottom-6"
          }
        >
          Name
        </label>
      </div>
      <div className="relative w-full">
        <input
          type="text"
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
      {isRefered && (
        <div className="relative w-full">
          <div className="flex items-center justify-between">
            <input
              type="text"
              value={refer}
              onChange={(e) => setRefer(e.target.value)}
              className="peer flex-1 border-b border-black w-full focus:outline-none focus:border-primary"
              id="refer"
            />
            <FaRegTrashCan
              onClick={() => setRefered(!isRefered)}
              className="text-xl cursor-pointer mb-2 ms-[-20px]"
            />
            <label
              htmlFor="refer"
              className={
                refer
                  ? "absolute left-0 bottom-6"
                  : "absolute left-0 bottom-1 peer-focus:bottom-6"
              }
            >
              Refer Code
            </label>
          </div>
        </div>
      )}
      {!isRefered && (
        <p
          onClick={() => setRefered(true)}
          className="text-sm text-end font-semibold underline cursor-pointer"
        >
          Refer Code
        </p>
      )}

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

export default SignupForm;
