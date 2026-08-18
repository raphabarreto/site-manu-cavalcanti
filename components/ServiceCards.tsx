'use client';

import { useTranslations } from 'next-intl';
import { Zap, Film, Package, Check } from 'lucide-react';
import { useMessages } from 'next-intl';

const iconMap = {
  shorts: Zap,
  long: Film,
  packages: Package,
};

export function ServiceCards() {
  const t = useTranslations('services');
  const messages = useMessages() as any;

  const services = [
    {
      key: 'shorts',
      icon: Zap,
      gradient: 'from-yellow-500 to-orange-600',
      bgGradient: 'from-yellow-500/10 to-orange-600/10',
    },
    {
      key: 'long',
      icon: Film,
      gradient: 'from-blue-500 to-cyan-600',
      bgGradient: 'from-blue-500/10 to-cyan-600/10',
    },
    {
      key: 'packages',
      icon: Package,
      gradient: 'from-purple-500 to-pink-600',
      bgGradient: 'from-purple-500/10 to-pink-600/10',
    },
  ];

  const getFeatures = (serviceKey: string): string[] => {
    try {
      return messages?.services?.[serviceKey]?.features || [];
    } catch {
      return [];
    }
  };

  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            {t('title')}
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(({ key, icon: Icon, gradient, bgGradient }) => {
            const features = getFeatures(key);
            
            return (
              <div
                key={key}
                className={`relative group bg-gradient-to-br ${bgGradient} backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-slate-600 transition-all duration-300 hover:scale-105`}
              >
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${gradient} mb-6 shadow-lg`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Title and subtitle */}
                <h3 className="text-2xl font-bold text-white mb-2">
                  {t(`${key}.title`)}
                </h3>
                <p className={`text-sm font-semibold bg-gradient-to-r ${gradient} bg-clip-text text-transparent mb-4`}>
                  {t(`${key}.subtitle`)}
                </p>

                {/* Description */}
                <p className="text-slate-300 mb-6">
                  {t(`${key}.description`)}
                </p>

                {/* Features list */}
                <ul className="space-y-3">
                  {features.map((feature: string, index: number) => (
                    <li key={index} className="flex items-start gap-3 text-slate-400">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Hover effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
