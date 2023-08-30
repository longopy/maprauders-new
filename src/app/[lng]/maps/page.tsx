import { mergeData } from "@/app/_actions/common";
import { getMapsConfig } from "@/app/_actions/mapConfig";
import { getMenuItems } from "@/app/_actions/menu";
import { Header } from "@/components/common/Header";
import MapCard from "@/components/menu/MapCard";
import Link from "next/link";

export default async function Maps({ params }: { params: any }) {
  const { lng } = params;
  let items = await getMenuItems(lng);
  const mapsConfig = getMapsConfig();
  items = mergeData(mapsConfig, items);
  return (
    <div>
      <Header lng={params.lng} themeSwitcher={true} />
      <main className="flex flex-col items-center justify-between pt-2">
        <div className="container my-12 items-center content-center">
          <div className="grid mx-14 sm:grid-cols-1 gap-10 lg:grid-cols-2 xl:grid-cols-3">
            {items.map((item: any) => (
              <Link
                key={item.id}
                href={`/${lng}/maps/${item.id}`}
                as={`/${lng}/maps/${item.id}`}
              >
                <MapCard
                  lng={lng}
                  title={item.title}
                  description={item.description}
                  href={`/images/maps/${item.id}/card.webp`}
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
