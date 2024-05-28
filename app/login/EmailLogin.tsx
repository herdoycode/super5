"use client";
import { Button } from "@/components/ui/button";
import { useLoginStore } from "@/store";
import { useState } from "react";

const EmailLogin = () => {
  const [isSubmited, setSubmited] = useState(false);
  const toggleLoginStatus = useLoginStore((s) => s.toggleStatus);
  return (
    <form className="w-full">
      <div className="relative mb-6" data-twe-input-wrapper-init>
        <input
          type="text"
          className="peer block min-h-[auto] w-full rounded border-0 border-b border-black bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
          id="email"
          placeholder="Example label"
        />
        <label
          htmlFor="email"
          className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-black dark:text-white transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
        >
          Email Address
        </label>
      </div>
      {isSubmited && (
        <div className="relative mb-3" data-twe-input-wrapper-init>
          <input
            type="text"
            className="peer block min-h-[auto] w-full rounded border-0 border-b border-black bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
            id="otp"
            placeholder="Example label"
          />
          <label
            htmlFor="otp"
            className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-black dark:text-white transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
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
      <Button
        onClick={(e) => {
          e.preventDefault();
          setSubmited(true);
        }}
        className="w-full mt-6"
      >
        Send OTP
      </Button>
    </form>
  );
};

export default EmailLogin;
