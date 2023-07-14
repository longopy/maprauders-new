import { getJSONFile } from "@/app/_actions/common";
import { configPath } from "@/config/params";

export interface Point {
  id: string;
  resource: string;
  category: string;
  tag: string;
  position: Array<number>;
}


export async function getPoints(mapId: string): Promise<Point[]>{
  return getJSONFile(`${configPath}/maps/${mapId}/points.json`);
}
