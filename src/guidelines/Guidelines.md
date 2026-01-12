# General Guidelines - Lívia Miranda Portfolio

- Estrutura semântica HTML5 (`<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`)
- Layout: Grid/Flex com container máximo de 1040px
- Responsividade: Mobile-first; padding lateral mínimo de 24px
- Code Style: TypeScript; componentização modular (ex.: Button, NavLink, SocialLink)

---

# Design System Guidelines (Consolidado com Tailwind e globals.css)

## Tipografia
- Font family: `font-sans` (Inter, system-ui, sans-serif); `font-mono` opcional para detalhes
- Títulos: hifenização desabilitada e medidas fluidas
  - h1: `text-[clamp(2rem,4vw,3rem)]` `font-bold` `leading-[1.1]` `-tracking-[0.03em]`
  - h2: `text-[clamp(1.5rem,3vw,2rem)]` `font-bold` `leading-[1.2]` `-tracking-[0.02em]`
  - h3: `text-[clamp(1.125rem,2vw,1.5rem)]` `font-bold` `leading-[1.4]`
- Corpo: `text-[1rem]` `leading-[1.7]`

## Tipografia e Quebra de Linha
- **Hifenização Desabilitada**: `hyphens: none` aplicado globalmente para evitar quebras estranhas
- **Quebras Naturais**: `word-break: normal` e `overflow-wrap: normal` para fluxo de texto natural
- **Títulos**: `word-break: keep-all` para evitar quebras indesejadas em títulos
- **Objetivo**: Manter o texto fluindo naturalmente sem quebras forçadas ou hifenização automática

## Tokens de Cor (CSS Variables em globals.css)
As cores do Tailwind mapeiam para variáveis CSS em HSL, garantindo consistência entre temas e utilitários.

Modo claro (classe raiz :root):
- --background: `210 17% 98%`
- --foreground: `210 11% 15%`
- --muted: `210 5% 92%`
- --muted-foreground: `210 10% 42%`
- --border: `210 11% 15% / 0.24` (contraste não-texto ≥ 3:1)
- --primary: `210 11% 15%` (igual a foreground)
- --primary-foreground: `210 17% 98%` (igual a background)

Modo escuro (classe .dark no html/body):
- --background: `210 11% 15%`
- --foreground: `210 17% 98%`
- --muted: `210 10% 25%`
- --muted-foreground: `210 10% 70%`
- --border: `210 17% 98% / 0.24`

Tailwind (tailwind.config.js -> theme.extend.colors):
- background: `hsl(var(--background))`
- foreground: `hsl(var(--foreground))`
- muted.DEFAULT: `hsl(var(--muted))`
- muted.foreground: `hsl(var(--muted-foreground))`
- border: `hsl(var(--border))`
- primary.DEFAULT: `hsl(var(--primary))`
- primary.foreground: `hsl(var(--primary-foreground))`

Utilização típica:
- `bg-background` + `text-foreground` para superfícies padrão e alto contraste
- `bg-muted` para containers/planos de fundo suaves; texto sobre esse fundo deve usar `text-foreground` ou `text-muted-foreground` conforme contraste
- `border-border` para separadores e contornos

## Critérios WCAG 2.1 AA (aplicados)
- Texto normal (abaixo de 18pt/24px e sem negrito): contraste ≥ 4.5:1
- Texto grande (≥ 18pt/24px normal ou ≥ 14pt/18.66px em negrito): contraste ≥ 3:1
- Elementos não-texto (ícones essenciais, contornos, separadores): contraste ≥ 3:1
- Foco visível: anel de foco com contraste ≥ 3:1 em relação ao plano de fundo

Verificações com a paleta atual:
- `text-foreground` sobre `bg-background`: ≫ 7:1 (AA/AAA)
- `text-muted-foreground` sobre `bg-background`: ~5.7:1 (AA para 12–14px)
- `border-border` (24% opacidade): ≥ 3:1 sobre os respectivos backgrounds em claro/escuro

## Foco Visível (padrão obrigatório)
- Utilitário custom `.focus-ring` (definido em globals.css) aplicado a todos os elementos focáveis interativos:
  - Implementação: `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background`
- Regra: Sempre adicionar `.focus-ring` e `rounded-sm` em links, botões e controles interativos
- Não usar cores de ring não definidas no tema (ex.: `ring-primary-400`)

## Bordas e Raio
- `rounded-sm` (2px) para botões, cards, imagens, inputs
- `border-border` para contornos e divisórias

## Navbar e Footer
- Navbar: altura responsiva `h-12` (mobile) e `h-14` (desktop). Itens com `text-foreground` e hover `hover:opacity-60`. Foco com `.focus-ring`. Botão mobile com alvo de toque mínimo 44px.
- Footer compacto: `mt-10` e `py-8/10`; colunas em grid responsivo. Labels (Navegação, Contato, Ações) com `text-muted-foreground` sem opacidade para garantir AA. Links com `.focus-ring`.

