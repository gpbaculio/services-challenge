"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { experimental_useFormStatus } from "react-dom";

import Header from "@/components/Header";
import Modal from "@/components/Modal";

import useCreateUserMutation from "./useCreateUserMutation";

export const config = { api: { bodyParser: false } };

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
  image: yup
    .mixed<FileList>()
    .required()
    .test(
      "upload profile image",
      "Upload admin profile image",
      (value) => !value || (value && value.length > 0)
    )
    .test(
      "format",
      "Invalid format. Only jpg, jpeg, png are allowed",
      (value) =>
        !value ||
        (value &&
          value.length > 0 &&
          ["image/jpg", "image/jpeg", "image/png"].includes(value[0].type))
    ),
});

type FormValues = {
  name: string;
  email: string;
  password: string;
  image: FileList;
};

function SubmitButton({ isLoading }: { isLoading: boolean }) {
  const { pending } = experimental_useFormStatus();

  return (
    <button
      aria-disabled={pending}
      disabled={isLoading}
      className={`bg-blue-500 ${
        isLoading ? "disabled:opacity-50 cursor-wait" : ""
      } hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
      type="submit"
    >
      {isLoading ? "Loading..." : "Create User"}
    </button>
  );
}

function Page() {
  const [showModal, setShowModal] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

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
        <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
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
            <SubmitButton isLoading={isLoading} />
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default Page;
