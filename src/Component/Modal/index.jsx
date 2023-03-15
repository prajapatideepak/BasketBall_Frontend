import { Fragment, useState } from "react";

import { Dialog, Transition } from "@headlessui/react";

export const Modal = ({ open, onClose, size, children }) => {
  const [modalOpen, setModalOpen] = useState(open);

  return (
    <Transition
      beforeEnter={() => setModalOpen(true)}
      afterLeave={() => setModalOpen(false)}
      show={open}
      as={Fragment}
    >
      <Dialog
        as="div"
        id="modal"
        className="fixed inset-0 z-[9999] overflow-y-auto"
        style={{backgroundColor: "rgba(1, 1, 1, 0.6)"}}
        static
        open={modalOpen}
        onClose={onClose}
      >
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            {children}
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

Modal.Title = Dialog.Title;
Modal.Description = Dialog.Panel;
