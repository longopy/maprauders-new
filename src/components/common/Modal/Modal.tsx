"use client";
const combineClasses = (...args: string[]) => args.join(" ");
import styles from "@/components/common/Modal/Modal.module.css";
import { createPortal } from "react-dom";
import { useEffect } from 'react';

export default function Modal({
  isOpen,
  closable,
  showCloseIcon,
  size = "sm",
  background = "dark",
  title,
  width,
  onClose,
  children,
}: {
  isOpen: boolean;
  closable?: boolean;
  showCloseIcon?: boolean;
  size?: string;
  background?: string;
  title?: string;
  width?: number;
  onClose: () => void;
  children?: React.ReactNode;
}) {
  const isServer = typeof window === "undefined";

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (closable && event.key === "Escape") {
        onClose();
      }
    };

    if (!isServer) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [closable, isServer, onClose]);

  if (!isServer && isOpen) {
    const container = document.getElementById("modal-portal");
    const modalContent = (
      <>
        <div className={styles.mask} />
        <div
          className={styles.wrapper}
          onClick={() => {
            if (closable) {
              onClose();
            }
          }}
        >
          <div
            className={combineClasses(styles.modal, styles[`modal-${size}`], styles[`modal-${background}`] )}
            onClick={(e) => e.stopPropagation()}
            style={width ? { width } : {}}
          >
            {showCloseIcon && (
              <span className={styles["close-btn"]} onClick={onClose}>
                &times;
              </span>
            )}
            {title}
            <div className={styles.content}>{children}</div>
          </div>
        </div>
      </>
    );
    return container != null ? createPortal(modalContent, container) : null;
  }
  return null;
}
