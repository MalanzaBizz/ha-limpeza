---
Standard: DOC-STD-AUTOMATION-v3.0
Doc Version: 1.0
Last Updated: 2026-08-18
Owner: Helton Trindade
Status: Draft
---

# Project Brief — H.A - Limpeza

## 1. Executive Summary

H.A - Limpeza provides professional property readiness and asset care services for real estate agencies, property developers, asset managers, and landlords across the Lisbon Metropolitan Area (AML). The platform combines a commercial web portal with interactive pricing and a 5-year multi-scenario financial model.

## 2. Problem & Context

Real estate transactions and handovers often stall due to inadequate property presentation, delayed renovation cleaning, or uncoordinated asset maintenance. Traditional cleaning services lack B2B-grade readiness guarantees, SLA commitments, and transparent pricing matrices.

## 3. Solution Overview

A structured service framework offering 4 core tiers:
- **Property Prep (Preparação para Venda/Arrendamento):** Intensive staging cleaning for listings.
- **Renovation Clean (Pós-Obras):** Heavy-duty residue and dust removal following construction.
- **Ready Handover (Entrega de Chave):** White-glove finishing for new occupant handover.
- **Property Care (Manutenção Periódica):** Scheduled recurring maintenance for vacant and portfolio assets.

## 4. Architecture & Modules

- `index.html` / `website/`: Single-page interactive application containing the commercial portal, scenario engine, and lead qualification form.
- `scripts/generate_docs_and_sheets.py`: Automated generation of financial sheets, pricing matrices, and sales dossiers.
- `tests/unit/test_financial_engine.py`: Validation suite for unit economics, COGS, and revenue projections.
- `main.py`: Unified CLI entry point (`run`, `gui`, `--version`).

## 5. Impact & KPIs

- **Target Year 1 Revenue:** €151,200 (reaching €1.1M by Year 5).
- **Target Gross Margin:** ≥55% across property preparation services.
- **Average Ticket:** €280–€750 per intervention depending on typology (T1–T3+).

## 6. Tech Stack & Dependencies

- **Frontend:** Vanilla HTML5, CSS3, JavaScript (no external framework dependency).
- **Backend / Scripting:** Python 3.12, openpyxl, pytest.
- **Hosting:** GitHub Pages / Static hosting.

## 7. Scope & Boundaries

- **In-Scope:** Residential and commercial property preparation in AML, automated pricing calculations, financial modeling, sales manual generation.
- **Out-of-Scope:** Heavy structural construction or hazardous chemical decontamination.

## 8. Stakeholders & Ownership

- **Technical & Business Owner:** Helton Trindade.
- **Operations:** Field teams & B2B Commercial Partners.

## 9. Risks & Dependencies

- **Seasonality:** Fluctuations in real estate market transaction volume.
- **Labor Costs:** Tech labor and transport inflation managed via dynamic pricing model.

## 10. Status & Roadmap

- **Milestone:** M0 (Onboarding & Chartered).
- **Next Steps:** Expansion of commercial partner integrations and automated quote PDF exports.
