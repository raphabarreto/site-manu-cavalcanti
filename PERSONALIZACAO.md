# 📝 Guia de Personalização - Manu Cavalcanti

Este documento contém instruções detalhadas de como personalizar o site para suas necessidades.

## 1. 🔧 Configuração Básica

### 1.1 Alterar Número do WhatsApp

O número do WhatsApp aparece em 3 componentes. Procure por `'5511999999999'` e substitua:

**Arquivos a editar:**
- `components/HeroSection.tsx` (linha ~10)
- `components/PricingSection.tsx` (linha ~29)
- `components/Footer.tsx` (linha ~32)

**Formato do número:** `55` (código do Brasil) + `11` (DDD) + `999999999` (número)

### 1.2 Atualizar Links de Redes Sociais

Edite `components/Footer.tsx`, seção `socialLinks` (linhas ~14-35):

```typescript
const socialLinks = [
  {
    name: 'Instagram',
    icon: Camera,
    url: 'https://instagram.com/steffannemanuu', // ← Instagram da Manu
    color: 'hover:text-pink-500',
  },
  {
    name: 'Twitter',
    icon: Hash,
    url: 'https://twitter.com/manucavalcannti', // ← Twitter da Manu
    color: 'hover:text-blue-400',
  },
  {
    name: 'Behance',
    icon: Video,
    url: 'https://behance.net/manucavalcannti', // ← Behance da Manu
    color: 'hover:text-blue-600',
  },
  // ... outros links
];
```

### 1.3 Trocar Avatar

Substitua o arquivo `public/avatar.svg` por:
- Uma foto sua (formato: PNG, JPG ou SVG)
- Tamanho recomendado: 400x400px
- Mantenha o nome do arquivo como `avatar.svg` ou `avatar.png`

Se trocar a extensão, atualize `components/HeroSection.tsx` linha ~32:
```typescript
src="/avatar.png" // ou .jpg
```

### 1.4 Trocar Imagem Open Graph

A imagem Open Graph aparece quando você compartilha o site em redes sociais.

Substitua `public/og-image.png` por:
- Dimensões: **1200x630px** (importante!)
- Formato: PNG ou JPG
- Conteúdo sugerido: Logo + nome + tagline

## 2. 💬 Personalizar Textos

### 2.1 Textos em Português

Edite `messages/pt.json`:

```json
{
  "hero": {
    "title": "Seu título aqui",
    "titleHighlight": "palavra destacada",
    "subtitle": "Sua descrição aqui",
    // ...
  }
}
```

### 2.2 Textos em Inglês

Edite `messages/en.json` (mesma estrutura do pt.json).

### 2.3 Seções Principais

**Hero Section (Topo):**
- `messages/pt.json` → seção `hero`

**Serviços:**
- `messages/pt.json` → seção `services`
- Você pode adicionar/remover features na lista

**Preços:**
- `messages/pt.json` → seção `pricing`
- Altere valores, nomes dos planos e features

**Rodapé:**
- `messages/pt.json` → seção `footer`

## 3. 🎬 Adicionar Vídeos ao Portfólio

Edite `components/PortfolioGrid.tsx`, array `portfolioItems` (linha ~17):

```typescript
const portfolioItems: PortfolioItem[] = [
  {
    id: '1',
    title: 'Título do Vídeo',
    category: 'shorts', // ou 'long' ou 'motion'
    thumbnail: '/portfolio/thumb-1.jpg', // coloque a imagem em public/portfolio/
    videoUrl: 'https://youtube.com/watch?v=SEU_VIDEO_ID',
    platform: 'youtube', // ou 'vimeo' ou 'instagram'
  },
  // adicione mais vídeos aqui
];
```

**Passos:**
1. Crie a pasta `public/portfolio/`
2. Adicione thumbnails dos vídeos (formato: 16:9 para longos, 9:16 para shorts)
3. Adicione os objetos no array

