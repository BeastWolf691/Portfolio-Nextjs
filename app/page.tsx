import { Contact } from './_components/Contact';
import { ContactForm } from './_components/FormSuggest';
import { Footer } from './_components/Footer';
import { Header } from './_components/Header';
import { Hero } from './_components/Hero';
import { Skills } from './_components/Skills';
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

      <Spacing size={64} />

      <Skills />

      <Spacing size={64} />

      <Contact />

      <Spacing size={64} />

      <ContactForm />

      <Spacing size={64} />

      <Footer />
    </main>
  );
}
