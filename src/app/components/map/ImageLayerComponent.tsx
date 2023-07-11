"use client";
import { LatLng, latLngBounds } from "leaflet";
import "leaflet/dist/leaflet.css";
import SVG from 'react-inlinesvg';
import { SVGOverlay, useMap } from "react-leaflet";
import "../../../styles/map.css";


export function ImageLayerComponent({
  padding,
  imageDimensions,
  imagePath,
}: {
  padding: Array<number>;
  imageDimensions: Array<number>;
  imagePath: string;
}) {
  const map = useMap();
  let imageBounds = latLngBounds([
    new LatLng(padding[0], padding[1]),
    new LatLng(imageDimensions[0], imageDimensions[1]),
  ]);
  map.fitBounds(imageBounds);
  return (
    <SVGOverlay bounds={imageBounds}>
       <SVG
        src={imagePath}
        width="auto"
        height="auto"
        title="Map image"
      />
    </SVGOverlay>
  );
}
