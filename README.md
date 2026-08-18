<div align="center">

  <img src="assets/logo.png" alt="H.A - Limpeza Official Logo" width="280" />

  # H.A - LIMPEZA
  ### B2B Property Readiness & Asset Care Platform

  [![Standard](https://img.shields.io/badge/Standard-DOC--STD--AUTOMATION--v3.0-0078D4?style=flat-square)](docs/PROJECT_BRIEF.md)
  [![Layout](https://img.shields.io/badge/Layout-PROJECT--LAYOUT--v2.0-16865c?style=flat-square)](docs/RUNBOOK.md)
  [![Version](https://img.shields.io/badge/Version-1.0.0-gold?style=flat-square)](CHANGELOG.md)
  [![Organization](https://img.shields.io/badge/Organization-MalanzaBizz-071b31?style=flat-square)](https://github.com/MalanzaBizz)
  [![Status](https://img.shields.io/badge/Status-Operational-success?style=flat-square)](https://malanzabizz.github.io/ha-limpeza/)
  [![License](https://img.shields.io/badge/License-Proprietary-red?style=flat-square)](SECURITY.md)

  <p align="center">
    <strong>Preparação Profissional, Reabilitação Higiénica e Conservação Periódica de Ativos Imobiliários.</strong><br />
    <em>Operação B2B Integrada · Área Metropolitana de Lisboa (AML) · Almada</em>
  </p>

</div>

---

## 📌 1. Visão Executiva & Proposta de Valor

A **H.A - Limpeza** lidera a categoria B2B de **Property Readiness & Asset Care**, substituindo o modelo de limpeza residencial genérica por um ecossistema estruturado de preparação e valorização de ativos imobiliários.

A nossa missão é **eliminar os custos ocultos de vacatura e atrasos na transição de imóveis** para mediadoras imobiliárias, promotores, fundos de investimento, asset managers e proprietários institucionais.

```
┌────────────────────────┐      ┌────────────────────────┐      ┌────────────────────────┐      ┌────────────────────────┐
│  Transição do Imóvel   │ ──►  │ Diagnóstico Tipologia  │ ──►  │  Execução Modular SLA  │ ──►  │ Certificação de Entrega│
│ (Desocupação / Obras)  │      │   (T1, T2, T3, T4+)    │      │  (4 Soluções Técnicas) │      │  (Key-Ready Handover)  │
└────────────────────────┘      └────────────────────────┘      └────────────────────────┘      └────────────────────────┘
```

---

## 🏢 2. Catálogo Modular de Soluções & Matriz de SLAs

| Solução | Escopo & Intervenção Técnica | Momento & Target | SLA / Duração | Garantia de Qualidade |
| :--- | :--- | :--- | :---: | :--- |
| **Property Prep** | Limpeza profunda e encenação visual de alto impacto para fotografia profissional, visitas virtuais e lançamento comercial. | Angariação e relançamento de anúncios. | 4 – 6 Horas | Checklist fotográfico de 45 pontos |
| **Renovation Clean** | Limpeza técnica pós-obra com aspiração mecânica HEPA, desincrustação de resíduos de cimento, tintas, colas e poeiras finas. | Conclusão de obras e reabilitação de frações. | 6 – 10 Horas | Zero resíduo de poeira suspensa |
| **Ready to Occupy** | Higienização de detalhe, desinfeção antiviral/antibacteriana de contacto e finishing "white-glove" para entrega de chave. | Véspera de escritura e entrada de inquilino. | 3 – 5 Horas | Selo de higienização de contacto |
| **Property Care** | Gestão de conservação preventiva para ativos desocupados: vistorias quinzenais, arejamento, purga de ramais e verificação de fugas. | Imóveis fechados em carteira de fundos. | Periódico | Relatório fotográfico digital |

---

## 📊 3. Engenharia Financeira, Unit Economics & Fórmulas

O modelo financeiro da H.A - Limpeza assenta no controlo rigoroso de custos diretos e garantia de rentabilidade auditável:

### Fórmula de Custo Direto (COGS):
$$\text{COGS} = (\text{Técnicos} \times \text{Horas} \times \text{Custo/Hora}) + \text{Consumíveis} + (\text{Distância Km} \times 0.40€) + \text{Portagens} + \text{Seguro}$$

### Matriz de Preçário & Margens Auditadas:
| Tipologia | Property Prep (PVP) | Renovation Clean (PVP) | Ready Handover (PVP) | COGS Médio | Margem Bruta (%) |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **T1** | €280 | €420 | €320 | €118 | **57.8%** |
| **T2** | €390 | €580 | €440 | €175 | **55.1%** |
| **T3** | €490 | €750 | €560 | €215 | **56.1%** |
| **T4+ / Moradia** | Sob Consulta | Sob Consulta | Sob Consulta | Variável | **$\ge 55.0\%$** |

### Projeção Plurianual de Faturação:
* **Ano 1:** €151.200 (1 equipa operacional)
* **Ano 2:** €302.400 (2 equipas dedicadas)
* **Ano 3:** €504.000 (3 equipas + contratos de carteira)
* **Ano 5:** €1.108.800 (Frota corporativa consolidada na AML)

---

## 💻 4. Aplicação Web & Simulador de Rentabilidade

A plataforma integra um portal web SPA autónomo com motor financeiro em tempo real:

* 🌐 **Live Web App:** [malanzabizz.github.io/ha-limpeza](https://malanzabizz.github.io/ha-limpeza/)
* **Simulador de Rentabilidade:** Cálculo instantâneo de margem bruta, EBITDA e ponto de equilíbrio.
* **Editor de Pressupostos:** Calibração dinâmica de preços e taxas com persistência em `localStorage`.
* **Exportação Corporativa:** Geração de relatórios em formato CSV e visualização para propostas B2B.

---

## 📂 5. Arquitetura Canónica do Repositório (`PROJECT-LAYOUT-AUTOMATION-v2.0`)

```
HA-Limpeza/
├── assets/                            # Identidade e logótipos oficiais de alta resolução
│   ├── logo.png                       # Logótipo oficial de produção
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
│   └── 06_HA_Investor_Memo.md         # Memorando de investimento executivo
├── src/                               # Módulos centrais e adaptadores
├── tests/                             # Testes automatizados
│   └── unit/test_financial_engine.py  # Testes unitários do motor financeiro
├── index.html                         # Portal web interativo de produção
├── main.py                            # Ponto de entrada universal (run | gui | --version)
├── pyproject.toml                     # Configuração do projeto Python >=3.12
├── SECURITY.md                        # Política de segurança institucional
├── CHANGELOG.md                       # Registo cronológico de versões
└── .vscode/tasks.json                 # Tarefas de automação IDE
```

---

## ⚡ 6. Manual do Operador & Execução Local (Zero-Friction)

```bash
# 1. Iniciar o portal web interativo localmente
python main.py gui

# 2. Executar pipeline de validação e regeneração de folhas Excel
python main.py run

# 3. Executar a suite de testes unitários
python -m unittest discover tests/unit -v
```

---

## 🛡️ 7. Governança, Segurança & Conformidade

* **Privacidade Absoluta:** Nenhum dado pessoal identificável (PII) de clientes ou parceiros é registado em repositório público.
* **Organização no GitHub:** [github.com/MalanzaBizz/ha-limpeza](https://github.com/MalanzaBizz/ha-limpeza)
* **Contacto Institucional:** `ops@malanzabizz.com` · Almada, Portugal.
