import { Header } from '@/components/common/Header';

// @ts-ignore params
export default function HomePage({params}) {
  return (
    <div>
      <Header lng={params.lng} themeSwitcher={true}/>
      <main className="flex flex-col items-center justify-between p-24">
        <div>Home</div>
      </main>
    </div>
  );
}
