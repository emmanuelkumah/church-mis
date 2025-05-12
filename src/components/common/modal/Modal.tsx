import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { ModalProps } from "../../../types/types";

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  className,
  title,
  closeOnOverlayClick = true,
  showCloseButton = true,
  width = "500px",
  height = "auto",
}) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget && closeOnOverlayClick) {
      onClose();
    }
  };

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 bg-gray-600 bg-opacity-50"
      onClick={handleOverlayClick}
    >
      <div
        className={`bg-white rounded-lg shadow-xl overflow-hidden ${className}`}
        style={{ width, height, maxWidth: "90vw", maxHeight: "90vh" }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {(title || showCloseButton) && (
          <div className="flex justify-between items-center p-4 border-b border-gray-200">
            {title && (
              <h2
                id="modal-title"
                className="text-xl font-semibold text-gray-800"
              >
                {title}
              </h2>
            )}
            {showCloseButton && (
              <button
                className="text-gray-500 hover:text-gray-700 text0-2xl leading-none"
                onClick={onClose}
              >
                &times;
              </button>
            )}
          </div>
        )}
        <div className="p-6 overflow-y-auto">{children}</div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
