import { getJSONFile } from "@/app/_actions/common";
import { configPath } from "@/config/params";
import { Point } from "@/app/_actions/point";

export interface Category {
  id: string;
  color: string;
  tags: Array<string>;
}

export interface OutputCategory {
  id: string;
  color: string;
  tags: OutputTag[];
}

interface OutputTag {
  id: string;
  qty: number;
}

async function getCategories(mapId: string): Promise<Category[]> {
  return await getJSONFile(`${configPath}/categories.json`);
}

export async function get(mapId: string, points: Array<object>) {
  const categories: Array<object> = await getCategories(mapId);
  let categoriesFiltered: Array<object> = [];
  // Filter categories if points contains any of the categories and tags
  // Remove the tags that are not in the points
  // And count the number of points that have the tag and add it to the tag object as qty
  // category structure: {id: "category", tags: ["tag1", "tag2"]}
  // points structure: {id: "point", category: "category", tags: "tag1"}
  points.forEach((point: any) => {
    categories.forEach((category: any) => {
      if (point["category"] === category["id"]) {
        categoriesFiltered.push(category);
      }
    });
  });
}

export async function getCategoriesFilteredAndCounted(
  mapId: string,
  points: Point[]
): Promise<OutputCategory[]> {
  const categories: Category[] = await getCategories(mapId);
  const output: OutputCategory[] = categories
    .filter((category) =>
      points.some((point) => point.category === category.id)
    )
    .map((category) => {
      const tags: OutputTag[] = category.tags
        .filter((tag) =>
          points.some(
            (point) => point.category === category.id && point.tag === tag
          )
        )
        .map((tag) => {
          const qty = points.filter(
            (point) => point.category === category.id && point.tag === tag
          ).length;
          return { id: tag, qty };
        });
      return { id: category.id, color: category.color, tags };
    });

  return output;
}
