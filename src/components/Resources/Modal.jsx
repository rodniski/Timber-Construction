"use client";

import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import ContactForm from "../contactform";

const Modal = ({ onClose, productName }) => {
  const produto = productName;
  return (
    <Transition.Root show={true} as={React.Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 overflow-y-auto"
        onClose={onClose}
      >
        <Transition.Child
          as={React.Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="flex items-center justify-center min-h-screen">
            <div className="bg-white px-12 py-8 rounded-lg overflow-hidden shadow-xl transition-all">
              <h2 className="text-3xl font-bold text-red-600 mb-8">
                Entre em Contato sobre {produto}
              </h2>

              <ContactForm productName={produto} />
            </div>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  );
};

export default Modal;
