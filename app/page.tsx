import Hero from './components/Hero';
import CollectionsGrid from './components/CollectionsGrid';
import Navigation from './components/Navigation';

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      <Hero />
      <CollectionsGrid />
    </main>
  );
}
