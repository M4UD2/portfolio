# Portfolio — Guidelines

## Tipografia

- `h1`: `clamp(2rem, 4vw, 3rem)`, `leading-[1.1]`, `-tracking-[0.03em]`, `text-wrap: pretty`
- `h2`: `clamp(1.5rem, 3vw, 2rem)`, `leading-[1.2]`, `-tracking-[0.02em]`
- `h3`: `clamp(1.125rem, 2vw, 1.5rem)`, `leading-[1.4]`
- `p`: `text-[1rem]`, `leading-[1.7]`
- Labels/caps: `text-[12px]`, `uppercase`, `tracking-widest`
- Fonte: `Inter` (sans), `Space Mono` (mono)
- Sem hifenização global (`hyphens: none`, `word-break: normal`)

---

## Cores (tokens HSL)

| Token | Uso |
|---|---|
| `background` | Fundo da página |
| `foreground` | Texto principal |
| `muted` | Fundos sutis |
| `muted-foreground` | Textos secundários |
| `border` | Bordas |
| `primary` | Ações principais |

---

## Bordas e Raios

- `rounded-sm` em todos os componentes de card/badge
- `border border-border` padrão
- `--radius: 24px` (via CSS var, usado em `rounded-lg`)

---

## Animações

### Padrão de entrada (fade + slide)
Usado em todos os componentes de conteúdo (`ContentSection`, `MetricCard`, `TechBadge`, `QuoteGrid`, etc.):

```tsx
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6, delay, ease: 'easeOut' }}
```

### Stagger entre itens de lista/grid
Delay incremental de `0.1s` por item:

```tsx
transition={{ duration: 0.6, delay: delay + index * 0.1, ease: 'easeOut' }}
```

### Hover em cards de projeto
```tsx
className="hover:border-foreground transition-colors duration-500"
```

### Hover em cards da About
```tsx
className="hover:border-border hover:bg-muted/50 transition-all duration-300 md:hover:scale-105"
```

### FadeInView (wrapper de seção)
Componente `atoms/fade-in-view` usado para animar blocos inteiros ao entrar na viewport.

---

## Componentes — Padrões

### Cards (MetricCard, QuoteGrid, TechBadge)
- `border border-border rounded-sm`
- `hover:border-foreground transition-colors duration-500`
- Animação de entrada: fade + slide com stagger
- Elementos internos que mudam no hover usam `group` + `group-hover:` no elemento filho

### QuoteGrid
- Grid 2 colunas em `md`, 1 coluna em mobile
- Aspa (`"`) muda de `text-muted-foreground/40` para `text-foreground` no hover via `group-hover:`
- Prop `delay` para encadear com outras animações da página

### Páginas de Projeto
- Container: `max-w-[1040px] mx-auto px-6 md:px-10`
- Seções com `gap-16` entre elas
- `scroll-mt-32 md:scroll-mt-24` em cada seção para compensar a sticky header
