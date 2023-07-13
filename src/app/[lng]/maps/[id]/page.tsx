import { HeaderComponent } from "@/app/components/common/HeaderComponent";
import { MapComponent } from "@/app/components/map/MapComponent";
import { SidebarComponent } from "@/app/components/common/SidebarComponent";
import { TagSelectorComponent } from "@/app/components/map/TagSelectorComponent";
import categoriesConfig from "@/app/config/categories.json";

// @ts-ignore: Params
export default function MapPage({ params }) {
  const { lng, id } = params;
  let categories: Array<object> = []
  categoriesConfig.map((categoryItem: any) => {
    let tags: Array<object> = [];
    categoryItem["tags"].map((tagItem: any) => {
      tags.push({'id': tagItem, 'qty': 10});
    });
    categories.push({id: categoryItem["id"], color: categoryItem["color"], tags: tags});
  });
  return (
    <div>
      <div className="fixed z-20 w-full">
        <HeaderComponent lng={lng} themeSwitcher={false} />
      </div>
      <SidebarComponent component={<TagSelectorComponent categories={categories} lng={lng} />} />
      <MapComponent
        zoom={-2}
        minZoom={-2}
        padding={[600, 600]}
        imageDimensions={[1172.03, 792.57]}
        imagePath={`/images/maps/${id}/map.svg`}
      />
    </div>
  );
}
