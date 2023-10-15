import CollaboratorCard from "@/components/about/CollaboratorCard";
import { CollaboratorsBlocks } from "@/components/about/CollaboratorsBlocks";
import { CommunitiesBlocks } from "@/components/about/CommunitiesBlocks";
import { Header } from "@/components/common/Header";

export default function AboutPage({ params }: { params: any }) {
  const { lng } = params;
  return (
    <main>
      <Header lng={params.lng} themeSwitcher={true} />
      <div className="py-12">
        <CommunitiesBlocks lng={params.lng} />
        <CollaboratorsBlocks lng={params.lng} />
      </div>
    </main>
  );
}
