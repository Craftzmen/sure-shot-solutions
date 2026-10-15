export type CoveragePageContent = {
  slug: "auto-insurance" | "home-renters-insurance" | "life-insurance"
  title: string
  metaTitle: string
  metaDescription: string
  crumb: string
  eyebrow: string
  headline: string
  lead: string
  points: { index: string; title: string; text: string }[]
  prepare: string[]
  note: string
  guideLabel: string
}

export const coveragePages: CoveragePageContent[] = [
  {
    slug: "auto-insurance",
    title: "Auto insurance",
    metaTitle: "Auto Insurance for North Carolina Drivers",
    metaDescription:
      "Start an auto insurance conversation around drivers, vehicles, usage, deductibles, and the protection questions that fit a North Carolina household.",
    crumb: "Auto insurance",
    eyebrow: "Auto insurance · North Carolina",
    headline: "Cover the journeys that keep life moving.",
    lead: "Auto insurance decisions are shaped by more than the vehicle in the driveway. Start with the drivers, vehicles, usage, financing, and protection priorities that make your situation unique.",
    points: [
      {
        index: "01",
        title: "Liability protection",
        text: "Discuss the protection designed to respond when a covered driver is legally responsible for injury or property damage.",
      },
      {
        index: "02",
        title: "Vehicle damage",
        text: "Ask how collision and comprehensive—or other-than-collision—coverage, deductibles, and exclusions may apply to your vehicle.",
      },
      {
        index: "03",
        title: "Uninsured drivers",
        text: "Include questions about uninsured or underinsured motorist coverage and how it fits your state and policy.",
      },
      {
        index: "04",
        title: "Everyday use",
        text: "Bring details about commuting, household drivers, vehicle changes, financing, rideshare use, and who regularly uses the car.",
      },
    ],
    prepare: [
      "Vehicle year, make, model, and ownership status",
      "Household drivers and regular vehicle use",
      "Current policy, renewal date, and questions about deductibles",
      "Any recent move, ticket, claim, or vehicle change",
    ],
    note: "North Carolina auto insurance requirements and available options can change by situation. Review the actual policy and current state guidance with a qualified professional.",
    guideLabel: "Auto insurance",
  },
  {
    slug: "home-renters-insurance",
    title: "Home + renters insurance",
    metaTitle: "Homeowners & Renters Insurance in North Carolina",
    metaDescription:
      "Start a homeowners or renters insurance conversation around the place you live, belongings, liability, and the questions to raise before a loss.",
    crumb: "Home + renters insurance",
    eyebrow: "Homeowners & renters · North Carolina",
    headline: "Protect the place that holds everything together.",
    lead: "Home and renters insurance conversations begin with where you live, what you own, who shares the space, and the risks you want to understand before a loss occurs.",
    points: [
      {
        index: "01",
        title: "The dwelling",
        text: "Homeowners may discuss the structure, other structures, replacement considerations, deductibles, and exclusions.",
      },
      {
        index: "02",
        title: "Personal property",
        text: "Renters and homeowners can review how belongings are valued, what limits apply, and whether special items need attention.",
      },
      {
        index: "03",
        title: "Personal liability",
        text: "Ask how liability and medical-payments provisions may respond to eligible incidents involving others.",
      },
      {
        index: "04",
        title: "A disrupted home",
        text: "Discuss additional living expense or loss-of-use questions if a covered loss affects where you can live temporarily.",
      },
    ],
    prepare: [
      "Homeowner or renter status and property type",
      "Address, occupancy, major improvements, and safety features",
      "Valuable items, belongings, and documentation questions",
      "Wind, hail, flood, water, and other exclusions to clarify",
    ],
    note: "Homeowners and renters policies can differ materially. Certain weather events, water losses, valuables, and property uses may require specific questions or separate coverage.",
    guideLabel: "Home + renters insurance",
  },
  {
    slug: "life-insurance",
    title: "Life insurance",
    metaTitle: "Life Insurance Conversations for North Carolina Families",
    metaDescription:
      "Start a life insurance conversation around the people, income, debts, and long-term responsibilities you want to keep in view.",
    crumb: "Life insurance",
    eyebrow: "Life insurance · North Carolina",
    headline: "Make tomorrow’s responsibilities easier to carry.",
    lead: "Life insurance planning often starts with the people, income, debts, and long-term commitments you want to keep in view. A useful conversation begins with your priorities—not a one-size-fits-all answer.",
    points: [
      {
        index: "01",
        title: "Income and dependents",
        text: "Consider the people who rely on your income, caregiving, or day-to-day support and the time they may need to adjust.",
      },
      {
        index: "02",
        title: "Debts and final expenses",
        text: "Bring questions about mortgages, other debts, education goals, and final-expense planning.",
      },
      {
        index: "03",
        title: "Policy structure",
        text: "Common categories include term and permanent life insurance; suitability depends on goals, budget, underwriting, and policy terms.",
      },
      {
        index: "04",
        title: "Review over time",
        text: "A marriage, child, home, business, health change, or new financial responsibility may prompt a new review.",
      },
    ],
    prepare: [
      "Household income and who depends on it",
      "Debts, savings, education, and long-term responsibilities",
      "Desired time horizon and budget questions",
      "Beneficiary and policy-ownership questions to raise with a professional",
    ],
    note: "Life insurance is a contract with an insurer. Benefits, premiums, cash values, exclusions, guarantees, and eligibility are determined by the policy and underwriting—not this website.",
    guideLabel: "Life insurance",
  },
]

export function getCoveragePage(slug: CoveragePageContent["slug"]) {
  const page = coveragePages.find((item) => item.slug === slug)
  if (!page) throw new Error(`Missing coverage page: ${slug}`)
  return page
}
