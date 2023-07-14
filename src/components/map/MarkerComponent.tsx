import { MapPoint } from "@/app/_actions/point";
import * as DOMPurify from "dompurify";
import {
  Icon,
  LatLng
} from "leaflet";
import { Marker, Popup, Tooltip } from "react-leaflet";

const pointerIcon = (iconPath: string) => {
  return new Icon({
    className: "hover:scale-125",
    iconUrl: iconPath,
    iconSize: [32.2, 45.5],
    iconAnchor: [16.5, 49],
    popupAnchor: [0, -45.5],
  });
};

export function MarkerComponent({ point }: { point: MapPoint }) {
  const position = new LatLng(point.lat, point.lng);
  const icon = pointerIcon(point.iconPath);
  const descriptionPurified = DOMPurify.sanitize(point.description);
  return (
    <Marker key={point.id} position={position} icon={icon}>
      <Tooltip
        className="tooltip tooltip-name"
        direction="right"
        offset={[14.7, -32]}
      >
        <span className="font-bold uppercase">{point.title}</span>
      </Tooltip>
      <Popup className="popup popup-info">
        <div className="p-2">
          <h1 className="font-bold uppercase">{point.title}</h1>
          <p dangerouslySetInnerHTML={{ __html: descriptionPurified }} />
        </div>
      </Popup>
    </Marker>
  );
}
