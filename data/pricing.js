export const pricingPlans = [
  {
    title: "Individual Therapy (Adults/Teens)",
    price: "$ 100.00",
    per: "Per Session",
    features: [
      "60 minutes 1 on 1 session",
      "Focus on anxiety, depression, stress, trauma",
      "Tailored evidence‑based approaches",
    ],
    buttonStyle: "btn-border",
    animationOrder: 1,
  },
  {
    title: "Couples / Relationship Therapy",
    price: "$ 180.00",
    per: "Per Session",
    features: [
      "60 minutes session for couples",
      "Improve communication & conflict resolution",
      "Strengthen trust and intimacy",
    ],
    buttonStyle: "btn-border", // no border for 'active' one
    animationOrder: 2,
  },
  {
    title: "Family Therapy",
    price: "$ 200.00",
    per: "Per Session",
    features: [
      "60 minutes session for family or parent‑child sessions",
      "Address family dynamics & conflicts",
      "Build healthier patterns of interaction",
    ],
    buttonStyle: "btn-border",
    animationOrder: 3,
  },
  {
    title: "Trauma‑Informed Therapy",
    price: "$ 150.00",
    per: "Per Session",
    features: [
      "60 minutes 1 on 1 session",
      "Safe, supportive environment",
      "Focus on healing from trauma & PTSD",
      "Techniques may include EMDR, grounding, and resilience‑building",
    ],
    buttonStyle: "btn-border",
    animationOrder: 4,
  },
  {
    title: "Grief & Loss Therapy",
    price: "$ 150.00",
    per: "Per Session",
    features: [
      "60 minutes 1 on 1 session",
      "Support through bereavement",
      "Compassionate space for processing emotions",
      "Guidance toward adjustment",
    ],
    buttonStyle: "btn-border",
    animationOrder: 5,
  },
  {
    title: "Psychological Assessment",
    price: "$ 400.00",
    per: "Per Assessment",
    features: [
      "2-3 hours assessment",
      "Clinical interviews",
      "Standardized testing",
      "Written report with analytics and recommendations",
    ],
    buttonStyle: "btn-border",
    animationOrder: 6,
  },
];

export const pricingPlans2 = [
  {
    title: "Starter",
    icon: "/assets/images/pricing/pricing-logo-1.svg",
    features: [
      "5 Social Media Account",
      "Free Platform Access",
      "Free Platform Access",
      "24/7 Customer Support",
    ],
    price: "$ 5.00",
    active: false,
    borderedButton: true,
  },
  {
    title: "Premium",
    icon: "/assets/images/pricing/pricing-logo-2.svg",
    features: [
      "5 Social Media Account",
      "Free Platform Access",
      "24/7 Customer Support",
      "24/7 Customer Support",
    ],
    price: "$ 230.00",
    active: true,
    borderedButton: false,
  },
  {
    title: "Basic",
    icon: "/assets/images/pricing/pricing-logo-3.svg",
    features: [
      "5 Social Media Account",
      "Free Platform Access",
      "Digital Marketing",
      "24/7 Customer Support",
    ],
    price: "$ 45.00",
    active: false,
    borderedButton: true,
  },
];
