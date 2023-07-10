import Image from "next/image";
export default function AppLogo() {
  return (
    <Image
      src="/logos/maprauders.svg"
      alt="Maprauders Logo"
      width={228.55}
      height={32}
      priority
    />
  );
}
