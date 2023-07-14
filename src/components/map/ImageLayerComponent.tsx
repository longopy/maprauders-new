"use client";
import { LatLng, latLngBounds } from "leaflet";
import "leaflet/dist/leaflet.css";
import SVG from "react-inlinesvg";
import { SVGOverlay, useMap, useMapEvents } from "react-leaflet";
import "@/styles/map.css";

export function ImageLayerComponent({
  imageDimensions,
  imagePath,
}: {
  imageDimensions: Array<number>;
  imagePath: string;
}) {
  const map = useMap();
  const mapEvents = useMapEvents({
    click: (event) => {
      const position: string = JSON.stringify([event.latlng.lat, event.latlng.lng])
      navigator.clipboard.writeText(position);
      console.log(position);
    },
  });
  let imageBounds = latLngBounds([
    new LatLng(-imageDimensions[1], -imageDimensions[0]),
    new LatLng(imageDimensions[1], imageDimensions[0]),
  ]);
  map.fitBounds(imageBounds);
  return (
    <SVGOverlay bounds={imageBounds}>
      <SVG
        className="mt-10"
        src={imagePath}
        width="auto"
        height="auto"
        title="Map image"
      />
    </SVGOverlay>
  );
}