## 4. 💰 Personalizar Pacotes de Preços

### 4.1 Alterar Valores

Edite `messages/pt.json` e `messages/en.json`:

```json
"pricing": {
  "starter": {
    "price": "R$ 800", // ← Altere o valor aqui
    "videos": "6 vídeos curtos/mês",
    // ...
  }
}
```

### 4.2 Adicionar/Remover Features

Cada plano tem uma lista de `features`. Você pode adicionar mais:

```json
"features": [
  "Feature existente 1",
  "Feature existente 2",
  "Nova feature 3",  // ← Adicione aqui
  "Nova feature 4"   // ← E aqui
]
```

### 4.3 Remover um Plano

Se quiser remover o plano "Custom", por exemplo:

1. Edite `components/PricingSection.tsx`
2. Remova do array `plans`:
```typescript
const plans = [
  { key: 'starter', featured: false },
  { key: 'creator', featured: true },
  { key: 'pro', featured: false },
  // { key: 'custom', featured: false }, ← comente ou remova
];
```

## 5. 🎨 Personalizar Cores

As cores principais estão definidas usando classes do Tailwind CSS.

### 5.1 Cores de Destaque

**Gradiente principal (roxo → rosa):**
- Procure por: `from-purple-600 to-pink-600`
- Substitua por outras cores do Tailwind, ex: `from-blue-600 to-cyan-600`

**Arquivos principais:**
- `components/HeroSection.tsx`
- `components/ServiceCards.tsx`
- `components/PricingSection.tsx`

### 5.2 Cores de Fundo

Edite `app/globals.css`:

```css
:root {
  --background: #020617; /* cor de fundo principal (azul escuro) */
  --foreground: #f8fafc; /* cor do texto */
}
```

## 6. 🌐 Alterar URL do Site

Quando fizer deploy, atualize a URL em:

1. **Metadados:** `app/[locale]/layout.tsx`
```typescript
metadataBase: new URL('https://manucavalcanti.com'),
```

2. **Open Graph:** mesmo arquivo, seção `openGraph.url`

## 7. ✉️ Configurar Email

Altere o email em:
- `messages/pt.json` → `footer.email`
- `messages/en.json` → `footer.email`

Se quiser que o botão abra o cliente de email, edite `components/Footer.tsx`:
```typescript
href="mailto:contato@manucavalcanti.com"
```

## 8. 📱 Responsividade

O site já é totalmente responsivo (mobile-first), mas você pode ajustar:

### Breakpoints do Tailwind:
- `sm:` - telas pequenas (640px+)
- `md:` - médias (768px+)
- `lg:` - grandes (1024px+)
- `xl:` - extra grandes (1280px+)

Exemplo de ajuste:
```typescript
className="text-2xl md:text-4xl lg:text-6xl" // tamanho responsivo
```

## 9. 🚀 Deploy

### Vercel (Recomendado):
1. Push do código para GitHub
2. Importe na Vercel: https://vercel.com/new
3. Deploy automático!

### Outras plataformas:
```bash
npm run build
npm start
```

## 10. 📊 Analytics (Opcional)

Para adicionar Google Analytics:

1. Instale:
```bash
npm install @next/third-parties
```

2. Adicione ao layout (`app/[locale]/layout.tsx`):
```typescript
import { GoogleAnalytics } from '@next/third-parties/google'

// No return do component:
<body>
  <GoogleAnalytics gaId="G-XXXXXXXXXX" />
  {/* resto do conteúdo */}
</body>
```

---

## ❓ Precisa de Ajuda?

Se tiver dúvidas ou problemas:
1. Verifique os erros no console: `npm run dev`
2. Confira a documentação do Next.js: https://nextjs.org/docs
3. Revise este guia novamente

**Dica:** Teste sempre localmente (`npm run dev`) antes de fazer deploy!

---

Feito com ❤️ para facilitar sua personalização!
