"use client";

import Header from "@/components/Header";
import Modal from "@/components/Modal";
import Image from "next/image";
import React from "react";

function Page() {
  return (
    <div className="min-h-screen w-full bg-blue-100 ">
      <Header />
      <div className="bg-blue-100 px-10 pt-20">
        <h1 className="text-3xl text-gray-800  font-bold text-center mt-6">
          ADMINS
        </h1>
      </div>
      <Modal isVisible={false} onClose={() => {}}>
        <h1>Test</h1>
      </Modal>
    </div>
  );
}

export default Page;
