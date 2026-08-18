"""Unit tests for H.A - Limpeza financial calculations."""

from __future__ import annotations

import json
import unittest
from pathlib import Path

PROJECT_ROOT = Path(__file__).resolve().parents[2]


class TestHAFinancialEngine(unittest.TestCase):
    def setUp(self) -> None:
        config_path = PROJECT_ROOT / "config.json"
        with open(config_path, "r", encoding="utf-8") as f:
            self.config = json.load(f)

    def test_baseline_pricing_structure(self) -> None:
        pricing = self.config["pricing"]
        self.assertEqual(pricing["propertyPrepT1"], 280)
        self.assertEqual(pricing["propertyPrepT2"], 390)
        self.assertEqual(pricing["propertyPrepT3"], 490)
        self.assertEqual(pricing["renovationT1"], 420)
        self.assertEqual(pricing["renovationT2"], 580)
        self.assertEqual(pricing["renovationT3"], 750)
        self.assertEqual(pricing["readyT1"], 320)
        self.assertEqual(pricing["readyT2"], 440)
        self.assertEqual(pricing["readyT3"], 560)
        self.assertEqual(pricing["propertyCareT1"], 120)

    def test_unit_economics_cogs_calculation(self) -> None:
        price = 390.0
        techs = 2
        hours = 4.5
        cost_hour = 14.0
        consumables = 25.0
        km = 25.0
        km_cost = 0.40
        tolls = 4.50
        insurance = 10.0

        mo = techs * hours * cost_hour
        travel = km * km_cost
        cogs = mo + consumables + travel + tolls + insurance
        profit = price - cogs
        margin_pct = (profit / price) * 100

        self.assertEqual(mo, 126.0)
        self.assertEqual(cogs, 175.50)
        self.assertAlmostEqual(margin_pct, 55.0, places=1)
        self.assertTrue(profit > 200.0)

    def test_five_year_revenue_targets(self) -> None:
        targets = self.config["financialTargets"]
        self.assertEqual(targets["year1"]["annualRevenue"], 151200)
        self.assertEqual(targets["year2"]["annualRevenue"], 302400)
        self.assertEqual(targets["year3"]["annualRevenue"], 504000)
        self.assertEqual(targets["year4"]["annualRevenue"], 756000)
        self.assertEqual(targets["year5"]["annualRevenue"], 1108800)


if __name__ == "__main__":
    unittest.main()
