import { configPathI18n } from "@/config/params";
import { getJSONFile } from "./common";

export function getMenuItems(lng: string) {
  return getJSONFile(`${configPathI18n}/${lng}/maps.json`);
}
