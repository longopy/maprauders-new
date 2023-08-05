import { MapPoint } from "@/app/_actions/point";
import { Marker } from "@/components/map/Marker";
import { use, useEffect, useState } from "react";
import { FeatureGroup, LayerGroup, LayersControl, useMap } from "react-leaflet";

export default function MapFeatureGroup({
  lng,
  points,
  selectedTags,
}: {
  lng: string;
  points: { [tag: string]: MapPoint[] };
  selectedTags: string[];
}) {
  return (
    <LayerGroup>
      {Object.keys(points).map((tag) => {
        if (selectedTags.includes(tag)) {
          return (
            <FeatureGroup key={`${tag}-feature-group`}>
              {points[tag].map((point) => (
                <Marker key={point.id} lng={lng} point={point} />
              ))}
            </FeatureGroup>
        );
        }
      })}
    </LayerGroup>
  );
}
