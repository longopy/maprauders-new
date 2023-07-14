import Image from "next/image";
interface MenuItem {
  title: string;
  description: string;
  href: string;
}

export default function MapCardComponent({title, description, href}: MenuItem) {
  return (
      <div className="rounded-md shadow-md bg-white dark:bg-dark hover:border-accent hover:border-opacity-100 hover:scale-105 border border-zinc-100 dark:border-opacity-20 cursor-pointer flex flex-col h-full group">
        <Image
          src={href}
          alt={`${title} image`}
          className="w-full h-full rounded-t-md"
          width={640}
          height={75}
          priority
        />
        <div className="px-6 py-4 text-black dark:text-light">
          <div className="font-bold text-lg mb-2 uppercase text-center group-hover:text-xl group-hover:text-accent">
            {title}
          </div>
          <p className="text-base text-center ">
            {description}
          </p>
        </div>
      </div>
  );
}
