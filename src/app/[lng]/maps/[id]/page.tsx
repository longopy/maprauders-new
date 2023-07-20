import {
  OutputCategory,
  getCategoriesFilteredAndCounted,
} from "@/app/_actions/category";
import { Label, getLabels, getMapLabels } from "@/app/_actions/label";
import { getMapConfigById } from "@/app/_actions/mapConfig";
import { MapPoint, Point, getMapPoints, getPoints } from "@/app/_actions/point";
import { Header } from "@/components/common/Header";
import TagSelectorMap from "@/components/map/TagSelectorMap";

export default async function MapPage({ params }: { params: any }) {
  const { lng, id } = params;
  const points: Point[] = await getPoints(id);
  const labels: Label[] = await getLabels(id);
  const categories: OutputCategory[] = await getCategoriesFilteredAndCounted(
    id,
    points
  );
  const mapPoints: { [tag: string]: MapPoint[] } = await getMapPoints(
    id,
    points,
    lng
  );
  const mapLabels = await getMapLabels(id, labels, lng)
  const mapConfig: any = getMapConfigById(id);
  return (
    <div>
      <Header lng={lng} themeSwitcher={false} />
      <TagSelectorMap
        lng={lng}
        mapConfig={mapConfig}
        categories={categories}
        points={mapPoints}
        labels={mapLabels}
      />
    </div>
  );
}
