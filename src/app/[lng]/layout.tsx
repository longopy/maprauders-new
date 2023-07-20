import Providers from "@/app/[lng]/providers";
import { languages } from "@/i18n/settings";
import "@/styles/globals.css";
import { dir } from "i18next";
import type { Metadata } from "next";

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
      <body>
        <Providers>{children}</Providers>
        <div id="modal-portal" />
      </body>
    </html>
  );
}
