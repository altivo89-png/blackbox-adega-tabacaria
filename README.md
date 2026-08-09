# BLACKBOX - Adega & Tabacaria

App de divulgação para redes sociais para a Adega e Tabacaria Blackbox.

## 🚀 Funcionalidades

- ✅ **Dashboard** com métricas e estatísticas
- ✅ **Catálogo de Produtos** (Vinhos, Tabaco, Acessórios)
- ✅ **Gerenciador de Posts** para múltiplas plataformas
- ✅ **Agendador de Posts** com calendário
- ✅ **Templates Personalizáveis** para cada rede social
- ✅ **Gerenciador de Contas** (Instagram, Facebook, TikTok, Twitter)
- ✅ **Análiticas e Relatórios** de engajamento
- ✅ **Stores Zustand** para gerenciamento de estado

## 📦 Stack Tecnológico

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Icons**: React Icons
- **Charts**: Recharts
- **Image Processing**: html2canvas

## 🛠️ Instalação

### Pré-requisitos
- Node.js 18+
- npm ou yarn

### Steps

1. Clone o repositório:
```bash
git clone https://github.com/altivo89-png/blackbox-adega-tabacaria.git
cd blackbox-adega-tabacaria
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

3. Configure as variáveis de ambiente:
```bash
cp .env.example .env.local
# Edite .env.local com suas credenciais
```

4. Inicie o servidor de desenvolvimento:
```bash
npm run dev
# ou
yarn dev
```

5. Acesse http://localhost:3000

## 📁 Estrutura do Projeto

```
blackbox-adega-tabacaria/
├── app/                    # Next.js app router
│   ├── layout.tsx
│   ├── globals.css
│   └── page.tsx           # Dashboard
├── components/            # Componentes React
│   ├── Layout.tsx
│   ├── ProductCard.tsx
│   └── SocialPostCard.tsx
├── store/                 # Zustand stores
│   ├── socialStore.ts    # Posts e contas sociais
│   ├── productStore.ts   # Produtos
│   └── templateStore.ts  # Templates
├── types/                # TypeScript types
│   └── index.ts
├── lib/                  # Utilitários
│   └── constants.ts
├── public/               # Arquivos estáticos
├── .env.example         # Variáveis de ambiente
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.js
└── next.config.js
```

## 📖 Principais Stores

### Social Store
Gerencia posts e contas de redes sociais.

```typescript
const { posts, addPost, publishPost } = useSocialStore();
```

### Product Store
Gerencia catálogo de produtos.

```typescript
const { products, getFilteredProducts } = useProductStore();
```

### Template Store
Gerencia templates e customizações.

```typescript
const { templates, selectedTemplate } = useTemplateStore();
```

## 🔧 Configuração de Redes Sociais

Adicione seus tokens de API no arquivo `.env.local`:

```env
NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN=seu_token_aqui
NEXT_PUBLIC_FACEBOOK_ACCESS_TOKEN=seu_token_aqui
NEXT_PUBLIC_TIKTOK_ACCESS_TOKEN=seu_token_aqui
```

## 📝 Páginas Planejadas

- ✅ Dashboard (`/`)
- 🔄 Produtos (`/products`)
- 🔄 Posts (`/posts`)
- 🔄 Agendador (`/scheduler`)
- 🔄 Análiticas (`/analytics`)
- 🔄 Configurações (`/settings`)

## 🚀 Deploy

### Vercel (Recomendado)

```bash
npm run build
vercel deploy
```

### Docker

```bash
docker build -t blackbox-adega .
docker run -p 3000:3000 blackbox-adega
```

## 📚 Recursos

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Zustand Docs](https://github.com/pmndrs/zustand)
- [Instagram Graph API](https://developers.facebook.com/docs/instagram-graph-api)
- [Facebook Graph API](https://developers.facebook.com/docs/graph-api)

## 👨‍💻 Desenvolvedor

Criado por **altivo89-png**

## 📄 Licença

MIT License - veja LICENSE para detalhes.
