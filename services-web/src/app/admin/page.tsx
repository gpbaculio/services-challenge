"use client";

import React from "react";

import Header from "@/components/Header";
import { useForm } from "react-hook-form";
import { SubmitButton } from "../super-admin/page";

function page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="min-h-screen w-full bg-blue-100 flex items-center justify-center">
      <Header />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white rounded shadow p-4 w-[400px] flex flex-col"
      >
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className={`appearance-none border ${
              errors.email ? "border-red-500" : "border-gray-200"
            } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
            type="email"
            id="email"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-red-500 text-xs italic">
              {errors.email.message}
            </p>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className={`appearance-none border ${
              errors.password ? "border-red-500" : "border-gray-200"
            } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
            type="password"
            id="password"
            {...register("password")}
          />
          {errors.password && (
            <p className="text-red-500 text-xs italic">
              {errors.password.message}
            </p>
          )}
        </div>
        <SubmitButton isLoading={false} label="Login" />
      </form>
    </div>
  );
}

export default page;
