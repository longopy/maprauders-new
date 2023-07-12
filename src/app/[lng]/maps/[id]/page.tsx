import { Header } from "@/app/components/map/Header";
import { MapComponent } from "@/app/components/map/MapComponent";
import { promises as fs } from "fs";

// @ts-ignore: Params
export default function MapPage({ params }) {
  const { lng, id } = params;
  return (
    <div>
      <Header lng={lng} />
      <MapComponent
        zoom={-2}
        minZoom={-2}
        padding={[150, 150]}
        imageDimensions={[1172.03, 792.57]}
        imagePath={`/images/maps/${id}/map.svg`}
      />
    </div>
  );
}
