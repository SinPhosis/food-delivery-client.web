import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

type FromValues = {
  email: string;
  password: string;
};
type FormErrors = {
  email: string;
  password: string;
};

export const LogIn = () => {
  const [formValue, setFormValue] = useState<FromValues>({
    email: "",
    password: "",
  });
  const [error, setError] = useState<FormErrors>({ email: "", password: "" });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

  const handleSubmit = () => {
    // Email :
    if (!formValue.email || formValue.email.trim().length === 0) {
      setError((prev) => ({
        ...prev,
        email: "Please enter your email",
      }));
    } else if (!emailRegex.test(formValue.email.trim())) {
      setError((prev) => ({
        ...prev,
        email: "Please enter a valid email address.",
      }));
    } else {
      setError((prev) => ({ ...prev, email: "" }));
    }
   // Password : 
    if (!formValue.password || formValue.password.trim().length === 0) {
      setError((prev) => ({
        ...prev,
        password: "Please enter your password",
      }));
    } else if (!formValue.password || formValue.password.trim().length === 6){
        setError((prev) => ({
            ...prev,
            password: "The password character must be 6 or longer,"
        }));
    } else if (!passwordRegex.test(formValue.password.trim())) {
      setError((prev) => ({
        ...prev,
        password: "Incorrect password. Please try again",
      }));
    } else {
      setError((prev) => ({ ...prev, password: "" }));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <div>
      <div className="w-[416px] h-72 absolute top-[246px] left-[100px] flex-col justify-center items-start gap-6 inline-flex pt-[350px]">
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
              type="email"
              name="email"
            />
            {error.email && (
              <div className="text-[#ee4444] text-sm font-normal font-['Inter'] leading-tight">
                {error.email}
              </div>
            )}
          </div>
        </div>
        <div className="self-stretch h-9 flex-col justify-start items-start gap-2 flex">
          <Input
            placeholder="Password"
            value={formValue.password}
            onChange={handleChange}
            type="password"
            name="password"
          />
          {error.password && (
            <div className="text-[#ee4444] text-sm font-normal font-['Inter'] leading-tight">
              {error.password}
            </div>
          )}
        </div>
        <div className="text-zinc-900 text-sm font-normal font-['Inter'] underline leading-tight">
          Forgot password ?
        </div>
        <div className="self-stretch justify-start items-start gap-3 inline-flex">
          <Button className="w-[416px]" onClick={handleSubmit}>
            Let's Go
          </Button>
        </div>
        <div className="self-stretch justify-center items-center gap-3 inline-flex">
        <div className="text-zinc-500 text-base font-normal font-['Inter'] leading-normal">
          Don't have an account? 
        </div>
        <div className="text-blue-600 text-base font-normal font-['Inter'] leading-normal">
          Sign Up{" "}
        </div>
      </div>
      </div>
    </div>
  );
};
