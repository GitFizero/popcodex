'use client';

import { Suspense, lazy } from 'react';
import { TooltipProvider } from "@/crimson-desert-wiki/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from './context/AppContext';
import { I18nProvider } from './context/I18nContext';
import NavBar from './components/NavBar';
import ScrollProgress from './components/ScrollProgress';
import SearchOverlay from './components/SearchOverlay';
import Footer from './components/Footer';
import PageTransition from './components/PageTransition';

const ParticleCanvas = lazy(() => import('./components/ParticleCanvas'));
const EasterEggs = lazy(() => import('./components/EasterEggs'));
import { Toaster } from "@/crimson-desert-wiki/components/ui/sonner";

const Index = lazy(() => import('./pages/Index'));
const Characters = lazy(() => import('./pages/Characters'));
const Story = lazy(() => import('./pages/Story'));
const World = lazy(() => import('./pages/World'));
const Combat = lazy(() => import('./pages/Combat'));
const Lore = lazy(() => import('./pages/Lore'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogArticle = lazy(() => import('./pages/BlogArticle'));
const Guides = lazy(() => import('./pages/Guides'));
const Glossary = lazy(() => import('./pages/Glossary'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Items = lazy(() => import('./pages/Items'));
const Mounts = lazy(() => import('./pages/Mounts'));
const Quests = lazy(() => import('./pages/Quests'));
const About = lazy(() => import('./pages/About'));
const Buy = lazy(() => import('./pages/Buy'));
const Weapons = lazy(() => import('./pages/Weapons'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const NotFound = lazy(() => import('./pages/NotFound'));

const queryClient = new QueryClient();

const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="font-display text-lg text-gold-mid animate-pulse">Chargement...</div>
  </div>
);

interface CrimsonDesertAppProps {
  basename?: string;
}

const CrimsonDesertApp = ({ basename = '/' }: CrimsonDesertAppProps) => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter basename={basename}>
        <I18nProvider>
          <AppProvider>
            <div className="crimson-desert-wiki">
              <Suspense fallback={null}><EasterEggs /></Suspense>
              <ScrollProgress />
              <Suspense fallback={null}><ParticleCanvas /></Suspense>
              <div className="vignette" />
              <NavBar />
              <SearchOverlay />
              <Suspense fallback={<LoadingFallback />}>
                <PageTransition>
                  <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/characters" element={<Characters />} />
                    <Route path="/story" element={<Story />} />
                    <Route path="/world" element={<World />} />
                    <Route path="/combat" element={<Combat />} />
                    <Route path="/lore" element={<Lore />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog/:slug" element={<BlogArticle />} />
                    <Route path="/guides" element={<Guides />} />
                    <Route path="/glossary" element={<Glossary />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/items" element={<Items />} />
                    <Route path="/mounts" element={<Mounts />} />
                    <Route path="/quests" element={<Quests />} />
                    <Route path="/weapons" element={<Weapons />} />
                    <Route path="/buy" element={<Buy />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/privacy" element={<PrivacyPolicy />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </PageTransition>
              </Suspense>
              <Footer />
              <Toaster position="bottom-right" theme="dark" />
            </div>
          </AppProvider>
        </I18nProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default CrimsonDesertApp;
