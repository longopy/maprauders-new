import { Header } from '@/components/common/Header';

export default function HomePage({ params }: { params: any }) {
  return (
    <div>
      <Header lng={params.lng} themeSwitcher={true}/>
      <main className="flex flex-col items-center justify-between p-24">
        <div>Home</div>
      </main>
    </div>
  );
}
