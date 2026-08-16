# H.A - Limpeza | Property Readiness & Asset Care

> **Preparação Profissional de Ativos Imobiliários para Venda, Arrendamento e Entrega.**  
> *Sede em Almada · Operação em toda a Área Metropolitana de Lisboa (AML).*

---

## 📌 Posicionamento Estratégico

A **H.A - Limpeza** abandona a narrativa de empresa de limpeza tradicional e assume a liderança na categoria B2B de **Property Readiness & Asset Care**.

A nossa missão é eliminar a fricção na transição de imóveis, reduzindo períodos de vacatura e garantindo ativos prontos para comercialização ou entrega através de 4 soluções modulares auditáveis:

1. **Property Prep:** Preparação estética e profunda para sessões fotográficas, visitas e lançamento no mercado.
2. **Renovation:** Limpeza técnica pós-obra com remoção mecânica de tintas, colas, silicones e poeiras finas com filtros HEPA.
3. **Ready to Occupy:** Higienização de detalhe, desinfeção antiviral/antibacteriana de contacto e entrega de chave.
4. **Property Care:** Vistorias quinzenais/mensais, purga de canalizações e prevenção de degradação passiva em imóveis desocupados.

---

## 📂 Estrutura do Repositório

```
HA-Limpeza/
├── README.md                          # Visão geral, arquitetura e instruções
├── AGENTS.md                          # Contexto do agente e convenções
├── config.json                        # Motor de preçário e rácios operacionais padrão
├── docs/
│   ├── 01_HA_Dossier_Comercial.md     # Dossier Comercial B2B
│   ├── 02_HA_Plano_Negocios.md        # Plano de Negócios 5 Anos
│   ├── 03_HA_Precario.md              # Documentação da Tabela Tarifária
│   ├── 03_HA_Precario.xlsx            # Folha de cálculo Excel com a matriz de preços
│   ├── 04_HA_Projecoes_Financeiras.md # Projeções Financeiras Plurianuais
│   ├── 04_HA_Projecoes_Financeiras.xlsx # Modelo financeiro Excel (5 Anos)
│   ├── 05_HA_Manual_Comercial.md      # Manual Comercial, Scripts & Objeções
│   ├── 06_HA_Investor_Memo.md         # Memorando de Investimento Executivo
│   └── 07_HA_Brand_Guidelines.md      # Manual de Identidade Visual e Tokens
├── website/
│   ├── index.html                     # Aplicação Web & Landing Page Premium
│   ├── 404.html                       # Página 404 personalizada
│   ├── .nojekyll                      # Desativação do processamento Jekyll
│   ├── css/
│   │   └── style.css                  # Design System Corporativo (#071b33, #464feb)
│   ├── js/
│   │   ├── pricing-engine.js          # Motor de preçário e persistência local
│   │   ├── simulator.js               # Simulador comercial e unit economics
│   │   └── projections.js             # Projeções interativas multi-cenário
│   └── assets/
│       ├── logo.png                   # Logótipo oficial de alta resolução
│       ├── logo.svg                   # Logótipo vetorial SVG
│       └── favicon.svg                # Ícone do website
├── scripts/
│   ├── generate_docs_and_sheets.py    # Script de geração dos ficheiros Excel
│   └── test_financial_engine.py       # Testes unitários do motor de cálculo
└── .github/
    └── workflows/
        └── deploy.yml                 # Deploy automatizado no GitHub Pages
```

---

## 🚀 Publicação no GitHub Pages

O website está configurado para publicação automática através de **GitHub Actions** (`.github/workflows/deploy.yml`) ou manualmente:

1. Aceda a **Settings > Pages** no repositório GitHub.
2. Em **Build and deployment > Source**, selecione **GitHub Actions** (ou `Deploy from a branch` selecionando a pasta `/website` na branch `main`).
3. O website ficará imediatamente disponível online com suporte total a:
   - Simulação comercial em tempo real (Unit Economics, COGS, Margem %, EBITDA).
   - Edição inline de preços base com persistência no navegador via `localStorage`.
   - Projeções financeiras multi-cenário (Conservador, Realista, Agressivo).
   - Exportação de relatórios para formato **CSV** e impressão formatada para **PDF**.
   - Formulário de captação de leads B2B integrado com email corporativo.

---

## 🧪 Testes & Validação Local

Para validar as fórmulas financeiras e regenerar os ficheiros Excel:

```bash
# Executar a suite de testes unitários
python scripts/test_financial_engine.py

# Regenerar as folhas de cálculo Excel
python scripts/generate_docs_and_sheets.py
```

---

## 📞 Contacto

- **Central:** Almada, Portugal
- **Raio de Atuação:** Área Metropolitana de Lisboa
- **Email:** `contacto@ha-limpeza.pt`
- **Telefone:** `+351 900 000 000`