## Estados Ativos de Navegação
- **Padrão:** Seções ativas devem usar `text-foreground font-semibold` vs `text-muted-foreground` para inativas
- **Mobile:** Ícones sempre visíveis (`opacity-100 translate-x-0`)
- **Desktop:** Ícones com hover effect (`md:opacity-0 md:group-hover:opacity-100`)
- **Aplicar em:** NavItem (navbar), Table of Contents, e qualquer navegação com estado ativo

## Componentes (padrões de acessibilidade)
- Button: `inline-flex`, `border-border`, `hover:bg-foreground hover:text-background`, `.focus-ring` no elemento focável; alvo acessível (altura efetiva ~44px)
- NavLink / NavItem / SocialLink / Logo: usam `text-muted-foreground` com `hover:text-foreground`, `.focus-ring` e `rounded-sm`
- Ícones (Phosphor): `weight="bold"`. Tamanhos: 14px em links/botões; 20px Navbar/Footer; 24px em estatísticas
- **Product Logos**: Tamanhos padronizados - `h-8` (32px) em ProjectHero; `h-7` (28px) em ProjectCard. Usar `w-auto object-contain` para manter proporção. Fallback para texto com `text-[12px] uppercase tracking-widest font-bold text-muted-foreground`

## Interatividade Mobile
- **Touch Targets**: Todos os elementos interativos devem ter `min-h-[44px]` para acessibilidade
- **Active States**: Usar `active:scale-95` em cards e elementos tocáveis para feedback tátil
- **Hover vs Touch**: Detectar dispositivos móveis e aplicar comportamentos diferentes:
  - Desktop: Manter hover effects (`group-hover:`)
  - Mobile: Mostrar conteúdo sempre visível ou usar click/tap para interações
- **Responsive Grid**: Bento Grid deve empilhar em coluna única no mobile (`grid-cols-1`) com `gap-6` para espaçamento confortável
- **Visual Indicators**: Em elementos interativos mobile, adicionar ícones de dica (ex: `ArrowsClockwiseIcon`) para indicar funcionalidade
- **Sticky Headers Mobile**: 
  - Altura reduzida: `h-12` (48px) vs `h-14` (56px) desktop
  - Conteúdo mínimo: Apenas botão voltar (só ícone) + título truncado
  - Ações secundárias: Transformar em ícones discretos (`LinkIcon` para links externos)
  - Barra de progresso: Manter sutil com `h-0.5` (2px)

## Microinterações
- Transições moderadas, preferir opacidade/escala. Evitar grandes deslocamentos
- **Estados Hover em Navegação:** Usar `hover:opacity-60` para feedback visual suave em elementos de navegação (Navbar, NavItem, SocialLink)
- Imagens/Thumbs (`ProjectGallery`): hover `scale: 1.02`

## Boas práticas adicionais
- Evitar reduzir opacidade de texto/ícones a ponto de violar contraste; como regra, preferir `hover:opacity-80` quando necessário
- Garantir que texto sobre `bg-muted` use `text-foreground` ou `text-muted-foreground` com contraste validado
- Evitar uso de cores não definidas no tema Tailwind extendido

---

# Conformidade e Alinhamento
- Tailwind e globals.css estão alinhados via tokens HSL.
- As classes aplicadas nos componentes garantem:
  - Contraste AA para texto normal e elementos não-texto
  - Foco visível consistente com `.focus-ring`
  - Estados hover que não comprometem contraste
- O arquivo foi atualizado para refletir os tokens e as regras de acessibilidade em vigor no código.

## Tooltips
- Espaçamento padrão: `mb-1/mt-1` (4px) entre tooltip e elemento
- Implementação no componente `tooltip-simple.tsx`

---

# UX Writing & Microtipografia (Padrão Definido)

## 1. Capitalização e Formatação
- **Padrão:** Sentence case (Apenas a primeira letra maiúscula).
  - *Correto:* "Sobre mim", "Entrar em contato", "Ver projetos".
  - *Incorreto:* "Sobre Mim", "Entrar em Contato", "VER PROJETOS".
- **Exceções:** Nomes próprios e siglas (UX, UI, API, Yrden, Axiom).
- **Pontuação em Títulos/Botões:** Nunca usar ponto final.
- **Pontuação em Listas:** Sem ponto e vírgula (;) ou ponto final (.) ao fim de itens que não são frases completas.

## 2. Botões e CTAs (Call to Action)
- **Estrutura:** Verbo no Imperativo + Objeto (máximo 3 palavras).
- **Padrão:** Ser direto e conciso.
  - *Definição:* Usar **"Ver projetos"** em vez de "Conheça os meus projetos".
  - *Definição:* Usar **"Voltar"** ou **"Voltar ao início"** em vez de navegações longas.

