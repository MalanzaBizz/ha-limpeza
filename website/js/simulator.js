/**
 * H.A - LIMPEZA | PROPERTY READINESS & ASSET CARE
 * Commercial Simulator & Unit Economics (simulator.js)
 */

document.addEventListener('DOMContentLoaded', () => {
  const engine = window.haPricingEngine;

  // DOM Elements - Inputs
  const selectPack = document.getElementById('sim-pack');
  const selectTypology = document.getElementById('sim-typology');
  const inputArea = document.getElementById('sim-area');
  const inputTechs = document.getElementById('sim-techs');
  const inputHours = document.getElementById('sim-hours');
  const inputRate = document.getElementById('sim-rate');
  const inputConsumables = document.getElementById('sim-consumables');
  const inputKm = document.getElementById('sim-km');
  const inputKmCost = document.getElementById('sim-km-cost');
  const inputTolls = document.getElementById('sim-tolls');
  const inputInsurance = document.getElementById('sim-insurance');
  const inputDiscount = document.getElementById('sim-discount');

  // DOM Elements - Outputs
  const outRevenue = document.getElementById('out-revenue');
  const outCogs = document.getElementById('out-cogs');
  const outProfit = document.getElementById('out-profit');
  const outMargin = document.getElementById('out-margin');
  const outLaborCost = document.getElementById('out-labor-cost');
  const outLogisticsCost = document.getElementById('out-logistics-cost');
  const outConsumablesCost = document.getElementById('out-consumables-cost');
  const outOverheadCost = document.getElementById('out-overhead-cost');
  const outEbitda = document.getElementById('out-ebitda');

  // Formatters
  const formatEUR = (val) => new Intl.NumberFormat('pt-PT', { style: 'currency', currency: 'EUR' }).format(val);
  const formatPct = (val) => `${val.toFixed(1)}%`;

  function calculateSimulation() {
    if (!selectPack || !selectTypology) return;

    const pack = selectPack.value;
    const typology = selectTypology.value;
    const area = parseFloat(inputArea.value) || 90;
    const techs = parseInt(inputTechs.value, 10) || 2;
    const hours = parseFloat(inputHours.value) || 4;
    const rate = parseFloat(inputRate.value) || 14.0;
    const consumables = parseFloat(inputConsumables.value) || 25.0;
    const km = parseFloat(inputKm.value) || 25.0;
    const kmCost = parseFloat(inputKmCost.value) || 0.40;
    const tolls = parseFloat(inputTolls.value) || 4.50;
    const insurance = parseFloat(inputInsurance.value) || 10.0;
    const discountPct = parseFloat(inputDiscount.value) || 0.0;

    // Base Price calculation from Pricing Engine
    let basePrice = engine.getPrice(pack, typology, area);
    
    // Apply discount
    const discountAmount = (basePrice * (discountPct / 100));
    const finalRevenue = Math.max(0, basePrice - discountAmount);

    // COGS Components
    const laborCost = techs * hours * rate;
    const travelCost = km * kmCost;
    const totalLogistics = travelCost + tolls;
    const totalOverhead = insurance;
    const totalCogs = laborCost + consumables + totalLogistics + totalOverhead;

    // Profit & Margins
    const grossProfit = finalRevenue - totalCogs;
    const grossMarginPct = finalRevenue > 0 ? (grossProfit / finalRevenue) * 100 : 0;
    
    // Estimated Fixed Cost Absorption per op (~15% of rev)
    const estimatedFixedOpex = finalRevenue * 0.15;
    const simulatedEbitda = grossProfit - estimatedFixedOpex;

    // Render Outputs
    if (outRevenue) outRevenue.textContent = formatEUR(finalRevenue);
    if (outCogs) outCogs.textContent = formatEUR(totalCogs);
    if (outProfit) outProfit.textContent = formatEUR(grossProfit);
    if (outMargin) {
      outMargin.textContent = formatPct(grossMarginPct);
      outMargin.className = grossMarginPct >= 50 ? 'output-hero-sub text-emerald' : 'output-hero-sub text-primary';
    }

    if (outLaborCost) outLaborCost.textContent = formatEUR(laborCost);
    if (outLogisticsCost) outLogisticsCost.textContent = formatEUR(totalLogistics);
    if (outConsumablesCost) outConsumablesCost.textContent = formatEUR(consumables);
    if (outOverheadCost) outOverheadCost.textContent = formatEUR(totalOverhead);
    if (outEbitda) outEbitda.textContent = formatEUR(simulatedEbitda);
  }

  // Event Listeners for Simulator Inputs
  const allInputs = [
    selectPack, selectTypology, inputArea, inputTechs, inputHours, inputRate,
    inputConsumables, inputKm, inputKmCost, inputTolls, inputInsurance, inputDiscount
  ];

  allInputs.forEach(elem => {
    if (elem) {
      elem.addEventListener('input', calculateSimulation);
      elem.addEventListener('change', calculateSimulation);
    }
  });

  // Adjust defaults when Pack or Typology changes
  if (selectPack && selectTypology) {
    const handlePresetChange = () => {
      const p = selectPack.value;
      const t = selectTypology.value;

      if (p === 'propertyPrep') {
        inputTechs.value = t === 'T4' ? 3 : 2;
        inputHours.value = t === 'T1' ? 3.5 : (t === 'T2' ? 4.5 : (t === 'T3' ? 5.5 : 7.0));
      } else if (p === 'renovation') {
        inputTechs.value = t === 'T4' ? 3 : 2;
        inputHours.value = t === 'T1' ? 5.0 : (t === 'T2' ? 6.5 : (t === 'T3' ? 8.0 : 9.5));
        inputConsumables.value = 35.0;
      } else if (p === 'readyToOccupy') {
        inputTechs.value = t === 'T4' ? 3 : 2;
        inputHours.value = t === 'T1' ? 4.0 : (t === 'T2' ? 5.0 : (t === 'T3' ? 6.0 : 7.5));
      } else if (p === 'propertyCare') {
        inputTechs.value = 1;
        inputHours.value = t === 'T1' ? 1.5 : (t === 'T2' ? 2.0 : (t === 'T3' ? 2.5 : 3.0));
        inputConsumables.value = 10.0;
      }
      calculateSimulation();
    };

    selectPack.addEventListener('change', handlePresetChange);
    selectTypology.addEventListener('change', handlePresetChange);
  }

  // Listen for pricing updates from pricing engine
  window.addEventListener('ha_pricing_updated', calculateSimulation);

  // Initial Calculation
  calculateSimulation();

  // Export CSV Action
  const btnExportCsv = document.getElementById('btn-export-sim-csv');
  if (btnExportCsv) {
    btnExportCsv.addEventListener('click', () => {
      const p = selectPack.value;
      const t = selectTypology.value;
      const rev = outRevenue.textContent;
      const cogs = outCogs.textContent;
      const profit = outProfit.textContent;
      const margin = outMargin.textContent;

      const csvContent = "data:text/csv;charset=utf-8," 
        + "Parametro,Valor\n"
        + `Pack,${p}\n`
        + `Tipologia,${t}\n`
        + `Area (m2),${inputArea.value}\n`
        + `Tecnicos,${inputTechs.value}\n`
        + `Horas por Tecnico,${inputHours.value}\n`
        + `Preco Venda Final,${rev.replace('€', '').trim()}\n`
        + `Custos Diretos (COGS),${cogs.replace('€', '').trim()}\n`
        + `Margem Bruta,${profit.replace('€', '').trim()}\n`
        + `Margem Percentual,${margin}\n`;

      const encodedUri = encodeURI(csvContent);
      const link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", `HA_Simulacao_${p}_${t}.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  }

  // Print Action
  const btnPrint = document.getElementById('btn-print-sim');
  if (btnPrint) {
    btnPrint.addEventListener('click', () => {
      window.print();
    });
  }
});
