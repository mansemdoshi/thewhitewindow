// Services, in the order they appear on /services.
// `id` doubles as the page anchor and the HJachi booking type (/book-a-session?type=<id>),
// so changing one breaks deep links into the booking widget.
// `featured` services appear as cards on the homepage (six at most).

export const services = [
  {
    id: "individual-psychotherapy",
    title: "Individual psychotherapy",
    summary: "Anxiety, low mood, stress and life changes.",
    description:
      "A confidential space to explore emotions, patterns and challenges. Sessions are shaped around you, to help you build emotional resilience and understand yourself more deeply.",
    forWhom: "Adults working through anxiety, low mood, stress, relationship difficulties or a period of change.",
    featured: true,
  },
  {
    id: "premarital-counselling",
    title: "Premarital counselling",
    summary: "Communication, expectations, family boundaries.",
    description:
      "A practical, evidence-based space to prepare for marriage. We cover communication, expectations, handling conflict, family boundaries and emotional readiness.",
    forWhom: "Couples preparing for marriage, including those balancing family and cultural expectations.",
    featured: true,
  },
  {
    id: "cbt-for-children-adolescents",
    title: "CBT for children and adolescents",
    summary: "Play-based CBT for worry, behaviour and low mood.",
    description:
      "Age-appropriate cognitive behavioural strategies that help young people manage anxiety, worry, behavioural challenges and low mood. Therapy includes play-based techniques, parent coaching and clear tasks to practise at home between sessions.",
    forWhom: "Children and teenagers, with their parents involved at every stage.",
    featured: true,
  },
  {
    id: "parental-guidance-support",
    title: "Parental guidance and support",
    summary: "Practical tools for everyday parenting.",
    description:
      "A supportive space where parents learn practical strategies and emotional tools for everyday parenting challenges. From toddler routines to teenage conflict, sessions combine evidence-based techniques with guidance, so family life feels easier and more confident.",
    forWhom: "Parents and caregivers of children of any age.",
    featured: true,
  },
  {
    id: "psychological-assessments",
    title: "Psychological assessment",
    summary: "Clarity on learning, developmental or emotional concerns.",
    description:
      "Structured, standardised assessments that bring clarity to learning, developmental, behavioural or emotional concerns. You receive a clear report and recommended next steps, which guide treatment and self-understanding.",
    forWhom: "Children, adolescents and adults who want a clearer picture before deciding on support.",
    process: [
      "Book an assessment consultation online.",
      "Complete the pre-assessment forms electronically.",
      "Schedule the assessment, online or in person.",
      "Receive a detailed report, with a follow-up session to talk through the results and a plan.",
    ],
    featured: true,
  },
  {
    id: "trauma-informed-therapy",
    title: "Trauma-informed therapy",
    summary: "Healing at a pace that feels safe.",
    description:
      "Every session puts safety, empathy and pacing first, helping you heal from trauma and reclaim emotional strength.",
    forWhom: "Anyone affected by difficult or overwhelming experiences, recent or long past.",
    featured: true,
  },
  {
    id: "cognitive-behavioral-therapy",
    title: "Cognitive behavioural therapy (CBT)",
    description:
      "A practical approach that helps you notice and challenge unhelpful thoughts, so you can regulate emotions and respond to life with more resilience.",
    forWhom: "Adults and young people dealing with anxiety, worry, low mood or stuck patterns.",
  },
  {
    id: "acceptance-and-commitment-therapy",
    title: "Acceptance and commitment therapy (ACT)",
    description:
      "A compassionate, mindfulness-based therapy that encourages acceptance, presence and living by what matters to you.",
    forWhom: "People who want to make room for difficult feelings and move towards their values.",
  },
  {
    id: "grief-loss-counseling",
    title: "Grief and loss counselling",
    description:
      "A safe place to process grief and find balance after a loss. Together we acknowledge what you feel, navigate the changes, and slowly rebuild meaning and peace.",
    forWhom: "Anyone grieving a person, a relationship, a role or a future they had imagined.",
  },
];

export const featuredServices = services.filter((service) => service.featured);
