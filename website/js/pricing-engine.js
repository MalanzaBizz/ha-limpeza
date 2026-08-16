/**
 * H.A - LIMPEZA | PROPERTY READINESS & ASSET CARE
 * Pricing Engine & Config Storage (pricing-engine.js)
 */

const PricingDefaults = {
  propertyPrepT1: 280,
  propertyPrepT2: 390,
  propertyPrepT3: 490,
  propertyPrepT4M2: 3.8,

  renovationT1: 420,
  renovationT2: 580,
  renovationT3: 750,
  renovationT4M2: 5.5,

  readyT1: 320,
  readyT2: 440,
  readyT3: 560,
  readyT4M2: 4.2,

  propertyCareT1: 120,
  propertyCareT2: 160,
  propertyCareT3: 200,
  propertyCareT4: 240,

  costHour: 14.0,
  consumables: 25.0,
  kmCost: 0.40,
  defaultKm: 25.0,
  defaultTolls: 4.50,
  defaultInsurance: 10.0
};

class PricingEngine {
  constructor() {
    this.storageKey = 'ha_limpeza_pricing_v1';
    this.pricing = this.loadPricing();
  }

  loadPricing() {
    try {
      const saved = localStorage.getItem(this.storageKey);
      if (saved) {
        return { ...PricingDefaults, ...JSON.parse(saved) };
      }
    } catch (e) {
      console.warn('Could not read from localStorage, using defaults:', e);
    }
    return { ...PricingDefaults };
  }

  savePricing(newPricing) {
    this.pricing = { ...this.pricing, ...newPricing };
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.pricing));
      this.notifyChange();
      return true;
    } catch (e) {
      console.error('Failed to save pricing:', e);
      return false;
    }
  }

  resetToDefaults() {
    this.pricing = { ...PricingDefaults };
    try {
      localStorage.removeItem(this.storageKey);
      this.notifyChange();
      return true;
    } catch (e) {
      console.error('Failed to reset defaults:', e);
      return false;
    }
  }

  getPrice(pack, typology, areaM2 = 90) {
    const p = this.pricing;
    if (pack === 'propertyPrep') {
      if (typology === 'T1') return p.propertyPrepT1;
      if (typology === 'T2') return p.propertyPrepT2;
      if (typology === 'T3') return p.propertyPrepT3;
      if (typology === 'T4') return Math.round(areaM2 * p.propertyPrepT4M2);
    } else if (pack === 'renovation') {
      if (typology === 'T1') return p.renovationT1;
      if (typology === 'T2') return p.renovationT2;
      if (typology === 'T3') return p.renovationT3;
      if (typology === 'T4') return Math.round(areaM2 * p.renovationT4M2);
    } else if (pack === 'readyToOccupy') {
      if (typology === 'T1') return p.readyT1;
      if (typology === 'T2') return p.readyT2;
      if (typology === 'T3') return p.readyT3;
      if (typology === 'T4') return Math.round(areaM2 * p.readyT4M2);
    } else if (pack === 'propertyCare') {
      if (typology === 'T1') return p.propertyCareT1;
      if (typology === 'T2') return p.propertyCareT2;
      if (typology === 'T3') return p.propertyCareT3;
      if (typology === 'T4') return p.propertyCareT4;
    }
    return 390;
  }

  notifyChange() {
    window.dispatchEvent(new CustomEvent('ha_pricing_updated', { detail: this.pricing }));
  }
}

// Global instance
window.haPricingEngine = new PricingEngine();
