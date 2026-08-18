'use client';

import { useTranslations } from 'next-intl';
import { Check, Star, MessageCircle } from 'lucide-react';
import { useMessages } from 'next-intl';

export function PricingSection() {
  const t = useTranslations('pricing');
  const messages = useMessages() as any;

  const plans = [
    {
      key: 'starter',
      featured: false,
    },
    {
      key: 'creator',
      featured: true,
    },
    {
      key: 'pro',
      featured: false,
    },
    {
      key: 'custom',
      featured: false,
    },
  ];

  const handleCTAClick = (planName: string) => {
    const message = encodeURIComponent(
      `Olá! Tenho interesse no plano ${planName}. Gostaria de mais informações.`
    );
    const phone = '5511999999999'; // Substituir pelo número real
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  const getFeatures = (planKey: string): string[] => {
    try {
      return messages?.pricing?.[planKey]?.features || [];
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

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {plans.map(({ key, featured }) => {
            const features = getFeatures(key);
            
            return (
              <div
                key={key}
                className={`relative rounded-2xl p-8 ${
                  featured
                    ? 'bg-gradient-to-br from-purple-600 to-pink-600 shadow-2xl shadow-purple-500/50 scale-105 lg:scale-110'
                    : 'bg-slate-800 border border-slate-700'
                } transition-all duration-300 hover:scale-105 ${featured ? 'lg:hover:scale-115' : ''}`}
              >
                {/* Popular badge */}
                {featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-yellow-500 text-slate-900 text-sm font-bold rounded-full flex items-center gap-1 shadow-lg">
                    <Star className="w-4 h-4 fill-slate-900" />
                    {t(`${key}.popular`)}
                  </div>
                )}

                {/* Plan name */}
                <h3 className={`text-2xl font-bold mb-2 ${featured ? 'text-white' : 'text-white'}`}>
                  {t(`${key}.name`)}
                </h3>

                {/* Description */}
                <p className={`text-sm mb-6 ${featured ? 'text-purple-100' : 'text-slate-400'}`}>
                  {t(`${key}.description`)}
                </p>

                {/* Price */}
                <div className="mb-6">
                  <div className={`text-4xl font-bold ${featured ? 'text-white' : 'text-white'}`}>
                    {t(`${key}.price`)}
                  </div>
                  {key !== 'custom' && (
                    <p className={`text-sm ${featured ? 'text-purple-100' : 'text-slate-400'}`}>
                      {t('per')} {t('monthly')}
                    </p>
                  )}
                </div>

                {/* Videos */}
                <div className={`text-sm font-semibold mb-6 pb-6 border-b ${
                  featured ? 'border-purple-400/30 text-white' : 'border-slate-700 text-slate-300'
                }`}>
                  {t(`${key}.videos`)}
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {features.map((feature: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        featured ? 'text-white' : 'text-green-400'
                      }`} />
                      <span className={featured ? 'text-purple-50' : 'text-slate-300'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  onClick={() => handleCTAClick(t(`${key}.name`))}
                  className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                    featured
                      ? 'bg-white text-purple-600 hover:bg-purple-50 shadow-lg'
                      : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-lg shadow-purple-500/30'
                  }`}
                >
                  <MessageCircle className="w-5 h-5" />
                  {t('cta')}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
