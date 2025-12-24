# General Guidelines - Lívia Miranda Portfolio

* **Structure:** Uso de tags semânticas HTML5 (`<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`).
* **Layout:** Grid e Flexbox com container fixo em **1040px** para desktop.
* **Responsiveness:** Abordagem Mobile-first. Padding lateral mínimo de **24px**. Área de toque mínima de **44px** para elementos interativos em telas pequenas.
* **Code Style:** Código limpo e modular. **TypeScript obrigatório**. Componentização de elementos repetitivos (ex: `SocialLink`, `StatItem`).

--------------

# Design System Guidelines

## Typography
* **Font Family:** Sans-serif limpa (Inter / font-sans).
* **Dynamic Sizing:** Uso de `clamp()` para fluidez.
    * **H1:** `text-[clamp(2rem,4vw,3rem)]` (Leading tight).
    * **Body:** `text-[1rem]` (16px) com `leading-[1.7]` para máxima legibilidade.
    * **Tooltips/Legendas:** `text-[12px]` com `leading-[1.7]` para legibilidade e consistência.
* **Acessibilidade:** Fontes nunca menores que 12px (legendas) e 16px (corpo).

## Colors & Aesthetic
* **Background:** Off-white sólido (`#f8f9fa`). Evitar transparências excessivas no fundo para manter contraste.
* **Text:** Dark gray profissional (`#262c31`).
* **Contrast:** Manter ratio mínimo de **4.5:1** para textos normais (WCAG AA).

## Spacing (System of 4px)
* **Navbar:** Altura fixa de **64px** (`h-16`).
* **Gaps:** 12px (`gap-3`) para itens internos; 64px a 80px (`gap-16/20`) para seções.

## Components

### 1. Header / Navbar
* **Behavior:** `sticky top-0` com fundo sólido (`bg-background`).
* **Style:** Borda inferior sutil (`border-b border-border/50`).
* **Interactions:** Underline animado via `layoutId` do Framer Motion.

### 2. Logo
* **Tamanho:** `text-base` (16px) para garantir proeminência e legibilidade em Navbar e Footer.
* **Interatividade:** Comportamento de link (`<Link to="/" />`) com animação de `whileHover` e feedback de `hover:opacity-60`.

### 3. Icons (Phosphor Icons)
* **Nomenclatura:** Sufixo `Icon` obrigatório.
* **Weight:** Sempre `weight=\"bold\"`.
* **Size:** 20px para Navbar, 24px para Stats/Footer.
* **TS Fix:** Ícones decorativos com `aria-hidden=\"true\"`. Classes de animação sempre no `<span>` pai.

### 4. Accessibility (a11y)
* **Interactive:** Links externos com `aria-label` descritivo (ex: \"LinkedIn (abre em nova aba)\").
* **Focus:** Estados de foco visíveis para navegação via teclado.
* **Semantics:** `button` para ações, `Link/a` para navegação.

### 5. Animations
* **Transitions:** Padrão **0.8s** com `easeOut`.
* **Micro-interações:** Hover com deslocamento sutil (`y: -2`) ou setas com opacidade progressiva.

### 6. Tooltip
* **Tipografia:** `text-[12px]` com `leading-[1.7]` (legendas), sem valores inferiores a 12px.
* **Cores:** `bg-primary` com `text-primary-foreground`; seta com `bg-primary`/`fill-primary`.
* **Espaçamento:** `px-3` `py-1.5` (12px x 6px). `sideOffset: 0` por padrão.
* **Acessibilidade:** `role="tooltip"`, `aria-live="polite"`. Foco visível para o trigger conforme padrão global.
* **Animações:** Entrada/saída com `animate-in fade-in-0 zoom-in-95` e variantes direcionais (`slide-in-from-...`). Z-index `z-50` e `rounded-md`.
* **Boas práticas:** Conteúdo curto e objetivo. Evitar links dentro do tooltip; usar para contexto complementar.