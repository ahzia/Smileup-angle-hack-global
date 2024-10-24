import { ReactNode, useEffect } from "react";
import { MdClose } from "react-icons/md";
import { createPortal } from "react-dom";
import classNames from "classnames";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
}

export default function Modal({ isOpen, onClose, children, className }: ModalProps) {
  // Close modal when clicking outside the modal content
  const handleOverlayClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Prevent scrolling of background when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 transition-opacity duration-300 ease-in-out"
      onClick={handleOverlayClick}
    >
      <div
        className={classNames(
          "bg-[#1E212D] w-full max-w-4xl h-full max-h-[100vh] rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 ease-in-out",
          className,
          { "translate-y-0": isOpen, "translate-y-full": !isOpen }
        )}
      >
        <div className="relative h-full">
          <button
            className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 p-2 rounded-full hover:bg-red-500 transition-all duration-200"
            onClick={onClose}
            aria-label="Close Modal"
          >
            <MdClose size={28} className="text-white" />
          </button>
          <div className="h-full flex flex-col">{children}</div>
        </div>
      </div>
    </div>,
    document.body
  );
}
