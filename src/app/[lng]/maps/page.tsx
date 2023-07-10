import Link from "next/link";
import MenuCard from "@/app/components/maps/MapCard";
import { promises as fs } from "fs";
import { Header } from '@/app/components/common/Header';

const fetchItems = (lng: string) => {
  return fs.readFile(`public/locales/${lng}/menu.json`).then((res) => {
    return JSON.parse(res.toString());
  });
};

// @ts-ignore: Params
export default async function Maps({ params }) {
  const { lng } = params;
  const items = await fetchItems(lng);
  return (
    <div>
      <Header lng={params.lng} />
      <main className="flex flex-col items-center justify-between pt-2">
        <div className="container my-12 items-center content-center">
          <div className="grid mx-14 sm:grid-cols-1 gap-10 lg:grid-cols-2 xl:grid-cols-3">
            {items.map((item: any) => (
              <Link key={item.id} href={`/${lng}/maps/[id]`} as={`/${lng}/maps/${item.id}`}>
                <MenuCard
                  key={item.id}
                  title={item.title}
                  description={item.description}
                  href={item.href}
                />
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
