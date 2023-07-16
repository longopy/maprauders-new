import { Header } from "@/components/common/Header";

// @ts-ignore params
export default function AboutPage({ params }) {
  return (
    <div>
      <Header lng={params.lng} themeSwitcher={true} />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        About the project
      </main>
    </div>
  );
}
