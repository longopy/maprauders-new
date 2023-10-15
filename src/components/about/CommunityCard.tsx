"use client";
import { useTranslation } from "@/i18n/client";
import Image from "next/image";
export default function CommunityCard({
  lng,
  name,
  img,
  social,
}: {
  lng: string;
  name: string;
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
            alt={`${name} profile image`}
            className="rounded-lg m-auto border-accent border-2"
            width={80}
            height={80}
            priority
          />
        </div>
        <div className="font-bold text-lg mb-2 text-center group-hover:text-accent">
          {name}
        </div>
      </div>
    </div>
  );
}
