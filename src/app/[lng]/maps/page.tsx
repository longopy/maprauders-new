import Link from "next/link";
import MapCard from "@/components/menu/MapCard";
import { promises as fs } from "fs";
import { Header } from "@/components/common/Header";
import { configPathI18n } from "@/config/params";
import menuConfig from "@/config/menu.json";
import { mergeData } from "@/app/_actions/common";

const fetchItems = (lng: string) => {
  return fs.readFile(`${configPathI18n}/${lng}/menu.json`).then((res) => {
    return JSON.parse(res.toString());
  });
};

// @ts-ignore: Params
export default async function Maps({ params }) {
  const { lng } = params;
  let items = await fetchItems(lng);
  items = mergeData(menuConfig, items);
  return (
    <div>
      <Header lng={params.lng} themeSwitcher={true} />
      <main className="flex flex-col items-center justify-between pt-2">
        <div className="container my-12 items-center content-center">
          <div className="grid mx-14 sm:grid-cols-1 gap-10 lg:grid-cols-2 xl:grid-cols-3">
            {items.map((item: any) => (
              <Link
                key={item.id}
                href={`/${lng}/maps/[id]`}
                as={`/${lng}/maps/${item.id}`}
              >
                <MapCard
                  lng={lng}
                  title={item.title}
                  description={item.description}
                  href={`/images/maps/${item.id}/card.png`}
                  inProgress={item.inProgress}
                />
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
