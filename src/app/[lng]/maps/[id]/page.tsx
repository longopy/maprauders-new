import { HeaderComponent } from "@/app/components/common/HeaderComponent";
import { MapComponent } from "@/app/components/map/MapComponent";
import { SidebarComponent } from "@/app/components/map/SideBarComponent";

// @ts-ignore: Params
export default function MapPage({ params }) {
  const { lng, id } = params;
  return (
    <div>
      <div className="fixed z-20 w-full">
        <HeaderComponent lng={lng} themeSwitcher={false} />
      </div>
      <SidebarComponent lng={lng} />
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
