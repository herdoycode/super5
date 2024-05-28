"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";

const SignupForm = () => {
  const [isSubmited, setSubmited] = useState(false);
  const [isRefered, setRefered] = useState(false);
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
          htmlFor="name"
          className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-black dark:text-white transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
        >
          Name
        </label>
      </div>
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
      <div className="relative mb-6" data-twe-input-wrapper-init>
        <input
          type="text"
          className="peer block min-h-[auto] w-full rounded border-0 border-b border-black bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
          id="phone"
          placeholder="Example label"
        />
        <label
          htmlFor="phone"
          className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-black dark:text-white transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
        >
          Phone Number
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
      {isRefered && (
        <div className="relative mb-3" data-twe-input-wrapper-init>
          <div className="w-full flex items-center justify-between">
            <input
              type="text"
              className="flex-1 peer block min-h-[auto] w-full rounded border-0 border-b border-black bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
              id="refer"
              placeholder="Example label"
            />
            <FaRegTrashCan
              onClick={() => setRefered(false)}
              className="ms-[-20px] cursor-pointer"
            />
          </div>
          <label
            htmlFor="refer"
            className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-black dark:text-white transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
          >
            Refer Code
          </label>
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
