import React, { ReactNode } from "react";

type ModalProps = {
  isVisible: boolean;
  onClose: () => void;
  children: ReactNode;
};

function Modal({ isVisible, onClose, children }: ModalProps) {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-sm flex justify-center items-center">
      <div
        onClick={onClose}
        className="bg-black bg-opacity-25 w-full min-h-screen absolute"
      />
      <div className="w-[600px] z-10">
        <div className="bg-white p-4 rounded  ">
          <div className="w-full justify-end flex">
            <button
              onClick={onClose}
              className="text-black text-xl cursor-pointer"
            >
              X
            </button>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Modal;
