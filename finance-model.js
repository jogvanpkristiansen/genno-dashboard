// Auto-generated af Genno CFO Agent — 27. maj 2026
// Opdater ved ændrede forudsætninger
// ─────────────────────────────────────────────

window.FINANCE_MODEL = {
  updatedAt: '27/05/2026',

  // ── FASTE UDGIFTER ──────────────────────────
  fixedCosts: {
    total: 24401,
    items: [
      { name: 'Malik — lærlingeløn',  amount: 12000, category: 'løn' },
      { name: 'Forsikring (alle)',     amount: 2837,  category: 'drift' },
      { name: 'Meta + Instagram ads', amount: 4575,  category: 'marketing' },
      { name: 'Adwise retainer',      amount: 3700,  category: 'marketing', note: 'Mulig opsigelse 2. juni' },
      { name: 'E-conomic',            amount: 199,   category: 'software' },
      { name: 'Webflow hosting',      amount: 200,   category: 'software' },
      { name: 'Netgiganten',          amount: 50,    category: 'software' },
      { name: 'Claude Max',           amount: 700,   category: 'software' },
      { name: 'Railway Pro',          amount: 140,   category: 'software' },
    ]
  },

  // ── BREAKEVEN ───────────────────────────────
  breakeven: {
    // Jógvan tager intet — bare dæk faste udgifter
    onlyFixed: {
      revenuePerMonth: 26523,
      hoursPerMonth: 62,
      label: 'Absolut minimum'
    },
    // Jógvan tager 15.000 netto
    minimal: {
      revenuePerMonth: 53871,
      hoursPerMonth: 127,
      label: 'Kritisk minimum'
    },
    // Jógvan tager 30.000 netto
    comfortable: {
      revenuePerMonth: 86000,
      hoursPerMonth: 202,
      label: 'Komfortabelt'
    }
  },

  // ── KAPACITET ───────────────────────────────
  capacity: {
    jogvan: { hoursPerMonth: 130, ratePerHour: 425 },
    malik:  { hoursPerMonth: 80,  ratePerHour: 300 },
    totalRevenueTarget: 83750,  // ex moms, inkl. materialetillæg
    totalInclMoms:      104688, // ×1.25
  },

  // ── LIKVIDITET NU ───────────────────────────
  liquidity: {
    asOf: '27/05/2026',
    bankBalance:       40000,
    outstanding:       60000,   // udestående fakturaer
    totalAssets:      100000,
    obligations: [
      { name: 'Gældstyrelsen',      amount: 33000, urgency: 'URGENT',    note: 'Betal hurtigst muligt' },
      { name: 'EasyPark faktura',   amount: 2450,  urgency: 'OVERDUE',   note: 'Forfald 23. maj — OVERSKREDET' },
      { name: 'Moms reserve',       amount: 60000, urgency: 'HIGH',      note: 'Forfald 1. august 2026' },
      { name: 'Juni drift',         amount: 24401, urgency: 'MONTHLY',   note: 'Faste udgifter juni' },
    ],
    totalObligations: 119851,
    netPosition:      -19851,   // KRITISK — underskud uden ny fakturering
    alert: 'TEKNISK UNDERSKUD — udestående 60.000 SKAL hjem ASAP'
  },

  // ── 3-MÅNEDERS FORECAST ─────────────────────
  forecast: [
    {
      month: 'Juni 2026',
      openingBalance: 40000,
      incoming: { outstanding: 60000, newBilling: 60000 },
      outgoing: { gaeldstyrelsen: -33000, easypark: -2450, drift: -24401, momsReserve: -12000 },
      closingBalance: 88149,
      note: 'Forudsætter udestående + ~60k ny fakturering'
    },
    {
      month: 'Juli 2026',
      openingBalance: 88149,
      incoming: { newBilling: 80000 },
      outgoing: { drift: -24401, momsReserve: -16000 },
      closingBalance: 127748,
      note: 'Sæson — travl periode'
    },
    {
      month: 'August 2026',
      openingBalance: 127748,
      incoming: { newBilling: 70000 },
      outgoing: { momsBetaling: -60000, drift: -24401, momsReserve: -14000 },
      closingBalance: 99347,
      note: 'Momsbetaling 1. august!'
    }
  ],

  // ── CFO BESLUTNINGSREGLER ───────────────────
  decisionRules: [
    { id: 1, rule: 'Sæt 20% af alle indbetalinger til side som moms — SKATS penge' },
    { id: 2, rule: 'Minimum 40.000 kr i banken altid — under dette = alarm' },
    { id: 3, rule: 'Kræv 30% forudbetaling på projekter >10.000 kr, 50% på >30.000 kr' },
    { id: 4, rule: 'Jógvan minimum 400 kr/t ex moms, Malik minimum 250 kr/t' },
    { id: 5, rule: 'Altid 15% markup på materialer' },
    { id: 6, rule: 'Faktura forfald >30 dage → rykker. >60 dage → inkasso' },
    { id: 7, rule: 'Ingen investering >5.000 kr uden likviditetstjek' },
    { id: 8, rule: 'Omsætning <54.000 kr/md = sparekrisemodus — sæt Adwise+Meta på pause' },
    { id: 9, rule: 'Juli-august = travl sæson, book fuldt op. Jan-feb = spar og planlæg' },
    { id: 10, rule: '2. svend anbefales når omsætning stabilt >80.000 kr/md i 3 måneder' },
  ]
};
