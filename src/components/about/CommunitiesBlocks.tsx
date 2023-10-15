import CollaboratorCard from "./CollaboratorCard";
import CommunityCard from "./CommunityCard";

export function CommunitiesBlocks({ lng }: { lng: string }) {
  return (
    <section className="relative">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
      <div>
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
          <h2 className="h2 mb-4 dark:text-accent">
              Una herramienta de la comunidad, para la comunidad
            </h2>
            <p className="text-lg">
              Nos atrajo mucho la idea de tener un mapa interactivo donde poder
              ver los puntos de interés de la comunidad, y que además, se
              pudiera acceder a ellos de forma rápida y sencilla. Un lugar donde
              encontrar toda la información necesaria para moverte dentro de las incursiones.
            </p>
          <h2 className="h2 mb-4 mt-10 dark:text-accent">
            ¡Las comunidades se apoyan unas a otras!
            </h2>
            <p className="text-lg">
            En este proyecto hay varias comunidades involucradas ya sea directamente o indirectamente.
            </p>
          </div>
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-4 items-start md:max-w-2xl lg:max-w-none">
            <CommunityCard
              lng={lng}
              name={"Marauders Official"}
              img={`/images/about/collaborators/ahtu.jpg`}
              social={{ twitter: "https://discord.gg/marauders" }}
            />
           <CommunityCard
              lng={lng}
              name={"Marauders Compendium"}
              img={`/images/about/collaborators/ahtu.jpg`}
              social={{ discord: "https://discord.gg/BrEm9P88BA" }}
            />
             <CommunityCard
              lng={lng}
              name={"Marauders Wiki"}
              img={`/images/about/collaborators/ahtu.jpg`}
              social={{ url: "https://marauders.fandom.com/wiki/Marauders_Wiki" }}
            />
             <CommunityCard
              lng={lng}
              name={"Comunidad Hispana Marauders"}
              img={`/images/about/collaborators/ahtu.jpg`}
              social={{ discord: "https://discord.gg/aUyFbjYnt8" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
