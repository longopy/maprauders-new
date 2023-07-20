import { Category } from "@/components/categories/Category";
import { Tag } from "@/components/categories/Tag";

export function TagSelector({
  lng,
  categories,
  selectedTags,
  setSelectedTags,
}: {
  lng: string;
  categories: Array<object>;
  selectedTags: Array<string>;
  setSelectedTags: Function;
}) {
  const handleClickTag = (tagId: string) => {
    if (selectedTags.includes(tagId)) {
      setSelectedTags(
        selectedTags.filter((selectedTag) => selectedTag !== tagId)
      );
    } else {
      setSelectedTags([...selectedTags, tagId]);
    }
    return undefined;
  };
  const handleClickCategory = (categoryId: string) => {
    const category: any = categories.find((cat: any) => cat.id === categoryId);
    if (!category) {
      return selectedTags; // No se encontró la categoría, no se realizan cambios en selectedTags
    }
    const categoryTags = category.tags.map((tag: any) => tag.id);
    const isCategorySelected = categoryTags.some((tag: any) =>
      selectedTags.includes(tag)
    );
    if (isCategorySelected) {
      setSelectedTags(
        selectedTags.filter((tag) => !categoryTags.includes(tag))
      );
    } else {
      setSelectedTags([...selectedTags, ...categoryTags]);
    }
  };
  function tagIsSelected(tag: string): boolean {
    return selectedTags.includes(tag);
  }
  function categoryIsSelected(categoryId: string): boolean {
    const category: any = categories.find((cat: any) => cat.id === categoryId);
    if (!category) {
      return false;
    }
    return category.tags.some((tag: any) => selectedTags.includes(tag.id));
  }
  return (
    <div>
      {categories.map((category: any) => (
        <span key={`${category["id"]}-tag`}>
          <div
            className={`mx-5 border-${category["id"]}-tag border rounded border-x-0 border-t-0 mb-8`}
          >
            <span
              onClick={(e) => {
                e.preventDefault();
                handleClickCategory(category["id"]);
              }}
            >
              <Category
                id={category["id"]}
                lng={lng}
                selected={categoryIsSelected(category["id"])}
              />
            </span>
            <div className="mt-2 grid grid-cols-2 gap-2 px-2 pb-2">
              {category["tags"].map((tag: any) => (
                <span
                  key={`${tag["id"]}-tag`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleClickTag(tag["id"]);
                  }}
                >
                  <Tag
                    id={tag["id"]}
                    qty={tag["qty"]}
                    lng={lng}
                    selected={tagIsSelected(tag["id"])}
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
