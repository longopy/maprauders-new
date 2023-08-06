import { MapPoint } from "@/app/_actions/point";
import PopupCardComponent from "@/components/map/PopupCard";
import { Icon, LatLng, PointExpression } from "leaflet";
import { Marker as LeafletMarker, Popup, Tooltip } from "react-leaflet";

const iconSize: PointExpression = [32.2, 45.5];

const pointerIcon = (iconPath: string, zIndex: number) => {
  const [width, height] = iconSize as [number, number]
  return new Icon({
    className: "marker-icon",
    iconUrl: iconPath,
    iconSize: iconSize,
    iconAnchor: [width-15.7, height],
    popupAnchor: [0, -height+4],
    setZIndexOffset: zIndex,
  });
};

const markerMouseOver = (e: any, iconPath: string) => {
  e.target.setIcon(pointerIcon(iconPath, 1000));
};

export function Marker({lng,  point }: {lng:string, point: MapPoint }) {
  const position = new LatLng(point.lat, point.lng);
  const icon = pointerIcon(point.iconPath, 1);
  return (
    <LeafletMarker
      key={point.id}
      position={position}
      icon={icon}
      zIndexOffset={1000}
      eventHandlers={{
        mouseover: (e) => markerMouseOver(e, point.iconPath),
      }}
    >
      <Tooltip
        className="tooltip tooltip-name"
        direction="right"
        offset={[14.7, -30]}
      >
        <span className="font-bold uppercase">{point.title}</span>
      </Tooltip>
      <Popup
        className="popup popup-info"
        minWidth={375}
        closeOnEscapeKey={true}
        closeOnClick={true}
      >
        <PopupCardComponent
          lng={lng}
          title={point.title}
          description={point.description}
          href={point.resourcePath}
        />
      </Popup>
    </LeafletMarker>
  );
}
