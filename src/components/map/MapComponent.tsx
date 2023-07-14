"use client";

import { MapPoint } from "@/app/_actions/point";
import { ImageLayerComponent } from "@/components/map/ImageLayerComponent";
import "@/styles/map.css";
import { CRS, LatLng, latLngBounds, point } from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, ZoomControl, useMapEvents } from "react-leaflet";
import { MarkerComponent } from "@/components/map/MarkerComponent";

const generateMarkers = (points: MapPoint[]) => {
  return points.map((point: MapPoint) => (
    <MarkerComponent key={`marker-${point.id}`} point={point} />
  ));
};

export function MapComponent({
  points,
  zoom,
  minZoom,
  padding,
  imageDimensions,
  imagePath,
}: {
  points: MapPoint[];
  zoom: number;
  minZoom: number;
  padding: Array<number>;
  imageDimensions: Array<number>;
  imagePath: string;
}) {
  const center = new LatLng(imageDimensions[0] / 2, imageDimensions[1] / 2);
  const imageBounds = latLngBounds([
    new LatLng(
      -imageDimensions[1] - padding[1],
      -imageDimensions[0] - padding[0]
    ),
    new LatLng(
      imageDimensions[1] + padding[1],
      imageDimensions[0] + padding[0]
    ),
  ]);
  return (
    <MapContainer
      crs={CRS.Simple}
      zoom={zoom}
      minZoom={minZoom}
      center={center}
      scrollWheelZoom={false}
      zoomControl={false}
      attributionControl={false}
      maxBounds={imageBounds}
      doubleClickZoom={false}
    >
      <ZoomControl position={"bottomright"} />
      <ImageLayerComponent
        imageDimensions={imageDimensions}
        imagePath={imagePath}
      />
      {generateMarkers(points)}
    </MapContainer>
  );
}
