import { getJSONFile } from "@/app/_actions/common";
import { configPath, configPathI18n } from "../../../config/params";
import { mergeData } from "./common";

export interface Point {
  id: string;
  resource: string;
  category: string;
  tag: string;
  position: Array<number>;
}
export interface PointText {
  title: string;
  description?: string;
}
export interface MapPoint {
  id: string;
  lat: number;
  lng: number;
  title: string;
  tag: string;
  description: string;
  iconPath: string;
  resourcePath?: string;
}

export async function getPoints(mapId: string): Promise<Point[]> {
  return getJSONFile(`${configPath}/maps/${mapId}/points.json`);
}

function getPointsTextByLang(mapId: string, lang: string) {
  return getJSONFile(`${configPathI18n}/${lang}/maps/${mapId}/points.json`);
}

export async function getMapPoints(
  mapId: string,
  points: Point[],
  lang: string
): Promise<{ [tag: string]: MapPoint[] }> {
  const pointsText = await getPointsTextByLang(mapId, lang);
  let pointsData = mergeData(points, pointsText);
  pointsData = pointsData.map((point) => {
    const [lat, lng] = point.position;
    return {
      id: point.id,
      lat: lat,
      lng: lng,
      title: point.title,
      description: point.description,
      tag: point.tag,
      iconPath: `/images/icons/points/${point.tag}.svg`,
      resourcePath: point.resource
        ? `/images/maps/${mapId}/resources/${point.resource}`
        : undefined,
    };
  });
  const pointsDataByTag: { [tag: string]: MapPoint[] } = {};
  pointsData.forEach((point) => {
    if (pointsDataByTag[point.tag]) {
      pointsDataByTag[point.tag].push(point);
    } else {
      pointsDataByTag[point.tag] = [point];
    }
  });
  return pointsDataByTag;
}
