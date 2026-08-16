/**
 * H.A - LIMPEZA | PROPERTY READINESS & ASSET CARE
 * Multi-Scenario 5-Year Financial Projections (projections.js)
 */

const ScenariosData = {
  conservador: {
    name: 'Conservador',
    ticket: 400,
    cogsPct: 40.0,
    years: [
      { year: 1, opsMonth: 25, fixedCostMonth: 3000 },
      { year: 2, opsMonth: 45, fixedCostMonth: 4500 },
      { year: 3, opsMonth: 75, fixedCostMonth: 7500 },
      { year: 4, opsMonth: 110, fixedCostMonth: 11000 },
      { year: 5, opsMonth: 150, fixedCostMonth: 15000 }
    ]
  },
  realista: {
    name: 'Realista (Base)',
    ticket: 420,
    cogsPct: 38.5,
    years: [
      { year: 1, opsMonth: 30, fixedCostMonth: 3000 },
      { year: 2, opsMonth: 60, fixedCostMonth: 5416 },
      { year: 3, opsMonth: 100, fixedCostMonth: 9166 },
      { year: 4, opsMonth: 150, fixedCostMonth: 13750 },
      { year: 5, opsMonth: 220, fixedCostMonth: 19166 }
    ]
  },
  agressivo: {
    name: 'Agressivo',
    ticket: 450,
    cogsPct: 37.0,
    years: [
      { year: 1, opsMonth: 35, fixedCostMonth: 3500 },
      { year: 2, opsMonth: 80, fixedCostMonth: 7000 },
      { year: 3, opsMonth: 135, fixedCostMonth: 12000 },
      { year: 4, opsMonth: 205, fixedCostMonth: 18000 },
      { year: 5, opsMonth: 300, fixedCostMonth: 25000 }
    ]
  }
};

document.addEventListener('DOMContentLoaded', () => {
  let currentScenario = 'realista';

  const tableBody = document.getElementById('projections-table-body');
  const scenarioButtons = document.querySelectorAll('.scenario-btn');
  const btnExportProjCsv = document.getElementById('btn-export-proj-csv');

  const formatEUR = (val) => new Intl.NumberFormat('pt-PT', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(val);

  function renderProjections() {
    if (!tableBody) return;

    const data = ScenariosData[currentScenario];
    tableBody.innerHTML = '';

    data.years.forEach(item => {
      const opsYear = item.opsMonth * 12;
      const revenue = opsYear * data.ticket;
      const cogs = revenue * (data.cogsPct / 100);
      const grossMargin = revenue - cogs;
      const fixedCosts = item.fixedCostMonth * 12;
      const ebitda = grossMargin - fixedCosts;
      const ebitdaPct = revenue > 0 ? (ebitda / revenue) * 100 : 0;

      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td><strong>Ano ${item.year}</strong></td>
        <td class="mono">${item.opsMonth} ops/mês (${opsYear} /ano)</td>
        <td class="mono price-tag text-primary">${formatEUR(revenue)}</td>
        <td class="mono text-emerald">${formatEUR(grossMargin)} (${(100 - data.cogsPct).toFixed(1)}%)</td>
        <td class="mono text-muted">${formatEUR(fixedCosts)}</td>
        <td class="mono text-emerald" style="font-weight: 700;">${formatEUR(ebitda)} (${ebitdaPct.toFixed(1)}%)</td>
      `;
      tableBody.appendChild(tr);
    });
  }

  // Switch Scenarios
  scenarioButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      scenarioButtons.forEach(b => b.classList.remove('active'));
      const target = e.currentTarget;
      target.classList.add('active');
      currentScenario = target.getAttribute('data-scenario') || 'realista';
      renderProjections();
    });
  });

  // Export CSV
  if (btnExportProjCsv) {
    btnExportProjCsv.addEventListener('click', () => {
      const data = ScenariosData[currentScenario];
      let csv = "data:text/csv;charset=utf-8,Ano,Intervencoes_Mes,Intervencoes_Ano,Receita_Anual,Margem_Bruta,Custos_Fixos,EBITDA,Margem_EBITDA_Pct\n";

      data.years.forEach(item => {
        const opsYear = item.opsMonth * 12;
        const revenue = opsYear * data.ticket;
        const cogs = revenue * (data.cogsPct / 100);
        const grossMargin = revenue - cogs;
        const fixedCosts = item.fixedCostMonth * 12;
        const ebitda = grossMargin - fixedCosts;
        const ebitdaPct = revenue > 0 ? (ebitda / revenue) * 100 : 0;

        csv += `Ano ${item.year},${item.opsMonth},${opsYear},${revenue},${grossMargin},${fixedCosts},${ebitda},${ebitdaPct.toFixed(1)}%\n`;
      });

      const encodedUri = encodeURI(csv);
      const link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", `HA_Projecoes_${currentScenario}.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  }

  renderProjections();
});
