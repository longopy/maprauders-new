"use client";
import { Category } from '@/components/categories/Category';
import { Tag } from "@/components/categories/Tag";
export function TagSelector({
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
            <Category id={category["id"]} lng={lng} />
            <div className="mt-2 grid grid-cols-2 gap-2 px-2 pb-2">
              {category["tags"].map((tag: any) => (
                <span key={`${tag["id"]}-tag`}>
                  <Tag
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
