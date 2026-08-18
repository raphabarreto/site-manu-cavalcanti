# Especificação do Projeto: Landing Page / Portfólio Kaahtls

Este documento contém a especificação completa para o desenvolvimento do site portfólio de edição de vídeo freelance (**Kaahtls**), estruturado no formato **Spec-Driven Development** para uso no **Kiro**.

---

## 📄 1. Requisitos do Sistema (`requirements.md`)

### 1.1 Visão Geral
Website estilo Landing Page e Portfólio Pessoal para uma editora de vídeo freelance. O objetivo principal é atrair criadores de conteúdo e empresas, apresentando amostras de trabalhos, pacotes de serviço e canal direto de contato/orçamento.

### 1.2 Módulos e Funcionalidades

#### F1: Metadados e Open Graph (Preview em Redes Sociais)
* **Requisito:** Ao compartilhar o link (ex: WhatsApp, Discord, X/Twitter), deve ser exibido um card com:
  * **Título:** `Kaahtls — Editora de Vídeo Freelance`
  * **Descrição:** `Edição de vídeo dinâmica e profissional para criadores de conteúdo. Reels, vídeos longos e pacotes mensais. Vamos conversar.`
  * **Imagem de Capa (OG Image):** Foto de perfil / banner personalizado.
  * **Favicon:** Ícone personalizado da marca.

#### F2: Roteamento e Internacionalização (i18n)
* **Requisito:** Suporte a múltiplos idiomas com rotas limpas:
  * `/pt` - Português (padrão/principal)
  * `/en` - Inglês
* Seletor de idioma acessível no cabeçalho ou rodapé.

#### F3: Seção Principal (Hero Section)
* Avatar / Ilustração de perfil do editor.
* Título principal e subtítulo de apresentação impactante.
* Botão primário de CTA (*Call To Action*): "Entrar em Contato" / "Solicitar Orçamento" (link direto para WhatsApp com mensagem pré-definida).

#### F4: Seção de Serviços
Cards destacando as especialidades de edição:
1. **Vídeos Curtos / Reels / TikTok / Shorts:** Foco em retenção, dinamismo, legendas estilizadas e cortes rápidos.
2. **Vídeos Longos / YouTube:** Edição narrativa, ritmo, sound design, color grading e thumbnails.
3. **Pacotes Mensais:** Solução contínua para criadores de conteúdo recorrentes.

#### F5: Portfólio (Showcase de Vídeos)
* Grid responsivo exibindo amostras de edições recentes.
* Suporte a embeds funcionais de vídeos (YouTube, Vimeo, Google Drive ou players interativos de vídeo vertical/horizontal).
* Filtros por categoria (ex: "Shorts/Reels", "YouTube/Longos", "Motion/VFX").

#### F6: Tabelas / Cards de Pacotes e Preços
* Exibição clara das opções de investimento e pacotes mensais.
* Lista de benefícios de cada pacote (ex: X vídeos por mês, prazo de entrega, revisões inclusas).

#### F7: Rodapé e Canais de Contato
* Links para redes sociais (Instagram, Twitter/X, YouTube, LinkedIn).
* E-mail profissional e botão flutuante/fixo do WhatsApp.

---

## 🏗️ 2. Arquitetura e Tech Stack (`architecture.md`)

### Stack Recomendada
* **Framework:** Next.js (App Router)
* **Linguagem:** TypeScript
* **Estilização:** Tailwind CSS + Lucide Icons
* **Internacionalização:** `next-intl` (ou gerenciamento via rotas `/pt` e `/en`)
* **Deploy:** Vercel / Netlify

### Estrutura de Pastas Esperada
```text
/app
  /[locale]
    /pt
      page.tsx
    /en
      page.tsx
    layout.tsx
/components
  /HeroSection.tsx
  /ServiceCard.tsx
  /PortfolioGrid.tsx
  /PricingSection.tsx
  /LanguageSwitcher.tsx
  /Footer.tsx
/public
  /images
    avatar.png
    og-image.png
```

---

## 🎯 3. Lista de Tarefas de Execução (`tasks.md`)

### Task 1: Setup Inicial do Projeto
- [ ] Inicializar o projeto com Next.js, TypeScript e Tailwind CSS.
- [ ] Configurar o arquivo `head.tsx` e meta tags Open Graph (`og:title`, `og:description`, `og:image`).
- [ ] Adicionar assets na pasta `public/` (avatar, og-image, favicon).

### Task 2: Configuração de Internacionalização (i18n)
- [ ] Configurar rotas dinâmicas `/[locale]` (`pt` e `en`).
- [ ] Criar dicionário de traduções (`messages/pt.json` e `messages/en.json`).
- [ ] Desenvolver o componente `LanguageSwitcher`.

### Task 3: Desenvolvimento dos Componentes de UI
- [ ] Criar `HeroSection` com avatar, bio e botão CTA.
- [ ] Criar `ServiceCards` detalhando Serviços Curtos, Longos e Pacotes.
- [ ] Criar `PortfolioGrid` com suporte a reprodução/embed de vídeos.
- [ ] Criar `PricingSection` detalhando os pacotes mensais.
- [ ] Criar `Footer` com links de contato e redes sociais.

### Task 4: Polimento, Responsividade e Deploy
- [ ] Testar e ajustar o layout para telas de smartphones (Mobile-First).
- [ ] Garantir que o compartilhamento de link exiba corretamente o card OpenGraph.
- [ ] Realizar o deploy do projeto.
