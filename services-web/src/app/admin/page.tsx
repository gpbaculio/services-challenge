"use client";

import React from "react";

import Header from "@/components/Header";
import LoginForm from "./LoginForm";

function Page() {
  return (
    <div className="min-h-screen w-full bg-blue-100 flex items-center justify-center">
      <Header />
      <LoginForm />
    </div>
  );
}

export default Page;
