'use client';

import { Suspense, lazy } from 'react';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from '@/gta-vi-wiki/context/AppContext';
import { I18nProvider } from '@/gta-vi-wiki/context/I18nContext';
import NavBar from '@/gta-vi-wiki/components/NavBar';
import ScrollProgress from '@/gta-vi-wiki/components/ScrollProgress';
import SearchOverlay from '@/gta-vi-wiki/components/SearchOverlay';
import Footer from '@/gta-vi-wiki/components/Footer';
import PageTransition from '@/gta-vi-wiki/components/PageTransition';

const Index = lazy(() => import('@/gta-vi-wiki/pages/Index'));
const Characters = lazy(() => import('@/gta-vi-wiki/pages/Characters'));
const Story = lazy(() => import('@/gta-vi-wiki/pages/Story'));
const World = lazy(() => import('@/gta-vi-wiki/pages/World'));
const Combat = lazy(() => import('@/gta-vi-wiki/pages/Combat'));
const Lore = lazy(() => import('@/gta-vi-wiki/pages/Lore'));
const Blog = lazy(() => import('@/gta-vi-wiki/pages/Blog'));
const BlogArticle = lazy(() => import('@/gta-vi-wiki/pages/BlogArticle'));
const Guides = lazy(() => import('@/gta-vi-wiki/pages/Guides'));
const Glossary = lazy(() => import('@/gta-vi-wiki/pages/Glossary'));
const Gallery = lazy(() => import('@/gta-vi-wiki/pages/Gallery'));
const Items = lazy(() => import('@/gta-vi-wiki/pages/Items'));
const Mounts = lazy(() => import('@/gta-vi-wiki/pages/Mounts'));
const Quests = lazy(() => import('@/gta-vi-wiki/pages/Quests'));
const About = lazy(() => import('@/gta-vi-wiki/pages/About'));
const Buy = lazy(() => import('@/gta-vi-wiki/pages/Buy'));
const Weapons = lazy(() => import('@/gta-vi-wiki/pages/Weapons'));
const Trailers = lazy(() => import('@/gta-vi-wiki/pages/Trailers'));
const PrivacyPolicy = lazy(() => import('@/gta-vi-wiki/pages/PrivacyPolicy'));
const NotFound = lazy(() => import('@/gta-vi-wiki/pages/NotFound'));

const queryClient = new QueryClient();

const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="font-display text-lg animate-pulse" style={{ color: '#FF1493', textShadow: '0 0 20px rgba(255, 20, 147, 0.5)' }}>LOADING...</div>
  </div>
);

interface GtaViAppProps {
  basename?: string;
}

const GtaViApp = ({ basename = '/' }: GtaViAppProps) => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter basename={basename}>
      <I18nProvider>
        <AppProvider>
          <div className="gta-vi-wiki">
            <ScrollProgress />
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
                  <Route path="/trailers" element={<Trailers />} />
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

export default GtaViApp;
