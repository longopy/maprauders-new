import Image from "next/image";
interface MenuItem {
  title: string;
  description: string;
  href: string;
}

export default function MapCard({ title, description, href }: MenuItem) {
  return (
      <div className="rounded shadow-lg bg-gray-200 dark:bg-dark hover:border-dark border-transparent dark:hover:border-light border-2 cursor-pointer flex flex-col h-full">
        <Image
          src={href}
          alt={title}
          className="w-full"
          width={640}
          height={75}
          priority
        />
        <div className="px-6 py-4">
          <div className="font-bold text-lg mb-2 text-black dark:text-light uppercase text-center">
            {title}
          </div>
          <p className="text-dark dark:text-gray-300 text-base text-center">
            {description}
          </p>
        </div>
      </div>
  );
}
