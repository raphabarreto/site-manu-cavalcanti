'use client';

import { useTranslations } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/routing';
import { Globe } from 'lucide-react';

export function LanguageSwitcher() {
  const t = useTranslations('language');
  const router = useRouter();
  const pathname = usePathname();

  const locales = [
    { code: 'pt', label: t('pt') },
    { code: 'en', label: t('en') },
  ];

  const handleLocaleChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="fixed top-6 right-6 z-40 flex items-center gap-2 bg-slate-800/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-slate-700">
      <Globe className="w-4 h-4 text-slate-400" />
      {locales.map((locale) => (
        <button
          key={locale.code}
          onClick={() => handleLocaleChange(locale.code)}
          className="px-3 py-1 text-sm font-medium rounded-full transition-all duration-300 hover:bg-slate-700 text-slate-300 hover:text-white"
        >
          {locale.label}
        </button>
      ))}
    </div>
  );
}
