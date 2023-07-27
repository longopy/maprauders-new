import { Header } from '@/components/common/Header';

export default function HomePage({ params }: { params: any }) {
  return (
    <div>
      <Header lng={params.lng} themeSwitcher={true}/>
      <main className="p-10">
        <h1 className='font-bold text-xl text-center'>Welcome to Maprauders!</h1>
      </main>
    </div>
  );
}
