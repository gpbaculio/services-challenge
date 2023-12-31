"use client";

import React, { useState } from "react";
import { experimental_useFormStatus } from "react-dom";
import { useForm } from "react-hook-form";

import Header from "@/components/Header";
import Modal from "@/components/Modal";

import useCreateUserMutation from "./useCreateUser";
import usePageFormResolver from "./usePageFormResolver";

export const config = { api: { bodyParser: false } };

type FormValues = {
  name: string;
  email: string;
  password: string;
  image: FileList;
};

type SubmitButtonProps = {
  isLoading: boolean;
  label: string;
};

export function SubmitButton({ isLoading, label }: SubmitButtonProps) {
  const { pending } = experimental_useFormStatus();

  return (
    <button
      aria-disabled={pending}
      disabled={isLoading}
      className={`bg-blue-500 w-1/2 self-center ${
        isLoading ? "disabled:opacity-50 cursor-wait" : ""
      } hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
      type="submit"
    >
      {isLoading ? "Loading..." : label}
    </button>
  );
}

function Page() {
  const [showModal, setShowModal] = useState(false);

  const resolver = usePageFormResolver();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver });

  const [commit, isLoading] = useCreateUserMutation();

  const onSubmit = ({ name, email, password, image }: FormValues) => {
    if (image && image[0]) {
      const reader = new FileReader();

      reader.readAsDataURL(image[0]);

      reader.onloadend = () => {
        commit({
          variables: {
            input: { name, email, password, image: reader.result!.toString() },
          },
          onCompleted(response, errors) {
            if (process.env.NODE_ENV === "development") {
              if (errors) {
                console.log(errors);
              } else {
                console.log("useCreateUserMutation onCompleted", response);
              }
            }
          },
          onError(error) {
            console.log("error!", JSON.stringify(error));
          },
        });
      };
    }
  };

  return (
    <div className="min-h-screen w-full bg-blue-100 ">
      <Header />
      <div className="bg-blue-100 px-10 pt-20">
        <h1 className="text-3xl text-gray-800  font-bold text-center mt-6">
          ADMINS
        </h1>
        <button
          className="text-xl text-white bg-blue-500 rounded px-4 py-1"
          onClick={() => {
            setShowModal(true);
          }}
        >
          Create
        </button>
      </div>
      <Modal
        isVisible={showModal}
        onClose={() => {
          setShowModal(false);
        }}
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          encType="multipart/form-data"
          className="flex flex-col"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="image"
            >
              Image
            </label>
            <input
              className={`appearance-none border ${
                errors.image ? "border-red-500" : "border-gray-200"
              } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
              type="file"
              id="image"
              {...register("image")}
            />
            {errors.image && (
              <p className="text-red-500 text-xs italic">
                {errors.image.message}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className={`appearance-none border ${
                errors.name ? "border-red-500" : "border-gray-200"
              } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
              type="text"
              id="name"
              {...register("name")}
            />
            {errors.name && (
              <p className="text-red-500 text-xs italic">
                {errors.name.message}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="email"
            >
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
          <div className="flex items-center justify-between">
            <SubmitButton isLoading={isLoading} label="Create User" />
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default Page;
