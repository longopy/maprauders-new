import { MapLabel } from "@/app/_actions/label";
import { Label } from "@/components/map/Label";
import { FeatureGroup } from "react-leaflet";

export default function MapLabelGroup({
  labels,
}: {
  labels: MapLabel[];
}) {
  return (
    <FeatureGroup key="label-feature-group">
      {labels.map((label) => (
        <Label key={label.id} label={label} />
      ))}
    </FeatureGroup>
  );
}
