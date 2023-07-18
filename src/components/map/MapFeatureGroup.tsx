import { MapPoint } from "@/app/_actions/point";
import { Marker } from "@/components/map/Marker";
import { use, useEffect, useState } from "react";
import { FeatureGroup, LayersControl, useMap } from "react-leaflet";

export default function MapFeatureGroup({
  lng,
  points,
  selectedTags,
  minZoom,
}: {
  lng: string;
  points: { [tag: string]: MapPoint[] };
  selectedTags: string[];
  minZoom: number;
}) {
  return (
    <LayersControl position="topright" collapsed={false}>
      {Object.keys(points).map((tag) => {
        return (
          <LayersControl.Overlay
            key={`${tag}-layer-control`}
            name={tag}
            checked={selectedTags.includes(tag) ? true : false}
          >
            <FeatureGroup key={`${tag}-feature-group`}>
              {points[tag].map((point) => (
                <Marker key={point.id} lng={lng} point={point} />
              ))}
            </FeatureGroup>
          </LayersControl.Overlay>
        );
      })}
    </LayersControl>
  );
}
