import { configPathI18n } from "../../config/params";
import { getJSONFile } from "./common";
import path from "path";

export function getMenuItems(lng: string) {
  return getJSONFile(path.join(configPathI18n, lng, 'maps.json'));
}
