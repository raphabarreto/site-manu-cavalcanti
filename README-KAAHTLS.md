# Manu Cavalcanti - Landing Page / Portfólio

Landing page e portfólio profissional para editora de vídeo freelance, com foco em criadores de conteúdo.

## 🚀 Stack

- **Framework:** Next.js 15 (App Router)
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS v4
- **Internacionalização:** next-intl (pt/en)
- **Ícones:** Lucide React
- **Deploy:** Vercel

## ✨ Funcionalidades

- ✅ Internacionalização (Português e Inglês)
- ✅ SEO otimizado com Open Graph
- ✅ Design responsivo mobile-first
- ✅ Seções completas:
  - Hero com avatar e CTA para WhatsApp
  - Cards de serviços (Shorts, Vídeos Longos, Pacotes)
  - Grid de portfólio com filtros
  - Seção de preços com 4 planos
  - Footer com links sociais
- ✅ Botão flutuante do WhatsApp
- ✅ Seletor de idiomas

## 🛠️ Setup Local

1. **Clone o repositório**
```bash
git clone [url-do-repositorio]
cd site-manu
```

2. **Instale as dependências**
```bash
npm install
```

3. **Execute o servidor de desenvolvimento**
```bash
npm run dev
```

4. **Abra no navegador**
```
http://localhost:3000
```

## 📁 Estrutura do Projeto

```
site-manu/
├── app/
│   ├── [locale]/          # Rotas internacionalizadas
│   │   ├── layout.tsx     # Layout com i18n e metadados
│   │   └── page.tsx       # Página principal
│   └── globals.css        # Estilos globais
├── components/            # Componentes React
│   ├── HeroSection.tsx
│   ├── ServiceCards.tsx
│   ├── PortfolioGrid.tsx
│   ├── PricingSection.tsx
│   ├── Footer.tsx
│   └── LanguageSwitcher.tsx
├── i18n/                  # Configuração i18n
│   ├── request.ts
│   └── routing.ts
├── messages/              # Traduções
│   ├── pt.json
│   └── en.json
├── public/                # Assets estáticos
│   ├── avatar.svg
│   └── og-image.png
└── middleware.ts          # Middleware next-intl
```

## 🎨 Personalização

### Alterar número do WhatsApp

Edite os componentes que usam WhatsApp:
- `components/HeroSection.tsx` (linha 10)
- `components/PricingSection.tsx` (linha 29)
- `components/Footer.tsx` (linha 32)

Substitua `'5511999999999'` pelo número desejado (formato: código país + DDD + número).

### Adicionar vídeos ao portfólio

Edite `components/PortfolioGrid.tsx` e atualize o array `portfolioItems` com seus vídeos reais.

### Alterar preços dos pacotes

Edite os arquivos de tradução:
- `messages/pt.json` (seção `pricing`)
- `messages/en.json` (seção `pricing`)

### Alterar links das redes sociais

Edite `components/Footer.tsx` no array `socialLinks`:
- Instagram: `@steffannemanuu`
- Twitter: `@manucavalcannti`
- Behance: `manucavalcannti`

### Substituir avatar e og-image

Substitua os arquivos:
- `public/avatar.svg` - Avatar do perfil
- `public/og-image.png` - Imagem para preview em redes sociais (1200x630px)

## 🌐 Deploy

### Vercel (Recomendado)

1. Faça push do código para GitHub
2. Importe o projeto na Vercel
3. Deploy automático!

### Outras Plataformas

```bash
npm run build
npm start
```

## 📝 Scripts

- `npm run dev` - Servidor de desenvolvimento
- `npm run build` - Build de produção
- `npm start` - Servidor de produção
- `npm run lint` - Linting

## 🔧 Configuração de Ambiente

Não há variáveis de ambiente necessárias para o funcionamento básico.

## 📱 Metadados Open Graph

Os metadados são gerados automaticamente para cada idioma e incluem:
- Título e descrição otimizados
- Imagem de preview (og-image.png)
- Suporte para Twitter Cards
- Favicon personalizado

## 📄 Licença

Todos os direitos reservados © 2026 Manu Cavalcanti

---

Desenvolvido com ❤️ usando Next.js e TypeScript
