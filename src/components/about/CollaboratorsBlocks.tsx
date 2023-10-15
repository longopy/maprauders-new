import CollaboratorCard from "./CollaboratorCard";

export function CollaboratorsBlocks({ lng }: { lng: string }) {
  return (
    <section className="relative">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
      <div>
          <div className="max-w-3xl mx-auto mt-20 text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4 mt-10 dark:text-accent">
            Si quieres unirte, ¡eres bienvenido!
            </h2>
            <p className="text-lg">
            Aquí podrás encontrar a todas las personas involucradas en el
              proyecto. Todas han aportado su granito de arena para que este proyecto sea posible.
            </p>
          </div>
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-4 items-start md:max-w-2xl lg:max-w-none">
            <CollaboratorCard
              lng={lng}
              username={"longopy"}
              role={"Creator"}
              img={`/images/about/collaborators/ahtu.jpg`}
              social={{ twitter: "https://twitter.com/ahtu_" }}
            />
            <CollaboratorCard
              lng={lng}
              username={"monkey_business"}
              role={"Creator"}
              img={`/images/about/collaborators/ahtu.jpg`}
              social={{ twitter: "https://twitter.com/ahtu_" }}
            />
            <CollaboratorCard
              lng={lng}
              username={"Ahtu"}
              role={"Maps creator"}
              img={`/images/about/collaborators/ahtu.jpg`}
              social={{ twitter: "https://twitter.com/ahtu_" }}
            />
            <CollaboratorCard
              lng={lng}
              username={"Flaminganus"}
              role={"Content moderator"}
              img={`/images/about/collaborators/ahtu.jpg`}
              social={{ twitter: "https://twitter.com/ahtu_" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
