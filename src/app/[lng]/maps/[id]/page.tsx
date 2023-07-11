import { Header } from "@/app/components/map/Header";

// @ts-ignore: Params
export default function Map({ params }) {
  const { lng, id } = params;
  return (
    <div>
      <Header lng={lng} />
    </div>
  );
}
