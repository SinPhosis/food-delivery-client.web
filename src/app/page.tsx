"use client";
import axios from "axios";
import { SignUp } from "./sign-up/sign-up";
import { LogIn } from "./log-in/log-in";
import { useEffect } from "react";

export default function Home() {
  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:606");
      console.log(response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []); 

  return (
    <div className="w-full h-[1100px]">
      <div className="w-[1440px] h-[1024px] relative overflow-hidden">
        <LogIn />
      </div>
    </div>
  );
}