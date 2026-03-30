'use client';

import { Suspense, lazy } from 'react';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from '@/fable-wiki/context/AppContext';
import { I18nProvider } from '@/fable-wiki/context/I18nContext';
import NavBar from '@/fable-wiki/components/NavBar';
import ScrollProgress from '@/fable-wiki/components/ScrollProgress';
import SearchOverlay from '@/fable-wiki/components/SearchOverlay';
import Footer from '@/fable-wiki/components/Footer';
import PageTransition from '@/fable-wiki/components/PageTransition';

const FireflyCanvas = lazy(() => import('@/fable-wiki/components/FireflyCanvas'));
const EasterEggs = lazy(() => import('@/fable-wiki/components/EasterEggs'));

const Index = lazy(() => import('@/fable-wiki/pages/Index'));
const Characters = lazy(() => import('@/fable-wiki/pages/Characters'));
const Story = lazy(() => import('@/fable-wiki/pages/Story'));
const World = lazy(() => import('@/fable-wiki/pages/World'));
const Combat = lazy(() => import('@/fable-wiki/pages/Combat'));
const Lore = lazy(() => import('@/fable-wiki/pages/Lore'));
const Blog = lazy(() => import('@/fable-wiki/pages/Blog'));
const BlogArticle = lazy(() => import('@/fable-wiki/pages/BlogArticle'));
const Guides = lazy(() => import('@/fable-wiki/pages/Guides'));
const Glossary = lazy(() => import('@/fable-wiki/pages/Glossary'));
const Gallery = lazy(() => import('@/fable-wiki/pages/Gallery'));
const Items = lazy(() => import('@/fable-wiki/pages/Items'));
const Mounts = lazy(() => import('@/fable-wiki/pages/Mounts'));
const Quests = lazy(() => import('@/fable-wiki/pages/Quests'));
const About = lazy(() => import('@/fable-wiki/pages/About'));
const Buy = lazy(() => import('@/fable-wiki/pages/Buy'));
const Weapons = lazy(() => import('@/fable-wiki/pages/Weapons'));
const PrivacyPolicy = lazy(() => import('@/fable-wiki/pages/PrivacyPolicy'));
const NotFound = lazy(() => import('@/fable-wiki/pages/NotFound'));

const queryClient = new QueryClient();

const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="font-display text-lg text-emerald-400 animate-pulse">Chargement...</div>
  </div>
);

interface FableAppProps {
  basename?: string;
}

const FableApp = ({ basename = '/' }: FableAppProps) => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter basename={basename}>
      <I18nProvider>
        <AppProvider>
          <div className="fable-wiki">
            <Suspense fallback={null}><EasterEggs /></Suspense>
            <ScrollProgress />
            <Suspense fallback={null}><FireflyCanvas /></Suspense>
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
          </div>
        </AppProvider>
      </I18nProvider>
    </BrowserRouter>
  </QueryClientProvider>
);

export default FableApp;
