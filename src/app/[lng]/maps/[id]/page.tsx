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
        zoom={1}
        minZoom={1}
        maxZoom={5}
        center={[5, 5]}
        padding={[600, 650]}
        imageDimensions={[2048, 1080]}
        imagePath={`/images/maps/${id}/map.svg`}
      />
    </div>
  );
}
