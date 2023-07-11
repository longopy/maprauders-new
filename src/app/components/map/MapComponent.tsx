"use client";

import "leaflet/dist/leaflet.css";
import { MapContainer, ZoomControl } from "react-leaflet";
import "../../../styles/map.css";
import { ImageLayerComponent } from "@/app/components/map/ImageLayerComponent";
import { CRS, svg } from "leaflet";

export function MapComponent({
  zoom,
  minZoom,
  maxZoom,
  center,
  padding,
  imageDimensions,
  imagePath,
}: {
  zoom: number;
  minZoom: number;
  maxZoom: number;
  center: Array<number>;
  padding: Array<number>;
  imageDimensions: Array<number>;
  imagePath: string;
}) {
  return (
    <MapContainer
      crs={CRS.Simple}
      zoom={zoom}
      minZoom={minZoom}
      maxZoom={maxZoom}
      scrollWheelZoom={false}
      zoomControl={false}
      attributionControl={false}
      renderer={svg()}
    >
      <ZoomControl position={"bottomright"} />
      <ImageLayerComponent
        padding={padding}
        imageDimensions={imageDimensions}
        imagePath={imagePath}
      />
    </MapContainer>
  );
}
