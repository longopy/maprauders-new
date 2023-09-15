"use client";
import { useTranslation } from "@/i18n/client";
import Image from "next/image";
export default function CollaboratorCard({
  lng,
  username,
  role,
  img,
  social,
}: {
  lng: string;
  username: string;
  role: string;
  img: string;
  social: object;
}) {
  const { t, i18n } = useTranslation(lng, "common");
  const messages: any = t("messages", { returnObjects: true });
  return (
    <div className="relative rounded-md shadow-md bg-white dark:bg-dark hover:border-accent hover:border-opacity-100 hover:scale-105 border border-zinc-100 dark:border-opacity-20 cursor-pointer flex flex-col h-full group p-3">
      <div className="px-6 py-4 text-black dark:text-light">
        <div className="mb-4">
          <Image
            src={img}
            alt={`${username} profile image`}
            className="rounded-full m-auto border-accent border-2"
            width={60}
            height={60}
            priority
          />
        </div>
        <div className="font-bold text-lg mb-2 text-center group-hover:text-accent">
          {username}
        </div>
        <div className="text-center">
          <span className="bg-blue-900 text-white text-sm font-medium mr-2 px-2.5 py-0.5 rounded capitalize inline-flex items-center justify-center">
            {role}
          </span>
        </div>
      </div>
    </div>
  );
}
