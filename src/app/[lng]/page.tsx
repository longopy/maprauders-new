import { Header } from '@/app/components/common/Header';

// @ts-ignore params
export default function HomePage({params}) {
  return (
    <div>
      <Header lng={params.lng} />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>Home</div>
      </main>
    </div>
  );
}
