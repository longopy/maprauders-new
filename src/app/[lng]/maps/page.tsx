import Link from "next/link";
import MapCardComponent from "@/app/components/maps/MapCardComponent";
import { promises as fs } from "fs";
import { HeaderComponent } from '@/app/components/common/HeaderComponent';

const fetchItems = (lng: string) => {
  return fs.readFile(`src/app/i18n/locales/${lng}/menu.json`).then((res) => {
    return JSON.parse(res.toString());
  });
};

// @ts-ignore: Params
export default async function Maps({ params }) {
  const { lng } = params;
  const items = await fetchItems(lng);
  return (
    <div>
      <HeaderComponent lng={params.lng} themeSwitcher={true}/>
      <main className="flex flex-col items-center justify-between pt-2">
        <div className="container my-12 items-center content-center">
          <div className="grid mx-14 sm:grid-cols-1 gap-10 lg:grid-cols-2 xl:grid-cols-3">
            {items.map((item: any) => (
              <Link key={item.id} href={`/${lng}/maps/[id]`} as={`/${lng}/maps/${item.id}`}>
                <MapCardComponent
                  title={item.title}
                  description={item.description}
                  href={`/images/maps/${item.id}/card.png`}
                />
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
