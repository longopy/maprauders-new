import CollaboratorCard from "@/components/about/CollaboratorCard";
import { Header } from "@/components/common/Header";

export default function AboutPage({ params }: { params: any }) {
  const { lng } = params;
  return (
    <div>
      <Header lng={params.lng} themeSwitcher={true} />
      <main className="flex flex-col items-center justify-between pt-2 m-5">
        <div className="mx-20">
        <h1 className="mt-10 text-center text-lg">
          Esta aplicación surge como una necesidad dentro de la comunidad de
          Marauders.
        </h1>
        <p className="mt-7 mx-20 text-center pd-5">
          Nos atrajo mucho la idea de tener un mapa interactivo donde
          poder ver los puntos de interés de la comunidad, y que además, se
          pudiera acceder a ellos de forma rápida y sencilla.
          Un lugar donde encontrar toda la información necesaria para moverte por cada de los mapas.
        </p>
        <p className="mt-7 mx-20 text-center pd-5">
          El contenido de esta aplicación es creado por la comunidad, y para la comunidad.
        </p>
        <p className="mt-7 mx-20 text-center pd-5">
          Aquí podrás encontrar a todas las personas involucradas en el proyecto, así como sus redes sociales.
        </p>
        </div>
        <div className="container my-12 items-center content-center">
          <div className="grid mx-14 sm:grid-cols-1 gap-10 lg:grid-cols-2 xl:grid-cols-4">
            <CollaboratorCard
              lng={lng}
              username={"longopy"}
              role={"Developer"}
              img={`/images/about/collaborators/ahtu.jpg`}
              social={{ twitter: "https://twitter.com/ahtu_" }}
            />
            <CollaboratorCard
              lng={lng}
              username={"monkey_business"}
              role={"Developer"}
              img={`/images/about/collaborators/ahtu.jpg`}
              social={{ twitter: "https://twitter.com/ahtu_" }}
            />
            <CollaboratorCard
              lng={lng}
              username={"Ahtu"}
              role={"Map creator"}
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
      </main>
    </div>
  );
}
