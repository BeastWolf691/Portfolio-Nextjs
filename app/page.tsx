import { Header } from './_components/Header';
import { Hero } from './_components/Hero';
import { Spacing } from './_components/Spacing';
import { Status } from './_components/Status';


export default function Home() {
  return (
    <main>
      <Header />

      <Spacing size={64} />

      <Hero />

      <Spacing size={64} />
      
      <Status />
    </main>
  );
}
