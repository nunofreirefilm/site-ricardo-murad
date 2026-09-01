# Especificação Detalhada de Layout - Ricardo Murad

Este documento especifica cada seção da landing page de Ricardo Murad em nível exaustivo de Direção de Arte e Arquitetura Visual.

---

## Guia de Identidade Visual Global

### Paleta de Cores (Tons de Azul Fechado)
- **Fundo Principal (Bg Main)**: `#060c18`
- **Fundo de Superfície (Bg Surface)**: `#0b1526`
- **Card Glassmorphism (Bg Card)**: `rgba(13, 24, 43, 0.75)` (com `backdrop-filter: blur(16px)`)
- **Card Hover (Bg Card Hover)**: `rgba(18, 33, 58, 0.9)`
- **Azul Primário (Primary)**: `#1d4ed8`
- **Azul Primário Hover**: `#2563eb`
- **Brilho Primário (Primary Glow)**: `rgba(37, 99, 235, 0.35)`
- **Acento Ciano (Accent Cyan)**: `#38bdf8`
- **Acento Azul (Accent Blue)**: `#60a5fa`
- **Texto Principal**: `#f8fafc`
- **Texto Secundário**: `#94a3b8`
- **Texto Apagado (Dim)**: `#64748b`
- **Borda Suave**: `rgba(255, 255, 255, 0.08)`
- **Borda Destaque**: `rgba(56, 189, 248, 0.2)`

### Tipografia Global (Clean Typography)
- **Títulos (Headings)**: `'Outfit', sans-serif` (pesos 600, 700)
- **Corpo de Texto (Body)**: `'Inter', sans-serif` (pesos 400, 500, 600)
- **Espaçamento de Letra nos Títulos**: `letter-spacing: -0.025em`
- **Altura de Linha nos Títulos**: `line-height: 1.18`

---

## Seção 0: Header & Navigation Bar

### Arquétipo e Constraints
- **Arquétipo**: Fixed Glassmorphic Navigation Bar
- **Constraints**: Glassmorphism, Absolute Brand Logo Alignment, Smooth Blur Background
- **Justificativa**: Garante fixidez e fácil navegação sem obstruir o conteúdo visual do Hero.

### Conteúdo
- Logo da Marca: Imagem `/images/image1.png`
- Menu de Navegação:
  - Link 1: Início (`#hero`)
  - Link 2: Trajetória (`#trajetoria`)
  - Link 3: Compromissos (`#compromissos`)
  - Link 4: FAQ (`#faq`)

### Layout
- **Posição**: `position: fixed`, `top: 0`, `left: 0`, `width: 100%`, `z-index: 1000`
- **Altura**: `height: 80px`
- **Fundo**: `background: rgba(6, 12, 24, 0.85)` com `backdrop-filter: blur(12px)`
- **Borda Inferior**: `border-bottom: 1px solid rgba(255, 255, 255, 0.08)`

### Tipografia
- Links de menu: `'Inter', sans-serif`, `font-size: 0.95rem`, `font-weight: 500`, `color: #94a3b8`

### Interatividade
- Hover nos links: `color: #38bdf8`, transição `0.2s ease`

---

## Seção 1: Hero (Demonstração Aprovada)

### Arquétipo e Constraints
- **Arquétipo**: Split Vertical com Overlap
- **Constraints**: Headline em Caixa Alta (Uppercase), Glassmorphism Card Overlay, Radial Glow Ambient
- **Justificativa**: Posiciona a figura de Ricardo Murad com imposing presença institucional à direita e mensagem direta e confiante à esquerda.

### Conteúdo Exato
- **Badge**: `MARANHÃO EM PRIMEIRO LUGAR`
- **Headline Principal**: `EXPERIÊNCIA E CORAGEM PARA FAZER PELO MARANHÃO`
- **Subheadline**: `Trabalho comprovado na saúde e na gestão pública a serviço do nosso povo.`
- **CTA Principal**: `Conheça as Propostas` (`href="#compromissos"`)
- **Indicadores de Impacto (Stats)**:
  - Item 1: `+100` | `Leitos e UPAs Criados`
  - Item 2: `100%` | `Compromisso com o MA`
- **Imagem de Destaque**: `/.netlify/images?url=/images/RicardoMurad-01.png&w=900&q=85` (`width="900"`, `height="1080"`, `loading="eager"`)
- **Card Flutuante (Glass)**: Title: `Gestão de Resultados` | Desc: `Saúde pública forte e descentralizada em todo o estado.`

### Layout e Proporções
- **Grid Container**: `display: grid`, `grid-template-columns: 1.1fr 0.9fr`, `gap: 3rem`, `align-items: center`
- **Altura Mínima**: `min-height: 100vh`, `padding-top: calc(80px + 3rem)`, `padding-bottom: 4rem`
- **Fundo**: `background: radial-gradient(circle at 80% 20%, #0f2347 0%, #060c18 60%)`

