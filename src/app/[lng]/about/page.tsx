import { HeaderComponent } from "@/components/common/HeaderComponent";

// @ts-ignore params
export default function AboutPage({ params }) {
  return (
    <div>
      <HeaderComponent lng={params.lng} themeSwitcher={true} />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        About the project
      </main>
    </div>
  );
}
