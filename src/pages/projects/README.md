# Estrutura de Projetos - Portfólio

## Organização por Produto

A estrutura foi reorganizada para separar os projetos por produto, facilitando a manutenção e escalabilidade.

### Produtos

#### 🔹 Yrden
**Plataforma de BI Headless para empresas SaaS**

- **De 60 minutos de espera a um onboarding produtivo**
  - Arquivo: `src/pages/projects/yrden/onboarding-produtivo.tsx`
  - Rota: `/projects/yrden/onboarding-produtivo`

- **Editor SQL**
  - Arquivo: `src/pages/projects/yrden/editor-sql.tsx`
  - Rota: `/projects/yrden/editor-sql`

#### 🔹 Axii
**Plataforma de análise de dados com IA**

- **GenAI em chat**
  - Arquivo: `src/pages/projects/axii/genai-chat.tsx`
  - Rota: `/projects/axii/genai-chat`

- **Gerenciador de base de dados para GenAI**
  - Arquivo: `src/pages/projects/axii/gerenciador-dados-genai.tsx`
  - Rota: `/projects/axii/gerenciador-dados-genai`

## Estrutura de Arquivos

```
src/pages/projects/
├── yrden/
│   ├── index.ts
│   ├── onboarding-produtivo.tsx
│   └── editor-sql.tsx
└── axii/
    ├── index.ts
    ├── genai-chat.tsx
    └── gerenciador-dados-genai.tsx
```

## Navegação entre Projetos

Cada projeto possui navegação para o próximo projeto seguindo a ordem:
1. Yrden - Onboarding Produtivo
2. Yrden - Editor SQL  
3. Axii - GenAI Chat
4. Axii - Gerenciador de Dados GenAI

## Logos dos Produtos

- **Yrden**: `/logos/yrden-logo.svg`
- **Axii**: `/logos/axiom-logo.svg` (reutilizando o logo do Axiom)