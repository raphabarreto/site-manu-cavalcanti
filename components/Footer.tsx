'use client';

import { useTranslations } from 'next-intl';
import { Camera, Hash, Video, Globe, Mail, MessageCircle } from 'lucide-react';

export function Footer() {
  const t = useTranslations('footer');
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'Instagram',
      icon: Camera,
      url: 'https://instagram.com/steffannemanuu',
      color: 'hover:text-pink-500',
    },
    {
      name: 'Twitter',
      icon: Hash,
      url: 'https://twitter.com/manucavalcannti',
      color: 'hover:text-blue-400',
    },
    {
      name: 'Behance',
      icon: Video,
      url: 'https://behance.net/manucavalcannti',
      color: 'hover:text-blue-600',
    },
    {
      name: 'LinkedIn',
      icon: Globe,
      url: 'https://linkedin.com/in/manucavalcanti',
      color: 'hover:text-blue-500',
    },
  ];

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Olá! Gostaria de conversar sobre edição de vídeos.');
    const phone = '5581992061207';
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 group"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white" />
        <span className="absolute right-full mr-3 px-3 py-1 bg-slate-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          {t('whatsapp')}
        </span>
      </button>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Manu Cavalcanti</h3>
              <p className="text-slate-400">
                {t('tagline')}
              </p>
            </div>

            {/* Social */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">{t('social')}</h4>
              <div className="flex gap-4">
                {socialLinks.map(({ name, icon: Icon, url, color }) => (
                  <a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 text-slate-400 ${color} transition-all duration-300 hover:scale-110`}
                    aria-label={name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">{t('contact')}</h4>
              <div className="space-y-2">
                <a
                  href="mailto:contato@manucavalcanti.com"
                  className="flex items-center gap-2 text-slate-400 hover:text-purple-400 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  {t('email')}
                </a>
                <button
                  onClick={handleWhatsAppClick}
                  className="flex items-center gap-2 text-slate-400 hover:text-green-400 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  {t('whatsapp')}
                </button>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
            <p>© {currentYear} Manu Cavalcanti. {t('rights')}</p>
          </div>
        </div>
      </footer>
    </>
  );
}
