'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Play, ExternalLink } from 'lucide-react';

type PortfolioItem = {
  id: string;
  title: string;
  category: 'shorts' | 'long' | 'motion';
  thumbnail: string;
  videoUrl: string;
  platform: 'youtube' | 'vimeo' | 'instagram';
};

// Portfólio real da Manu Cavalcanti
const portfolioItems: PortfolioItem[] = [
  {
    id: '1',
    title: 'XAROLA',
    category: 'shorts',
    thumbnail: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/ad9b95211435831.Y3JvcCwyMzY5LDE4NTMsMCw5Nw.png',
    videoUrl: 'https://www.behance.net/gallery/211435831/XAROLA',
    platform: 'youtube',
  },
  {
    id: '2',
    title: 'Bladez',
    category: 'long',
    thumbnail: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/f25cf1226171231.Y3JvcCwyNDAwLDE4NzcsMCwxNjE.png',
    videoUrl: 'https://www.behance.net/gallery/226171231/Bladez',
    platform: 'youtube',
  },
  {
    id: '3',
    title: 'Myn',
    category: 'motion',
    thumbnail: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/80bb62230736521.Y3JvcCwyNDAwLDE4NzcsMCwxMjE.png',
    videoUrl: 'https://www.behance.net/gallery/230736521/Myn',
    platform: 'youtube',
  },
  {
    id: '4',
    title: 'oifrancine',
    category: 'shorts',
    thumbnail: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/5f1e93226170321.Y3JvcCwyMzY5LDE4NTMsMCw5Nw.png',
    videoUrl: 'https://www.behance.net/gallery/226170321/oifrancine',
    platform: 'youtube',
  },
  {
    id: '5',
    title: 'Crocodilovlr',
    category: 'motion',
    thumbnail: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/419ba4211434349.Y3JvcCwyMzY5LDE4NTMsMCw5Nw.png',
    videoUrl: 'https://www.behance.net/gallery/211434349/Crocodilovlr',
    platform: 'youtube',
  },
  {
    id: '6',
    title: 'Caligrafo',
    category: 'long',
    thumbnail: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/f8c9ff230733483.Y3JvcCwyNDAwLDE4NzcsMCwxMjE.png',
    videoUrl: 'https://www.behance.net/gallery/230733483/Caligrafo',
    platform: 'youtube',
  },
  {
    id: '7',
    title: 'TrovinBala',
    category: 'shorts',
    thumbnail: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/4fbb38230735679.Y3JvcCwyNDAwLDE4NzcsMCwxMjE.png',
    videoUrl: 'https://www.behance.net/gallery/230735679/TrovinBala',
    platform: 'youtube',
  },
  {
    id: '8',
    title: 'eaX Presidas',
    category: 'long',
    thumbnail: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/e07a95224258087.Y3JvcCwyNDAwLDE4NzcsMCwxNjE.png',
    videoUrl: 'https://www.behance.net/gallery/224258087/eaX-Presidas',
    platform: 'youtube',
  },
  {
    id: '9',
    title: 'Miw_',
    category: 'motion',
    thumbnail: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/5f0bd4219238651.Y3JvcCwyMzY5LDE4NTMsMCw5Nw.png',
    videoUrl: 'https://www.behance.net/gallery/219238651/Miw_',
    platform: 'youtube',
  },
  {
    id: '10',
    title: 'Viqsmvlr',
    category: 'shorts',
    thumbnail: 'https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/aa5da1230734595.Y3JvcCwyNDAwLDE4NzcsMCwxMjE.png',
    videoUrl: 'https://www.behance.net/gallery/230734595/Viqsmvlr',
    platform: 'youtube',
  },
];

export function PortfolioGrid() {
  const t = useTranslations('portfolio');
  const [activeFilter, setActiveFilter] = useState<'all' | 'shorts' | 'long' | 'motion'>('all');

  const filters = [
    { key: 'all' as const, label: t('filters.all') },
    { key: 'shorts' as const, label: t('filters.shorts') },
    { key: 'long' as const, label: t('filters.long') },
    { key: 'motion' as const, label: t('filters.motion') },
  ];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  const getPlatformName = (platform: string) => {
    const names: Record<string, string> = {
      youtube: 'Behance',
      vimeo: 'Vimeo',
      instagram: 'Instagram',
    };
    return names[platform] || platform;
  };

  return (
    <section className="py-20 bg-slate-950">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            {t('title')}
          </h2>
          <p className="text-xl text-slate-400">
            {t('subtitle')}
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setActiveFilter(key)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === key
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/50'
                  : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <a
              key={item.id}
              href={item.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-[9/16] md:aspect-video rounded-xl overflow-hidden bg-slate-800 hover:scale-105 transition-all duration-300 shadow-xl"
            >
              {/* Thumbnail */}
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.thumbnail})` }}
              >
                {/* Fallback gradient when no thumbnail */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 to-pink-900/50"></div>
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

              {/* Play icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm group-hover:bg-purple-600 group-hover:scale-110 transition-all duration-300">
                  <Play className="w-8 h-8 text-white fill-white ml-1" />
                </div>
              </div>

              {/* Info */}
              <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <ExternalLink className="w-4 h-4" />
                  <span>{t('watchOn')} {getPlatformName(item.platform)}</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Empty state */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20 text-slate-500">
            <p className="text-lg">Nenhum vídeo encontrado nesta categoria.</p>
          </div>
        )}
      </div>
    </section>
  );
}
