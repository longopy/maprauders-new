import { MapLabel } from "@/app/_actions/label";
import { DivIcon, LatLng } from "leaflet";
import { Marker as LeafletMarker, Tooltip } from "react-leaflet";

export function Label({ label }: { label: MapLabel }) {
  const position = new LatLng(label.lat, label.lng);
  const generateLabel = (label: MapLabel) => {
    return `
      <div
        class="label uppercase cursor-default font-bold font-montserrat"
        style="
            height: 24px;
            width: 200px;
            font-size: ${label.size}px;
            color: ${label.color};
            transform: rotate(${label.rotation}deg);
            transform-origin: 10% 20%;
        ">
            ${label.title.replace(/\n/g, "<br />")}
      </div>
      `;
  };
  return (
    <LeafletMarker
      key={`label-marker-${label.id}`}
      position={position}
      icon={
        new DivIcon({
          iconSize: undefined,
          className: "label-icon",
          html: generateLabel(label),
          iconAnchor: [20, 10],
        })
      }
    ></LeafletMarker>
  );
}
