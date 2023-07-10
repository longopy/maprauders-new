import Image from "next/image";
interface MenuItem {
  title: string;
  description: string;
  href: string;
}

export default function MapCard({ title, description, href }: MenuItem) {
  return (
      <div className="rounded-md shadow-lg bg-white dark:bg-dark hover:border-accent border-transparent border-2 cursor-pointer flex flex-col h-full group">
        <Image
          src={href}
          alt={title}
          className="w-full h-full rounded-md"
          width={640}
          height={75}
          priority
        />
        <div className="px-6 py-4">
          <div className="font-bold text-lg mb-2 text-black dark:text-light uppercase text-center group-hover:text-xl">
            {title}
          </div>
          <p className="text-dark dark:text-gray-300 text-base text-center ">
            {description}
          </p>
        </div>
      </div>
  );
}
