import { languages } from "@/i18n/settings";
import { dir } from "i18next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Providers from "@/app/[lng]/providers";
import { useTranslation } from "@/i18n/index";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Maprauders",
  description: "Marauders Interactive Maps",
  keywords: [
    "Marauders",
    "Game",
    "Exfill Shooter",
    "FPS",
    "Community",
    "Map",
    "Maps",
    "Interactive",
    "Kickflip",
  ],
  authors: [
    {
      name: "longopy",
      url: "https://github.com/longopy",
    },
  ],
  creator: "longopy",
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
      <body className={inter.className}>
        <Providers>{children}</Providers>
        <div id="modal-portal" />
      </body>
    </html>
  );
}
