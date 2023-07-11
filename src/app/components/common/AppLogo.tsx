import Image from "next/image";
export default function AppLogo() {
  return (
    <Image
      src="/logos/maprauders.svg"
      alt="Maprauders Logo"
      width={257.117}
      height={36}
      priority
    />
  );
}
