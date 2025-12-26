# General Guidelines - Lívia Miranda Portfolio

* **Structure:** Uso de tags semânticas HTML5 (`<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`).
* **Layout:** Grid e Flexbox com container fixo em **1040px**.
* **Responsiveness:** Mobile-first. Padding lateral mínimo de **24px**.
* **Code Style:** TypeScript obrigatório. Componentização modular (ex: `Button`, `StatItem`).

--------------

# Design System Guidelines

## Typography
* **Font Family:** Sans-serif limpa (Inter / font-sans).
* **Quebras e Hifenização:** Títulos (H1, H2, H3) nunca permitem hifenização ou quebra de palavras ao meio (`hyphens-none`).
* **Legibilidade:** Corpo `text-[1rem]` com `leading-[1.7]`.

## Colors & Aesthetic
* **Background:** Off-white sólido (`#f8f9fa`).
* **Text:** Dark gray profissional (`#262c31`).

## Spacing & Borders
* **Bordas (Border Radius):** Estética de precisão técnica com arredondamento mínimo.
    * **Geral (Botões, Cards, Imagens, Inputs):** `rounded-sm` (2px).
* **Navbar:** Altura fixa de **64px** (`h-16`).
* **Footer Compacto:** Margem `mt-10`, preenchimento `py-8/10`.
* **Gaps:** 12px internos | 64px-80px entre seções.

## Components

### 1. Icons (Phosphor Icons)
* **Weight:** `weight="bold"`.
* **Size:** 14px para links/botões; 20px para Navbar/Footer; 24px para Stats.

### 2. Button (Subtle Precision)
* **Estilo:** Arredondamento mínimo (`rounded-sm`), borda sutil e preenchimento `px-5 py-2.5`.
* **Animação:** Feedback via `scale: 1.02`. **Sem deslocamento de posição** para manter sobriedade.

### 3. Animations (Motion)
* **Transitions:** 0.8s com `easeOut` para entradas.
* **Micro-interações:** Hover em imagens com `scale: 1.01`. Foco em escala e opacidade, evitando movimentos excessivos.

### 4. Footer Compacto
* **Grid:** `grid-cols-4` no desktop (25% cada).
* **Conteúdo:** Identidade, Navegação, Contato e Ação de Topo. Alinhamento total à esquerda.