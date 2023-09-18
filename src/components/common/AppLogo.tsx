import Image from "next/image";
export default function AppLogo() {
  return (
    <Image
      src="/images/logos/maprauders.svg"
      alt="Maprauders Logo"
      width={200}
      height={33.333}
      priority
    />
  );
}
