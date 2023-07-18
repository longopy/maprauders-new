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

export function getAllTags(categories: OutputCategory[]): string[] {
  const tags: string[] = [];
  categories.forEach((category) => {
    category.tags.forEach((tag) => {
      if (!tags.includes(tag.id)) {
        tags.push(tag.id);
      }
    });
  });
  return tags;
}
