export const homeHero = {
  eyebrow: "Insurance, made easier to understand",
  title: "Protect what you drive, own, and love.",
  lead: "Sure Shot Solutions LLC helps North Carolina households start a clearer conversation about auto, homeowners, renters, and life insurance—so the next step feels informed and practical.",
  primary: { href: "/#coverage", label: "Explore coverage" },
  secondary: { href: "tel:+18882732055", label: "Call (888) 273-2055" },
  chips: ["North Carolina focused", "Available 24/7", "No online payments"],
}

export const conversationPoints = [
  { title: "Coverage conversations", text: "Understand the common moving pieces." },
  { title: "North Carolina focus", text: "Start with your household and location." },
  { title: "Human next steps", text: "Ask questions before you decide." },
]

export const coveragePriorities = [
  {
    index: "01",
    title: "Auto insurance",
    text: "Build the conversation around drivers, vehicles, usage, deductibles, and the protection required for the road ahead.",
    href: "/auto-insurance",
  },
  {
    index: "02",
    title: "Homeowners & renters",
    text: "Think about the place you live, the belongings inside it, personal liability, and the costs of a covered disruption.",
    href: "/home-renters-insurance",
  },
  {
    index: "03",
    title: "Life insurance",
    text: "Plan around the people, income, debts, and long-term responsibilities you want to keep in view.",
    href: "/life-insurance",
  },
]

export const processSteps = [
  {
    index: "01",
    title: "Name what matters",
    text: "Tell us what you drive, where you live, who depends on you, or what changed recently.",
  },
  {
    index: "02",
    title: "Explore the options",
    text: "Review common coverage categories, limits, exclusions, and questions to raise with a qualified professional.",
  },
  {
    index: "03",
    title: "Choose the next step",
    text: "Move forward only when the details, eligibility, pricing, and policy terms are clear to you.",
  },
]

export const personalPoints = [
  "Start with the coverage type that feels most urgent.",
  "Bring questions about limits, deductibles, exclusions, and timing.",
  "Keep personal identifiers and payment details out of website messages.",
  "Use policy documents—not marketing copy—as the final source of truth.",
]

export const faqs = [
  {
    question: "Is this website an online insurance checkout?",
    answer:
      "No. This website does not collect online payments, card details, or electronic policy binding instructions. It is a starting point for a coverage conversation.",
  },
  {
    question: "Does a request guarantee coverage or a specific premium?",
    answer:
      "No. Eligibility, underwriting, premiums, limits, exclusions, and availability depend on the applicable insurer, applicant information, policy terms, and state requirements.",
  },
  {
    question: "Can I ask about more than one type of insurance?",
    answer:
      "Yes. Select multiple coverage types in the request form and describe your priorities. Auto, homeowners, renters, and life insurance each address different risks and policy questions.",
  },
  {
    question: "What should I have ready before I reach out?",
    answer:
      "Think about the people, property, vehicles, income responsibilities, current policies, renewal timing, and questions you want to discuss. Do not send Social Security numbers, payment-card information, or other highly sensitive documents through this form.",
  },
]

export const legalNotices = [
  {
    id: "privacy",
    title: "Privacy notice",
    paragraphs: [
      "We use information you submit—such as your name, contact details, state, ZIP code, coverage focus, and message—to respond to your request and coordinate service-related communication. We do not ask for Social Security numbers, payment-card details, or government identification through this form. We do not sell personal information.",
      "Contact support@sureshotsolutions.me with a privacy question or request.",
    ],
  },
  {
    id: "terms",
    title: "Terms of use",
    paragraphs: [
      "This website provides general educational information and a way to request contact. Content is not an insurance policy, quote, application decision, guarantee, legal opinion, tax advice, or financial advice. Submitting a form does not create an appointment, client relationship, coverage, or binding instruction.",
      "Policy documents and written terms from the applicable insurer control any coverage decision.",
    ],
  },
  {
    id: "payments",
    title: "Payment policy",
    paragraphs: [
      "This website does not collect online payments, deposits, premium payments, bank details, or card details. Do not enter payment information into a form field or send it by email.",
      "If a future transaction process is introduced, the applicable payment provider, fees, timing, security information, and updated policies should be disclosed before use.",
    ],
  },
  {
    id: "communications",
    title: "Communications policy",
    paragraphs: [
      "When you submit a request, you consent to service-related calls, emails, and text messages using the contact information you provide. Message or data charges from your carrier may apply. You may ask us to stop a communication method, except where a communication is reasonably necessary to respond to an active request or protect a service relationship.",
    ],
  },
  {
    id: "coverage-disclosure",
    title: "Coverage and licensing disclosure",
    paragraphs: [
      "Insurance terms vary by insurer, product, applicant, property, vehicle, underwriting, state rules, and policy form. Availability is not guaranteed. No coverage is effective unless and until the applicable insurer accepts the risk and issues or otherwise confirms coverage under its own process.",
      "Nothing on this website changes a policy, replaces the advice of a qualified insurance professional, or guarantees a claim outcome.",
    ],
  },
  {
    id: "cancellation",
    title: "Cancellation and refunds",
    paragraphs: [
      "Because this website does not take online payments or sell insurance through checkout, it has no website purchase, deposit, or automatic refund process. Any cancellation, payment, premium, or refund terms for a separately confirmed transaction must be provided in the applicable written agreement or policy documents.",
    ],
  },
  {
    id: "accessibility",
    title: "Accessibility statement",
    paragraphs: [
      "We aim to keep this website readable, keyboard accessible, responsive, and usable with common assistive technologies. If you encounter a barrier, contact support@sureshotsolutions.me or call (888) 273-2055 and identify the page or feature that needs attention.",
    ],
  },
]

export const coverageOptions = [
  "Auto insurance",
  "Homeowners insurance",
  "Renters insurance",
  "Life insurance",
  "Multiple coverage types",
] as const
