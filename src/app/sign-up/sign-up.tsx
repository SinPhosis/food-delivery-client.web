"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";

type FromValues = {
  email: string;
};
type FormErrors = {
  email: string;
};

export const SignUp = () => {
  const [formValue, setFormValue] = useState<FromValues>({ email: "" });
  const [error, setError] = useState<FormErrors>({ email: "" });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = () => {
    if (!formValue.email || formValue.email.trim().length === 0) {
      setError((prev) => ({
        ...prev,
        email: "Please enter your email.",
      }));
    } else if (!emailRegex.test(formValue.email.trim())) {
      setError((prev) => ({
        ...prev,
        email: "Please enter a valid email address.",
      }));
    } else {
      setError((prev) => ({ ...prev, email: "" }));
    }
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="w-[416px] h-72 absolute top-[246px] left-[100px] flex-col justify-center items-start gap-6 inline-flex">
      <div className="self-stretch h-[60px] flex-col justify-start items-start gap-1 flex">
        <div className="text-zinc-950 text-2xl font-semibold font-['Inter'] leading-loose">
          Create your account
        </div>
        <div className="text-zinc-500 text-base font-normal font-['Inter'] leading-normal">
          Sign up to explore your favorite dishes.
        </div>
      </div>
      <div className="self-stretch h-9 flex-col justify-start items-start gap-4 flex">
        <div className="self-stretch h-9 flex-col justify-start items-start gap-2 flex">
          <Input
            placeholder="Enter your email address"
            value={formValue.email}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="self-stretch justify-start items-start gap-3 inline-flex">
        <Button className="w-[416px]" onClick={handleSubmit}>
          Let's Go
        </Button>
      </div>
      <div className="self-stretch justify-center items-center gap-3 inline-flex">
        <div className="text-zinc-500 text-base font-normal font-['Inter'] leading-normal">
          Already have an account?
        </div>
        <div className="text-blue-600 text-base font-normal font-['Inter'] leading-normal">
          Log in{" "}
        </div>
      </div>
    </div>
  );
};
