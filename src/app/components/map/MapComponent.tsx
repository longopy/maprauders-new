"use client";

import "leaflet/dist/leaflet.css";
import { MapContainer, ZoomControl, useMap } from "react-leaflet";
import "../../../styles/map.css";
import { ImageLayerComponent } from "@/app/components/map/ImageLayerComponent";
import { CRS, LatLng, latLngBounds } from "leaflet";
import { useState, useEffect } from "react";

export function MapComponent({
  zoom,
  minZoom,
  padding,
  imageDimensions,
  imagePath,
}: {
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
      </MapContainer>
  );
}