### Tipografia
- **Headline**: `font-family: 'Outfit'`, `font-size: clamp(2.3rem, 4.5vw, 3.8rem)`, `text-transform: uppercase`, `font-weight: 700`, `line-height: 1.12`, `letter-spacing: -0.01em`
- **Highlight Text**: Gradiente `linear-gradient(135deg, #38bdf8 0%, #60a5fa 100%)`
- **Subheadline**: `font-family: 'Inter'`, `font-size: clamp(1.1rem, 2vw, 1.3rem)`, `color: #94a3b8`, `margin-bottom: 2rem`

### Animações e Performance
- **Hero Entrada**: SEM animação de entrada (Hero aparece instantaneamente sem FOUT/CLS).
- **CTA Hover**: `transform: translateY(-2px)`, `box-shadow: 0 8px 25px rgba(37, 99, 235, 0.5)`, transição `300ms cubic-bezier(0.16, 1, 0.3, 1)`

---

## Seção 2: Trajetória e Resultados (Demonstração Aprovada)

### Arquétipo e Constraints
- **Arquétipo**: Bento Box com Overlap
- **Constraints**: Hover Lift & Scale, Badge Pill em Blur, Clip-Path Suave
- **Justificativa**: Apresenta os três pilares de atuação de forma visualmente rica e diversificada.

### Conteúdo Exato
- **Badge**: `TRAJETÓRIA E RESULTADOS`
- **Título**: `Trabalho mostrado em todo o Maranhão`
- **Subtítulo**: `Uma história marcada por realizações concretas que transformaram a vida dos maranhenses.`
- **Card 1**:
  - Imagem: `/.netlify/images?url=/images/RicardoMurad-02.png&w=600&q=80`
  - Tag: `Saúde Pública`
  - Título: `Transformação da Saúde`
  - Texto: `Criação e estruturação da rede de Hospitais Regionais e UPAs em diversas regiões do estado, levando atendimento de qualidade a quem mais precisa.`
- **Card 2**:
  - Imagem: `/.netlify/images?url=/images/image2.png&w=600&q=80`
  - Tag: `Atuação Parlamentar`
  - Título: `Voz Ativa pelo Maranhão`
  - Texto: `Defesa firme dos interesses do Maranhão na Assembleia Legislativa e na Câmara dos Deputados, garantindo recursos e investimentos fundamentais.`
- **Card 3**:
  - Imagem: `/.netlify/images?url=/images/RicardoMurad-03.png&w=600&q=80`
  - Tag: `Gestão Pública`
  - Título: `Capacidade de Gestão`
  - Texto: `Resultados reais e projetos tirados do papel com coragem, determinação e respeito ao dinheiro público.`

### Layout e Proporções
- **Grid Layout**: `display: grid`, `grid-template-columns: repeat(auto-fit, minmax(320px, 1fr))`, `gap: 2rem`
- **Padding da Seção**: `padding: 6rem 0`
- **Fundo**: `#0b1526` (superfície elevada com borda superior `1px solid rgba(255, 255, 255, 0.08)`)

### Animações
- **Scroll Trigger (AOS)**: `data-aos="fade-up"`, `data-aos-delay="100ms / 200ms / 300ms"`
- **Hover no Card**: `transform: translateY(-8px)`, `background: rgba(18, 33, 58, 0.9)`, `border-color: rgba(56, 189, 248, 0.2)`

---

## Seção 3: Compromissos Principais

### Arquétipo e Constraints
- **Arquétipo**: Assymmetric Split & Highlight
- **Constraints**: Color Blocking em Azul Noturno, Staggered Numbered Lists, Interactive Hover Accent Line
- **Justificativa**: Rompe a estrutura de cards da seção anterior, trazendo legibilidade e peso institucional para as 3 bandeiras de governo.

### Conteúdo Exato
- **Badge**: `NOSSO COMPROMISSO`
- **Título**: `O que defendemos para o futuro do Maranhão`
- **Subtítulo**: `Prioridades claras para garantir um estado com mais saúde, oportunidades e respeito ao cidadão.`
- **Lista de Compromissos**:
  1. **Item 1**:
     - Número: `01`
     - Título: `Fortalecimento da Saúde`
     - Descrição: `Mais recursos para hospitais, exames e atendimento humanizado em todos os municípios maranhenses.`
  2. **Item 2**:
     - Número: `02`
     - Título: `Desenvolvimento e Emprego`
     - Descrição: `Incentivo à infraestrutura e apoio aos produtores e jovens trabalhadores para movimentar a economia local.`
  3. **Item 3**:
     - Número: `03`
     - Título: `Gestão Eficiente`
     - Descrição: `Aplicação correta dos recursos públicos onde a população mais precisa, sem desperdícios.`

