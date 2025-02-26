"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronLeft } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox"

export const NewPass = () => {
  return (
    <div className="w-full h-[1600px] relative overflow-hidden">
      <div className="w-[400px] h-[372px] flex-col justify-start items-start gap-6 inline-flex absolute left-[100px] top-[326px]">
        <Button className="w-[36px] h-[36px] bg-white">
          <ChevronLeft className="text-black" />
        </Button>
        <div className="self-stretch h-[60px] flex-col justify-start items-start gap-1 flex">
          <div className="text-zinc-950 text-2xl font-semibold font-['Inter'] leading-loose">
            Create a strong password
          </div>
          <div className="text-zinc-500 text-base font-normal font-['Inter'] leading-normal">
            Create a strong password with letters, numbers.
          </div>
        </div>
        <div className="self-stretch h-9 flex-col justify-start items-start gap-4 flex">
            <Input
              className="h-10"
              placeholder="Password"
              type="password"
              name="password"
            />
            <Input
            className="h-10" 
            placeholder="Confirm"
            type="password"
            name="confirm pass"
            />
          <div className="justify-start items-center gap-2 inline-flex mt-[15px]">
            <Checkbox />
          </div>
        </div>
      </div>
    </div>
  );
};
