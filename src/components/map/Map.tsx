"use client";

import { MapPoint } from "@/app/_actions/point";
import { ImageLayer } from "@/components/map/ImageLayer";
import { Marker } from "@/components/map/Marker";
import "@/styles/map.css";
import { CRS, LatLng, latLngBounds } from "leaflet";
import "leaflet/dist/leaflet.css";
import {
  MapContainer,
  ZoomControl
} from "react-leaflet";

const generateMarkers = (lng:string, points: MapPoint[]) => {
  return points.map((point: MapPoint) => (
    <Marker key={`marker-${point.id}`} lng={lng} point={point} />
  ));
};

export function Map({
  lng,
  points,
  zoom,
  minZoom,
  padding,
  imageDimensions,
  imagePath,
}: {
  lng: string;
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
      // TODO: maxBounds doesnt work properly with tooltip autopan (maxbounds or autopan)?
      //maxBounds={imageBounds}
      doubleClickZoom={false}
    >
      <ZoomControl position={"bottomright"} />
      <ImageLayer imageDimensions={imageDimensions} imagePath={imagePath} />
      {generateMarkers(lng, points)}
    </MapContainer>
  );
}
