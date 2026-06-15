// Anonymized, representative case records used for the interactive
// "Still Waiting" timeline and the economic-impact dashboard.
// These illustrate the campaign with realistic figures; real submissions
// are added through the Register Your Case form.

export const CASES = [
  {
    id: 'c-001',
    countryCode: 'CN',
    country: 'China',
    appliedYear: 2020,
    investedYear: 2020,
    type: 'realestate',
    amount: 500000,
    family: 3,
    story:
      'We bought a qualifying property in 2020 and moved our two children into Portuguese schools. Five years on, we are still waiting for our residence cards while our biometrics appointments are repeatedly postponed.',
  },
  {
    id: 'c-002',
    countryCode: 'BR',
    country: 'Brazil',
    appliedYear: 2020,
    investedYear: 2020,
    type: 'capital',
    amount: 1500000,
    family: 2,
    story:
      'I transferred capital and closed my business in Brazil to relocate. The processing delays have frozen my plans to start a company here.',
  },
  {
    id: 'c-003',
    countryCode: 'US',
    country: 'United States',
    appliedYear: 2021,
    investedYear: 2021,
    type: 'fund',
    amount: 500000,
    family: 4,
    story:
      'Our family invested through a regulated fund in 2021. We have renewed documents twice and paid every fee, yet our cards have never been issued.',
  },
  {
    id: 'c-004',
    countryCode: 'ZA',
    country: 'South Africa',
    appliedYear: 2021,
    investedYear: 2020,
    type: 'realestate',
    amount: 350000,
    family: 5,
    story:
      'We relocated three generations of our family. The uncertainty has affected my parents’ healthcare access and my children’s university plans.',
  },
  {
    id: 'c-005',
    countryCode: 'IN',
    country: 'India',
    appliedYear: 2022,
    investedYear: 2021,
    type: 'business',
    amount: 500000,
    family: 2,
    story:
      'I created jobs through a new business as required. Despite full compliance, my application has sat without a decision for years.',
  },
  {
    id: 'c-006',
    countryCode: 'TR',
    country: 'Türkiye',
    appliedYear: 2020,
    investedYear: 2020,
    type: 'capital',
    amount: 1000000,
    family: 3,
    story:
      'Five years of waiting has meant my children grew up in limbo, unsure each year whether we could remain.',
  },
  {
    id: 'c-007',
    countryCode: 'GB',
    country: 'United Kingdom',
    appliedYear: 2021,
    investedYear: 2021,
    type: 'fund',
    amount: 500000,
    family: 1,
    story:
      'I followed every published rule. Then the framework changed retroactively while my application was still pending.',
  },
  {
    id: 'c-008',
    countryCode: 'CN',
    country: 'China',
    appliedYear: 2022,
    investedYear: 2022,
    type: 'realestate',
    amount: 280000,
    family: 4,
    story:
      'We invested in a low-density regeneration area as encouraged. The promised timeline never materialized.',
  },
  {
    id: 'c-009',
    countryCode: 'RU',
    country: 'Russia',
    appliedYear: 2020,
    investedYear: 2020,
    type: 'capital',
    amount: 1000000,
    family: 2,
    story:
      'After more than five years without a decision, we still cannot travel freely or plan our future with any certainty.',
  },
  {
    id: 'c-010',
    countryCode: 'BR',
    country: 'Brazil',
    appliedYear: 2022,
    investedYear: 2022,
    type: 'culture',
    amount: 250000,
    family: 3,
    story:
      'We supported a cultural heritage project as a qualifying route. The administrative silence has been total.',
  },
  {
    id: 'c-011',
    countryCode: 'US',
    country: 'United States',
    appliedYear: 2020,
    investedYear: 2019,
    type: 'realestate',
    amount: 500000,
    family: 2,
    story:
      'We are among the earliest applicants still waiting. Each renewal cycle adds cost and anxiety without resolution.',
  },
  {
    id: 'c-012',
    countryCode: 'IN',
    country: 'India',
    appliedYear: 2021,
    investedYear: 2021,
    type: 'fund',
    amount: 500000,
    family: 4,
    story:
      'My elderly parents were included in our application. The delay has had real consequences for their wellbeing.',
  },
]

export const INVESTMENT_TYPE_KEYS = {
  realestate: 0,
  capital: 1,
  fund: 2,
  business: 3,
  culture: 4,
  other: 5,
}

// NOTE: Campaign statistics (totals, capital, wait times, breakdowns) are NOT
// stored here — they are computed live from the database and served by the API
// at /api/stats. The frontend reads them via src/lib/useStats.js. Do not
// reintroduce hard-coded figures; they would be inaccurate.
