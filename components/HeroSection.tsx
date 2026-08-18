'use client';

import { useTranslations } from 'next-intl';
import { MessageCircle } from 'lucide-react';
import Image from 'next/image';

export function HeroSection() {
  const t = useTranslations('hero');

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(t('whatsappMessage'));
    const phone = '5511999999999'; // Substituir pelo número real
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">
          {/* Avatar */}
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden ring-4 ring-purple-500/50 shadow-2xl shadow-purple-500/50">
            <Image
              src="/avatar.svg"
              alt="Manu Cavalcanti"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Title */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
              {t('title')}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                {t('titleHighlight')}
              </span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-slate-300 max-w-2xl mx-auto">
              {t('subtitle')}
            </p>
          </div>

          {/* CTA Button */}
          <button
            onClick={handleWhatsAppClick}
            className="group relative inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/60 hover:scale-105"
          >
            <MessageCircle className="w-6 h-6" />
            {t('cta')}
          </button>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex items-start justify-center p-2">
              <div className="w-1.5 h-3 bg-purple-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
