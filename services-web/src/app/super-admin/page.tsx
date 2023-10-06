"use client";

import React, { useState } from "react";

import Header from "@/components/Header";
import Modal from "@/components/Modal";

function Page() {
  const [showModal, setShowModal] = useState(false);

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
        <h1>Test</h1>
      </Modal>
    </div>
  );
}

export default Page;
