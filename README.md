<div align="center">

  <img src="assets/logo.png" alt="H.A - Limpeza Logo" width="260" />

  # H.A - LIMPEZA
  ### Property Readiness & Asset Care Platform

  [![Standard](https://img.shields.io/badge/Standard-DOC--STD--AUTOMATION--v3.0-0078D4?style=flat-square)](docs/PROJECT_BRIEF.md)
  [![Layout](https://img.shields.io/badge/Layout-PROJECT--LAYOUT--v2.0-16865c?style=flat-square)](docs/RUNBOOK.md)
  [![Version](https://img.shields.io/badge/Version-1.0.0-gold?style=flat-square)](CHANGELOG.md)
  [![License](https://img.shields.io/badge/Organization-MalanzaBizz-071b31?style=flat-square)](https://github.com/MalanzaBizz)
  [![Status](https://img.shields.io/badge/Status-Operational-success?style=flat-square)](https://malanzabizz.github.io/ha-limpeza/)

  <p align="center">
    <strong>Preparação Profissional de Ativos Imobiliários para Venda, Arrendamento e Entrega de Chave.</strong><br />
    <em>Operação B2B Integrada · Área Metropolitana de Lisboa (AML) · Almada</em>
  </p>

</div>

---

## 📌 1. Visão Executiva & Posicionamento

A **H.A - Limpeza** redefine o padrão de serviços residenciais e corporativos ao liderar a categoria B2B de **Property Readiness & Asset Care**. 

Eliminamos a fricção operacional e os custos ocultos de vacatura na transição de ativos imobiliários para **agências, promotores, fundos imobiliários, gestores de património e proprietários institucionais**, garantindo conformidade estética, técnica e higiénica imediata.

```
Transição Imobiliária ──► Diagnóstico Rápido ──► Intervenção Modular ──► Certificação de Entrega
   (Desocupação/Obra)        (T1 a T4+)          (4 Soluções SLA)          (Key-Ready Handover)
```

---

## 🏢 2. Catálogo de Soluções Estratégicas

| Solução | Escopo & Intervenção | Target & Momento | SLA / Tempo |
| :--- | :--- | :--- | :---: |
| **Property Prep** | Limpeza profunda e encenação visual para sessões fotográficas, visitas e lançamento no mercado. | Angariações imobiliárias, renovação de anúncios. | 4 – 6 Horas |
| **Renovation Clean** | Limpeza técnica pós-obra com aspiração HEPA, remoção de colas, tintas, rejuntes e poeiras finas. | Conclusão de remodelações, obras e reabilitação. | 6 – 10 Horas |
| **Ready to Occupy** | Higienização de detalhe, desinfeção antiviral/antibacteriana de contacto e finishing "white-glove". | Véspera de escritura, entrega de chaves a novos inquilinos. | 3 – 5 Horas |
| **Property Care** | Gestão de conservação preventiva para imóveis desocupados: arejamento, vistorias e purga de ramais. | Imóveis fechados em carteira, carteiras de fundos. | Quinzenal / Mensal |

---

## 📊 3. Modelo Financeiro & Unit Economics

O modelo assenta numa política de preços transparente, com margens brutas auditadas e controlo rígido de custos diretos (COGS):

* **Margem Bruta Alvo:** $\ge 55\%$ em todas as intervenções standard.
* **Escalação por Tipologia:** Preçário indexado a coeficientes de área (T1 base até Moradias/T4+).
* **Fórmula de Custo Direto (COGS):**
  $$\text{COGS} = (\text{Técnicos} \times \text{Horas} \times \text{Custo/Hora}) + \text{Consumíveis} + (\text{Km} \times 0.40€) + \text{Portagens} + \text{Seguro}$$
* **Projeção Plurianual:** Trajetória de faturação de **€151.200 (Ano 1)** até **€1.108.800 (Ano 5)** com expansão de equipas dedicadas.

---

## 💻 4. Aplicação Web & Simulador Comercial

A plataforma inclui um portal web moderno publicado em GitHub Pages:

* 🌐 **Live Web App:** [malanzabizz.github.io/ha-limpeza](https://malanzabizz.github.io/ha-limpeza/)
* **Simulador de Rentabilidade:** Cálculo instantâneo de margens, EBITDA e cash flow operacional.
* **Motor de Preçário Editável:** Ajuste de pressupostos com persistência local em `localStorage`.
* **Exportação Corporativa:** Geração de relatórios em CSV e vista de impressão para propostas comerciais.

---

## 📂 5. Arquitetura do Repositório (`PROJECT-LAYOUT-AUTOMATION-v2.0`)

```
HA-Limpeza/
├── assets/                            # Identidade visual, logótipos e favicons
│   ├── logo.png                       # Logótipo oficial de alta resolução
│   ├── logo.svg                       # Logótipo vetorial SVG
│   └── favicon.svg
├── config/                            # Configurações de execução
├── docs/                              # DOC-STD-AUTOMATION-v3.0
│   ├── PROJECT_BRIEF.md               # L1 canónico — Especificações e arquitetura
│   ├── RUNBOOK.md                     # L1 canónico — Manual operacional e SOP
│   ├── 01_HA_Dossier_Comercial.md     # Dossier comercial B2B
│   ├── 02_HA_Plano_Negocios.md        # Plano de negócios plurianual
│   ├── 03_HA_Precario.xlsx            # Folha de cálculo matriz de preços
│   ├── 04_HA_Projecoes_Financeiras.xlsx # Modelo financeiro Excel (5 Anos)
│   ├── 05_HA_Manual_Comercial.md      # Manual de vendas e objeções
│   └── 06_HA_Investor_Memo.md         # Memorando de investimento
├── src/                               # Módulos centrais e adaptadores
├── tests/                             # Testes automatizados
│   └── unit/test_financial_engine.py  # Testes unitários do motor financeiro
├── index.html                         # Portal web interativo de produção
├── main.py                            # Ponto de entrada universal (run | gui | --version)
├── pyproject.toml                     # Metadados de projeto Python >=3.12
├── SECURITY.md                        # Política de segurança institucional
├── CHANGELOG.md                       # Registo cronológico de versões
└── .vscode/tasks.json                 # Tarefas de automação IDE
```

---

## ⚡ 6. Comandos & Execução Local

```bash
# 1. Executar o portal web interativo localmente
python main.py gui

# 2. Executar pipeline de validação e regeneração de folhas Excel
python main.py run

# 3. Executar a suite de testes unitários
python -m unittest discover tests/unit -v
```

---

## 🛡️ 7. Governança & Segurança

* **Segurança e Privacidade:** Nenhum dado pessoal identificável (PII) de clientes ou parceiros é registado em repositório público.
* **Auditoria Contínua:** Conformidade rigorosa com as diretivas de engenharia do ecossistema `MalanzaBizz`.
* **Contacto Institucional:** `ops@malanzabizz.com` · Almada, Portugal.
