"use client";
import { TagComponent } from "@/components/categories/TagComponent";
import { CategoryComponent } from '@/components/categories/CategoryComponent';
export function TagSelectorComponent({
categories,
  lng,
}: {
  categories: Array<object>;
  lng: string;
}) {
  return (
    <div>
      {categories.map((category: any) => (
        <span key={`${category["id"]}-tag`}>
          <div
            className={`mx-5 border-${category["id"]}-tag border rounded border-x-0 border-t-0 mb-8`}
          >
            <CategoryComponent id={category["id"]} lng={lng} />
            <div className="mt-2 grid grid-cols-2 gap-2 px-2 pb-2">
              {category["tags"].map((tag: any) => (
                <span key={`${tag["id"]}-tag`}>
                  <TagComponent
                    id={tag["id"]}
                    qty={tag["qty"]}
                    lng={lng}
                  />
                </span>
              ))}
            </div>
          </div>
          <style jsx global>{`
            .border-${category["id"]}-tag {
                border-color: ${category["color"]};
            }
          `}</style>
        </span>
      ))}
    </div>
  );
}
