"use client";
import { OutputCategory } from "@/app/_actions/category";
import { MapConfig } from "@/app/_actions/mapConfig";
import { MapPoint } from "@/app/_actions/point";
import { Sidebar } from "@/components/common/Sidebar";
import { Map } from "@/components/map/Map";
import { TagSelector } from "@/components/map/TagSelector";
import { useEffect, useState } from "react";

function getAllTags(categories: OutputCategory[]): string[] {
  const tags: string[] = [];
  categories.forEach((category) => {
    category.tags.forEach((tag) => {
      if (!tags.includes(tag.id)) {
        tags.push(tag.id);
      }
    });
  });
  return tags;
}

export default function TagSelectorMap({
  lng,
  mapConfig,
  categories,
  points,
}: {
  lng: string;
  mapConfig: MapConfig;
  categories: OutputCategory[];
  points: { [tag: string]: MapPoint[] };
}) {
  const allTags = getAllTags(categories);
  const [selectedTags, setSelectedTags] = useState<string[]>(allTags);
  return (
    <>
      <Sidebar
        component={
          <TagSelector
            lng={lng}
            categories={categories}
            selectedTags={selectedTags}
            setSelectedTags={setSelectedTags}
          />
        }
      />
      <div className="h-full">
        <Map
          lng={lng}
          selectedTags={selectedTags}
          points={points}
          zoom={mapConfig.zoom}
          minZoom={mapConfig.minZoom}
          maxZoom={mapConfig.maxZoom}
          padding={mapConfig.padding}
          imageDimensions={mapConfig.imageDimensions}
          imagePath={`/images/maps/${mapConfig.id}/map.svg`}
        />
      </div>
    </>
  );
}
