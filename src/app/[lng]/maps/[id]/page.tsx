import { OutputCategory, getCategoriesFilteredAndCounted } from "@/app/_actions/category";
import { MapPoint, Point, getMapPoints, getPoints } from "@/app/_actions/point";
import { Header } from "@/components/common/Header";
import { Sidebar } from "@/components/common/Sidebar";
import { Map } from "@/components/map/Map";
import { TagSelector } from "@/components/map/TagSelector";

// @ts-ignore: Params
export default async function MapPage({ params }) {
  const { lng, id } = params;
  const points: Point[] = await getPoints(id);
  const categories: OutputCategory[] = await getCategoriesFilteredAndCounted(
    id,
    points
  );
  const mapPoints: MapPoint[] = await getMapPoints(points, id, lng);
  return (
    <div>
      <Header lng={lng} themeSwitcher={false} />
      <Sidebar component={<TagSelector categories={categories} lng={lng} />} />
      <div className="h-full">
        <Map
          lng={lng}
          points={mapPoints}
          // TODO: load data from config map file
          zoom={-2}
          minZoom={-2}
          padding={[600, 600]}
          imageDimensions={[1172.03, 792.57]}
          imagePath={`/images/maps/${id}/map.svg`}
        />
      </div>
    </div>
  );
}
