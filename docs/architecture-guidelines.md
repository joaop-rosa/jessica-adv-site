# Diretrizes para Arquitetura

## Princípio Transversal
- Sempre considere escopo local primeiro.
- Promova para escopo global apenas quando houver necessidade real de compartilhamento entre múltiplas rotas/features.
- Em caso de dúvida, mantenha local.

## Estrutura orientada a rotas e features
- O projeto usa Next.js 16 com roteamento baseado no App Router (`src/app/`).
- Cada rota ou componente complexo deve ser tratado como uma feature ou módulo lógico.
- Organize o código por domínio primeiro e, dentro, por responsabilidade.

### Regras para `src/app/`
- Rotas são definidas através de pastas contendo arquivos `page.tsx` ou `layout.tsx`.
- Crie subpastas com escopos claros. Para agrupamentos lógicos (route groups) que não devem afetar a URL, utilize a sintaxe de parênteses, ex: `(components)`, `(sections)`.
- Tudo o que for específico de uma rota ou tela deve ficar contido no mesmo diretório ou em subdiretórios locais, se não for compartilhado globalmente.

### Convenção recomendada
- Páginas que dependem de vários componentes locais devem utilizar a estrutura:
  - `src/app/nome-da-rota/page.tsx` (entrada da rota)
  - `src/app/nome-da-rota/(components)/`
  - `src/app/nome-da-rota/(hooks)/`
  - `src/app/nome-da-rota/(modals)/`

### Convenção para Modais
- Use `src/modals/` para modais reutilizáveis entre múltiplas páginas em todo o app.
- Em features específicas de rota, mantenha os modais próximos à página que os utiliza.
- Modais globais ou locais devem ser controlados preferencialmente de forma centralizada e sem vazar regra de negócio de controle de UI para os componentes pai.

## Boas Práticas de Arquitetura
- Separe lógica de apresentação e lógica de negócios.
- Utilize `src/contexts/` globais apenas para estado realmente compartilhado entre múltiplas rotas (ex: providers de tema, de animações, de autenticação).
- Prefira hooks para encapsular lógica reutilizável.
- Promova para `src/components/`, `src/hooks/` ou `src/contexts/` globais apenas o que for reutilizado por mais de uma página.

## Organização por escopo
- `src/app/`: definição de rotas e suas features ou seções.
- `src/components/` ou `src/app/(components)/`: componentes reutilizáveis da aplicação.
- `src/modals/`: modais reutilizáveis globais.
- `src/hooks/`: hooks reutilizáveis em toda a base de código.
- `src/contexts/`: providers e contextos globais do projeto.
- `src/styles/`: arquivos e módulos de estilo, como variáves globais (`variables.css`).
- `src/constants/`: configurações estáticas ou constantes (links, chaves de rotas, etc).

## Diretrizes de roteamento
- Evite concentrar regra de negócio em roteamento. A lógica de controle de acesso, se aplicável, deve usar Middlewares do Next.js.
- Para rotas com modais, estados locais e fluxos próprios, encapsule tudo na pasta da rota correspondente.

### Navegação interna
- **Sempre** utilize o componente `<Link>` do `next/link` para navegação interna, para otimizações automáticas de prefetch.
- **Nunca** use `<a href="...">` para links internos; isso causa reload completo da página no cliente.
- Caso precise de navegação programática, use `useRouter` do `next/navigation` ou `next/router` dependendo do ambiente.

#### Exceções (quando `<a href>` é permitido)
- Links para **domínios externos** (ex: `https://example.com`).
- Links para **downloads de arquivos** (ex: PDFs, imagens).
- Links que precisam abrir em **nova aba** (`target="_blank"`) com `rel="noopener noreferrer"`.

#### Exemplos

```tsx
// ✅ Correto - navegação interna com Link do Next.js
import Link from 'next/link'

<Link href="/dashboard">Dashboard</Link>

// ✅ Correto - navegação programática
import { useRouter } from 'next/navigation'

const router = useRouter()
router.push('/settings')

// ❌ Incorreto - navegação interna com <a href>
<a href="/dashboard">Dashboard</a>

// ✅ Correto - link externo
<a href="https://google.com" target="_blank" rel="noopener noreferrer">Google</a>
```

## Exemplo de Estrutura
```
src/
  app/
    layout.tsx
    page.tsx
    globals.css
    (components)/
      Header.tsx
      Footer.tsx
    (sections)/
      Banner.tsx
      Services.tsx
    ebooks/
      page.tsx
      (components)/
  contexts/
    AnimationProvider.tsx
  hooks/
    useActiveSection.ts
  constants/
    routes.ts
    links.ts
  styles/
    base/
      variables.css
```

## Resumo de decisão
- Comece simples, priorizando a coesão.
- Se uma página crescer, quebre-a em pastas lógicas (`(components)`, `(sections)`) dentro do seu próprio escopo.
- Evite espalhar peças isoladas da mesma funcionalidade na raiz do projeto (`src/components`, `src/hooks`) se não for de uso geral.