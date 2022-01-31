import Header from '../components/Header';
import Drawer from '../components/Drawer';
import PokemonList from '../components/PokemonList';
import PokemonModal from '../components/PokemonModal';
import { AnimateSharedLayout, AnimatePresence } from 'framer-motion';
import AppContent from '../components/AppContent';

export default function Home() {
  return (
    <>
      <AnimateSharedLayout type="crossfade">
        <AppContent />
        <AnimatePresence>
          <PokemonModal />
        </AnimatePresence>
        <Drawer />
      </AnimateSharedLayout>
    </>
  );
}
