import { getCategoriesFilteredAndCounted } from "@/app/_actions/category";
import { MapPoint, getMapPoints, getPoints } from "@/app/_actions/point";
import { HeaderComponent } from "@/components/common/HeaderComponent";
import { SidebarComponent } from "@/components/common/SidebarComponent";
import { MapComponent } from "@/components/map/MapComponent";
import { TagSelectorComponent } from "@/components/map/TagSelectorComponent";
import { Point } from "@/app/_actions/point";
import { OutputCategory } from "@/app/_actions/category";

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
      <HeaderComponent lng={lng} themeSwitcher={false} />
      <SidebarComponent
        component={<TagSelectorComponent categories={categories} lng={lng} />}
      />
      <div className="h-full">
        <MapComponent
          points={mapPoints}
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
