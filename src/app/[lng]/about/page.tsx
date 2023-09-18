import CollaboratorCard from "@/components/about/CollaboratorCard";
import { CollaboratorsBlocks } from "@/components/about/CollaboratorsBlocks";
import { Header } from "@/components/common/Header";

export default function AboutPage({ params }: { params: any }) {
  const { lng } = params;
  return (
    <main>
      <Header lng={params.lng} themeSwitcher={true} />
      <CollaboratorsBlocks lng={params.lng} />
    </main>
  );
}