### Layout e Proporções
- **Container**: Grid assimétrico 1.2fr / 1.8fr
- **Item de Compromisso**: Card com número em destaque à esquerda (`font-family: 'Outfit'`, `font-size: 2.2rem`, `color: #38bdf8`, `font-weight: 800`) e conteúdo à direita.
- **Divisor de Itens**: `border-bottom: 1px solid rgba(255, 255, 255, 0.08)`

### Interatividade
- **Hover no Item**: A linha numérica de número transiciona para `color: #ffffff` e adiciona uma barra vertical neon ciana (`border-left: 3px solid #38bdf8`) com `padding-left: 1.5rem`, transição `300ms ease`.

---

## Seção 4: Perguntas Frequentes (FAQ)

### Arquétipo e Constraints
- **Arquétipo**: Container Narrow com Accordion Glassmorphic
- **Constraints**: Glassmorphism translucent cards, Smooth Height Expansion, SVG Rotation Trigger
- **Justificativa**: Apresenta as dúvidas mais frequentes de maneira organizada, enxuta e elegante.

### Conteúdo Exato
- **Badge**: `ESCLARECIMENTOS`
- **Título**: `Perguntas Frequentes`
- **Subtítulo**: `Respostas diretas sobre nossa trajetória, posições e compromissos.`
- **Pergunta 1**: `Quais foram as principais realizações de Ricardo Murad na saúde?`
  - **Resposta**: `Ricardo Murad liderou a construção e entrega de Hospitais Regionais e UPAs espalhados pelo Maranhão, descentralizando a saúde pública no estado.`
- **Pergunta 2**: `Quais são as prioridades para o Maranhão?`
  - **Resposta**: `Garantir recursos federais para a saúde, apoiar a infraestrutura dos municípios e impulsionar a geração de empregos.`

### Layout e Proporções
- **Container**: `max-width: 800px`, centralizado
- **Item Accordion**: `background: rgba(13, 24, 43, 0.75)`, `border: 1px solid rgba(255, 255, 255, 0.08)`, `border-radius: 12px`, `margin-bottom: 1rem`, `padding: 1.25rem 1.5rem`
- **Ícone Toggle**: SVG de seta para baixo (`width: 20px`, `height: 20px`, `fill: #38bdf8`) com rotação `transform: rotate(180deg)` quando ativo.

### Interatividade
- **Clique na Pergunta**: Expande suavemente a resposta (`max-height: 0` para `max-height: 200px`, `transition: max-height 400ms cubic-bezier(0.16, 1, 0.3, 1)`).

---

## Seção 5: Rodapé (Footer)

### Arquétipo e Constraints
- **Arquétipo**: Minimal Centered Footer com Border Divider
- **Constraints**: Low Contrast Text, Logo Centrada, Links Interativos de Navegação
- **Justificativa**: Fecha a landing page com elegância, reforçando a marca e direitos autorais.

### Conteúdo Exato
- **Logo**: Imagem `/.netlify/images?url=/images/image1.png&h=80&q=90` (`height="36px"`)
- **Copyright**: `© 2026 Ricardo Murad. Todos os direitos reservados.`
- **Links Úteis**: `Início` | `Trajetória` | `Compromissos` | `FAQ`

### Layout
- **Padding**: `padding: 3rem 0`
- **Borda Superior**: `border-top: 1px solid rgba(255, 255, 255, 0.08)`
- **Fundo**: `#060c18`

---

## Especificação de Responsividade por Breakpoint

### Breakpoint Desktop Large (> 1200px)
- Layout completo conforme especificado.
- Container com largura máxima de `1200px`.

### Breakpoint Tablet / Laptop (992px)
- **Hero**: Grid de 2 colunas passa para 1 coluna centralizada. Imagem principal ajusta para `max-width: 440px`.
- **Navegação**: O menu de links recolhe suavemente.
- **Grid de Trajetória**: Ajusta para 2 colunas.

### Breakpoint Mobile (576px)
- **Hero Title**: `font-size: clamp(2rem, 8vw, 2.5rem)`
- **Cards de Trajetória**: 1 coluna (`100% width`)
- **Padding Geral das Seções**: Reduzido de `6rem 0` para `4rem 0`
- **Stats do Hero**: Empilhamento vertical com espaçamento de `1rem`.

---

## Elementos Encantadores e Micro-interações

1. **Glow de Fundo Dinâmico**: Esfera de luz azul sutil no Hero (`radial-gradient`) que dá profundidade 3D sem afundar a performance.
2. **Desempenho de Animação sem CLS**: AOS configurado com `disableMutationObserver: true`, mantendo a velocidade máxima de carregamento.
3. **Imagens Otimizadas por CDN**: Todas as imagens usam `/.netlify/images` com `width`, `height`, `loading="eager"` no Hero e `loading="lazy"` nas seções seguintes.
