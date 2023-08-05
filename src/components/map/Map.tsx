"use client";

import { MapPoint } from "@/app/_actions/point";
import { ImageLayer } from "@/components/map/ImageLayer";
import { reportProblemUrl } from "@/config/params";
import { useTranslation } from "@/i18n/client";
import "@/styles/map.css";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { CRS, LatLng, latLngBounds } from "leaflet";
import "leaflet/dist/leaflet.css";
import Link from "next/link";
import { MapContainer, ZoomControl } from "react-leaflet";
import MapFeatureGroup from "@/components/map/MapFeatureGroup";
import MapLabelGroup from "@/components/map/MapLabelGroup";
import { MapLabel } from "@/app/_actions/label";

export function Map({
  lng,
  selectedTags,
  points,
  labels,
  zoom,
  minZoom,
  maxZoom,
  padding,
  imageDimensions,
  imagePath,
}: {
  lng: string;
  selectedTags: string[];
  points: { [tag: string]: MapPoint[] };
  labels: MapLabel[];
  zoom: number;
  minZoom: number;
  maxZoom: number;
  padding: Array<number>;
  imageDimensions: Array<number>;
  imagePath: string;
}) {
  const { t } = useTranslation(lng, "common");
  const messages: any = t("messages", { returnObjects: true });
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
    <div>
      <MapContainer
        crs={CRS.Simple}
        zoom={zoom}
        minZoom={minZoom}
        maxZoom={maxZoom}
        center={center}
        scrollWheelZoom={true}
        zoomControl={false}
        attributionControl={false}
        // TODO: maxBounds doesnt work properly with tooltip autopan (maxbounds or autopan)?
        // maxBounds={imageBounds}
        doubleClickZoom={true}
      >
        <ZoomControl position={"bottomright"} />
        <ImageLayer imageDimensions={imageDimensions} imagePath={imagePath} />
        <MapLabelGroup labels={labels} />
        <MapFeatureGroup
          lng={lng}
          points={points}
          selectedTags={selectedTags}
        />
      </MapContainer>
      <Link
        href={reportProblemUrl}
        target="_blank"
        title={messages["reportProblem"]}
      >
        <div className="bg-dark hover:bg-accent p-2 rounded-md border-accent border absolute top-20 mt-4 right-6 z-10">
          <ExclamationTriangleIcon className="h-5 w-5 text-white" />
        </div>
      </Link>
    </div>
  );
}
