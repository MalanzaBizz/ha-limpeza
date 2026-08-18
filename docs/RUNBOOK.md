---
Standard: DOC-STD-AUTOMATION-v3.0
Doc Version: 1.0
Last Updated: 2026-08-18
Owner: Helton Trindade
Status: Draft
---

# Runbook — H.A - Limpeza

## 1. What This Tool Does

Provides operational commands to run, test, and preview the H.A - Limpeza property readiness platform, financial calculator, and document generator.

## 2. Prerequisites & Access

- Python ≥ 3.12 with standard libraries.
- Optional dependencies: `pip install -e ".[dev]"` (includes `pytest`, `openpyxl`, `ruff`).
- Modern web browser (Chrome, Edge, Firefox).

## 3. Execution Steps

### Interactive Web Application
```bash
python main.py gui
```
Opens the web app locally at `http://localhost:8000/index.html`.

### Financial Spreadsheet Generation
```bash
python main.py run
```
Generates updated pricing matrices (`03_HA_Precario.xlsx`) and 5-year financial models (`04_HA_Projecoes_Financeiras.xlsx`) into `docs/`.

### Run Unit Tests
```bash
python -m pytest tests/unit -q
```

## 4. Inputs & Outputs

- **Inputs:** `config.json` (pricing rules, technician hourly rates, travel costs, growth targets).
- **Outputs:** Excel workbooks in `docs/` and browser localStorage state.

## 5. Schedule & Frequency

- On-demand execution for commercial presentations and quarterly financial target revisions.

## 6. Validation Checkpoints

1. Unit tests pass with zero failures: `python -m pytest tests/unit`.
2. Static web portal loads cleanly without JavaScript console errors.
3. Generated XLSX sheets compute gross margin ≥55% for T2 property prep.

## 7. Troubleshooting & Rollback

- **Port in use:** Specify alternative port via `python main.py gui --port 8080`.
- **Config corruption:** Restore default JSON schema from Git version control.

## 8. Escalation

- **Technical / Operations Lead:** Helton Trindade.

## 9. FAQ

**Q: Can client prices be changed dynamically in the simulator?**  
A: Yes, the frontend simulator includes an in-browser assumption editor saved to `localStorage`.

## 10. Revision History

- **2026-08-18 (v1.0):** Initial canonical runbook created under DOC-STD-AUTOMATION-v3.0.