## 3. Microtipografia (Regras de Ouro)
- **Aspas:**
  - **Interface (Textos):** Obrigatório uso de aspas curvas (“ ”). *Ex: O conceito de “menos é mais” foi aplicado.*
  - **Código:** Aspas retas (' ' ou " ").
- **Hífens e Travessões:**
  - **Hífen (-):** Apenas para palavras compostas ou intervalos numéricos simples (ex: "boas-vindas", "2023-2024").
  - **Travessão (—):** Para separar orações ou destacar o subtítulo de um projeto. *Ex: "[Yrden] — De 60 minutos de espera..."*

## 4. Controle de Viúvas e Órfãs (Zero Tolerância)
- **Regra:** Nenhuma palavra deve ficar sozinha na última linha de um bloco de texto ou título.
- **Títulos (H1, H2, H3):** Obrigatório uso da classe `text-wrap: balance` (ou `text-balance` no Tailwind).
- **Textos Corridos e Labels:** Usar `&nbsp;` (Non-breaking space) entre as duas últimas palavras ou para "colar" preposições curtas (de, da, em, com) à palavra seguinte.
  - *Código:* `Design&nbsp;System` (Nunca deixe "System" cair sozinho).

## 5. Voz e Tom
- **Pessoa:** 1ª pessoa do singular (Eu).
- **Voz:** Ativa. (Você fez a ação).
  - *Definição:* "Desenvolvi a interface" (Nunca "A interface foi desenvolvida").
- **Terminologia:**
  - Usar **"Design System"** (Inglês, Capitalizado).
  - Usar **"Product Designer"** (Inglês, Capitalizado).
  - Usar **"Front-end"** (Hífen, minúscula após hífen).

## 6. Comportamento de Texto e Leitura
Para garantir a integridade visual dos blocos de texto e evitar "buracos" (espaços em branco irregulares) em colunas responsivas:

- **Hifenização Automática:** Deve estar ativa em todo o corpo de texto e listas.
  - *Objetivo:* Permitir a quebra de palavras longas em finais de linha com um hífen, otimizando o preenchimento do espaço horizontal.
- **Harmonia de Parágrafo:** O texto deve utilizar algoritmos de renderização que evitem "viúvas" e equilibrem o comprimento das linhas do parágrafo (text-pretty).
  - *Objetivo:* Criar manchas de texto uniformes e confortáveis de ler.
- **Balanceamento de Títulos:** Títulos e chamadas curtas devem ter suas linhas equilibradas visualmente para evitar o formato de "escada".

## Ícones - Padrão de Cores
- Todos os ícones da interface devem usar `text-foreground` para manter consistência
- Ícones em navbar, páginas e componentes: sempre `text-foreground` (preto no modo claro)
- Evitar `text-muted-foreground` em ícones principais para garantir uniformidade visual

---

# Grid & Layout System

Sistema de colunas responsivo mantendo o container máximo de 1040px.

## Lógica de Margens (Container)
- **Mobile (< 768px):** Margem fixa de `24px` (`px-6`).
- **Desktop (≥ 768px):** Margem fixa de `40px` (`px-10`).
- **Max-Width:** `1040px` centralizado (`mx-auto`).

## Lógica de Colunas (Grid)
Utilizar sistema de Grid com espaçamento (`gap`) de **24px** (`gap-6`) para consistência com o arredondamento (`--radius: 24px`).
- **Mobile:** 4 Colunas
- **Tablet:** 8 Colunas
- **Desktop:** 12 Colunas

## Regras de Uso (Prevenção de Linhas Longas)
> **Regra de Ouro:** Texto de leitura (parágrafos longos) **NUNCA** deve ocupar as 12 colunas no Desktop. Use no máximo **8 colunas** para garantir legibilidade (~70 caracteres/linha). Deixe as 12 colunas apenas para imagens grandes, vídeos ou headers.

### Receitas de Layout Padrão:

1.  **Layout de Leitura (Centralizado):**
    - *Uso:* Introduções, Sobre, Textos longos.
    - *Comportamento:* O bloco de texto ignora as 2 primeiras colunas e ocupa as 8 centrais.

2.  **Layout Assimétrico (Case Study):**
    - *Uso:* Detalhes de projeto com barra lateral de metadados.
    - *Comportamento:* Sidebar ocupa 4 colunas; Conteúdo principal ocupa 8 colunas.

3.  **Galeria de Imagens (ProjectGallery):**
    - *Divisão Simétrica:* Padrão de 2 colunas no Desktop (`md:grid-cols-2`).
    - *Visual:* Imagens com `rounded-sm` e efeito de hover `scale-102`.

4.  **Grid de Métricas (MetricsGrid):**
    - *Divisão em Terços:* Padrão de 3 colunas no Desktop (`md:grid-cols-3`).
    - *Responsividade:* Em mobile, empilha em 1 coluna.
