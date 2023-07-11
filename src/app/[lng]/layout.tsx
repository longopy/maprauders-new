import { dir } from "i18next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "./providers";
import "../../styles/globals.css";
import { languages } from "@/app/i18n/settings";
import { Suspense } from "react";
import { Loading } from "@/app/components/common/Loading";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Maprauders",
  description: "Marauders Interactive Maps",
};

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lng: string };
}) {
  return (
    <html lang={params.lng} dir={dir(params.lng)}>
      <body
        className={`bg-gradient-to-t to-zinc-200 from-sky-100 dark:from-sky-900 dark:to-dark ${inter.className}`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
