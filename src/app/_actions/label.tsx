import { getJSONFile } from "@/app/_actions/common";
import { configPath, configPathI18n } from "@/config/params";
import { mergeData } from "./common";

export interface Label {
  id: number;
  size: number;
  fillColor: string;
  outlineColor: string;
  outlineWidth: number;
  rotation: number;
  position: number[];
}
export interface LabelText {
  id: number;
  title: string;
}
export interface MapLabel {
  id: number;
  title: string;
  size: number;
  color: string;
  rotation: number;
  lat: number;
  lng: number;
}

export async function getLabels(mapId: string): Promise<Label[]> {
  return getJSONFile(`${configPath}/maps/${mapId}/labels.json`);
}

function getLabelsTextByLang(mapId: string, lang: string) {
  return getJSONFile(`${configPathI18n}/${lang}/maps/${mapId}/labels.json`);
}

export async function getMapLabels(
  mapId: string,
  labels: Label[],
  lang: string
): Promise<MapLabel[]> {
  const labelsText = await getLabelsTextByLang(mapId, lang);
  let labelsData = mergeData(labels, labelsText);
  labelsData = labelsData.map((label) => {
    const [lat, lng] = label.position;
    return {
      id: label.id,
      title: label.title,
      size: label.size,
      color: label.color,
      rotation: label.rotation,
      lat: lat,
      lng: lng,
    };
  });
  return labelsData;
}
