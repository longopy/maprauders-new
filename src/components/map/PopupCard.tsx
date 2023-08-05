"use client";
import Modal from "@/components/common/Modal/Modal";
import { useTranslation } from "@/i18n/client";
import DOMPurify from "dompurify";
import Image from "next/image";
import { useState } from "react";

export default function PopupCard({
  lng,
  title,
  description,
  href,
}: {
  lng: string;
  title: string;
  description: string;
  href: string | undefined;
}) {
  const [t] = useTranslation(lng, "common");
  const messages: any = t("messages", { returnObjects: true });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const descriptionPurified = DOMPurify.sanitize(description);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="rounded-md shadow-m bg-transparent flex flex-col h-full popup-card font-montserrat">
      {href != undefined ? (
        <div className="relative group cursor-pointer" onClick={openModal}>
          <div className="absolute inset-0 z-10 rounded-t-lg bg-dark text-light text-sm text-center flex flex-col items-center justify-center opacity-0 bg-opacity-60 hover:opacity-100 duration-200">
            {messages["viewInFullscreen"]}
          </div>
          <div className="relative">
            <Image
              src={href}
              alt={`${title} image`}
              className="w-full h-full rounded-t-lg"
              width={375}
              height={210.933}
              priority
            />
          </div>
        </div>
      ) : null}
      <div className="px-6 py-4 text-light">
        <div className="font-bold text-lg mb-2 uppercase text-center">
          {title}
        </div>
        <div className="px-4 text-sm">
          <p dangerouslySetInnerHTML={{ __html: descriptionPurified }} />
        </div>
      </div>
      {href != undefined ? (
        <Modal
          closable
          showCloseIcon
          size="2xl"
          background="transparent"
          isOpen={isModalOpen}
          onClose={closeModal}
        >
          <div>
            <Image
              src={href}
              alt={`${title} image`}
              className="w-full h-full"
              width={1000}
              height={1335.933}
              priority
            />
          </div>
        </Modal>
      ) : null}
    </div>
  );
}
