import { slugify } from "@/utlis/slugify";

export const services = [
  {
    id: 1,
    icon: "fa-light fa-pen-ruler",
    title: "Web Design",
    projects: "120 Projects",
    animationOrder: "1",
  },
  {
    id: 2,
    icon: "fa-light fa-bezier-curve",
    title: "Ui/Ux Design",
    projects: "241 Projects",
    animationOrder: "2",
  },
  {
    id: 3,
    icon: "fa-light fa-lightbulb",
    title: "Web Research",
    projects: "240 Projects",
    animationOrder: "3",
  },
  {
    id: 4,
    icon: "fa-light fa-envelope",
    title: "Marketing",
    projects: "331 Prodect",
    animationOrder: "4",
  },
].map((elm) => {
  return {
    ...elm,
    slug: slugify(elm.title),
  };
});

export const services2 = [
  {
    id: 1,
    num: "01.",
    title: "Success Architects",
    description:
      "Business consulting consultants provide expert advice and guida the a businesses to help theme their performance efficiency",
    animationOrder: "1",
    isLink: true,
    column: 1,
  },
  {
    id: 2,
    num: "02.",
    title: "Success Architects",
    description:
      "App consulting consultants provide expert advice and guida the a businesses to help theme their performance efficiency",
    animationOrder: "2",
    isLink: true,
    column: 1,
  },
  {
    id: 3,
    num: "03.",
    title: "Success Architects",
    description:
      "I specialize in creating solutions that are not only visually engaging but also align with business goals. From [list services, e.g., branding",
    animationOrder: "3",
    isLink: true,
    column: 1,
  },
  {
    id: 4,
    num: "04.",
    title: "Ui/visual Design",
    description:
      "I'm proud of what I've accomplished and excited to share my journey with you. I'm proud of what I've accomplished and excited to.",
    animationOrder: "4",
    isLink: false,
    column: 2,
  },
  {
    id: 5,
    num: "05.",
    title: "Branding Design",
    description:
      "Interested in working together? Let's bring your ideas to life! Contact me, and let's start building something amazing.",
    animationOrder: "5",
    isLink: false,
    column: 2,
  },
  {
    id: 6,
    num: "06.",
    title: "Motion Design",
    description:
      "Feel free to browse through my recent projects. Each one showcases my approach and dedication to detail, creativity, and.",
    animationOrder: "6",
    isLink: false,
    column: 2,
  },
].map((elm) => {
  return {
    ...elm,
    slug: slugify(elm.title),
  };
});

export const services3 = [
  {
    id: 1,
    icon: "feather-cast",
    title: "UI/UX",
    description:
      "Passages there are many variations variations of of Lorem available.",
  },
  {
    id: 2,
    icon: "feather-map",
    title: "App",
    description:
      "Variations There are many variations of passages of Lorem available.",
  },
  {
    id: 3,
    icon: "feather-phone-call",
    title: "Support",
    description:
      "There are many variations of passages of Lorem available pro ability.",
  },
].map((elm) => {
  return {
    ...elm,
    slug: slugify(elm.title),
  };
});

export const services4 = [
  {
    id: 1,
    num: "01.",
    iconClass: "fa-regular fa-person",
    title: "Individual Pyshotherapy",
    description:
      "A confidential space to explore emotions, patterns, and challenges. Sessions are customised to help you build emotional resilience and gain a deeper understanding of yourself.",
    animationOrder: 1,
    column: 1,
  },
  {
    id: 2,
    num: "02.",
    iconClass: "fa-light fa-brain",
    title: "Psychological Assessments",
    description:
      "Structured assessments that provide clarity on emotional, behavioural, or learning concerns. These insights guide effective treatment and self-awareness.",
    animationOrder: 2,
    column: 2,
  },
  {
    id: 3,
    num: "03.",
    iconClass: "fa-light fa-spa",
    title: "Cognitive Behavioral Therapy",
    description:
      "A practical approach that helps identify and challenge unhelpful thoughts, improving emotional regulation and resilience.",
    animationOrder: 3,
    column: 1,
  },
  {
    id: 4,
    num: "04.",
    iconClass: "fa-regular fa-handshake",
    title: "Acceptance and Commitment Therapy",
    description:
      "A compassionate, mindfulness-based therapy that encourages acceptance, presence, and values-driven living.",
    animationOrder: 4,
    column: 2,
  },
  {
    id: 5,
    num: "05.",
    iconClass: "fa-regular fa-dove",
    title: "Trauma-Informed Therapy",
    description:
      "Every session prioritises safety, empathy, and pacing, helping you heal from trauma and reclaim emotional strength.",
    animationOrder: 5,
    column: 1,
  },
  {
    id: 6,
    num: "06.",
    iconClass: "fa-regular fa-heart",
    title: "Grief & Loss Counseling",
    description:
      "A safe environment to process grief and rediscover balance after loss and help you acknowledge emotions, navigate change, and slowly rebuild meaning and peace.",
    animationOrder: 6,
    column: 2,
  },
  {
    id: 7,
    num: "07.",
    iconClass: "fa-regular fa-heart",
    title: "CBT for Children & Adolescents",
    description:
      "Age-appropriate cognitive behavioural strategies that help young people manage anxiety, worry, behavioural challenges, and low mood. Therapy includes play-based techniques, parent coaching, and clear home-based tasks to support progress between sessions.",
    animationOrder: 6,
    column: 1,
  },
  {
    id: 8,
    num: "08.",
    iconClass: "fa-regular fa-heart",
    title: "Parental Guidance & Support",
    description:
      "A supportive space where parents learn practical strategies and emotional tools for everyday parenting challenges. From toddler routines to adolescent conflict, sessions combine evidence-based techniques and guidance so families can function with more ease and confidence.",
    animationOrder: 6,
    column: 2,
  },
  {
    id: 9,
    num: "09.",
    iconClass: "fa-regular fa-heart",
    title: "Premarital Counselling",
    description:
      "A practical, evidence-based space to prepare for marriage covering opics like communication, expectations, conflict strategies, family boundaries, and emotional readiness.",
    animationOrder: 6,
    column: 1,
  },
].map((elm) => {
  return {
    ...elm,
    slug: slugify(elm.title),
  };
});

export const serviceCards = [
  {
    id: 1,
    column: 1,
    title: "What does a clinical psychologist do?",
    description:
      "A clinical psychologist in India helps diagnose and treat the mental health problems which are associated with anxiety, depression, trauma, OCD, and relationship issues. The primary modes of assessment are psychotherapy and psychological assessments.",  
  },
  {
    id: 2,
    column: 1,
    title: "Is psychotherapy effective for anxiety, depression, or relationship problems?",
    description:
      "Therapy for depression, anxiety, and relationship issues has shown excellent results worldwide. In India, clinical psychologists have proven techniques like cognitive behavioural therapy, mindfulness, and interpersonal therapy to promote long-term well-being among people.",
  },
  {
    id: 3,
    column: 1,
    title: "How do I know if I need therapy or medication?",
    description:
      "If you experience persistent sadness, anxiety, stress, sleep issues, or emotional overwhelms, you can start with a consultation with a clinical psychologist. If required, your therapist will then refer you to a psychiatrist for medication.",
  },
  {
    id: 4,
    column: 1,
    title: "How do I prepare for my first therapy session?",
    description:
      "Write down your symptoms, concerns, and goals beforehand, and we will open up to your psychologist. They are there to help, not to judge. You do not need to prepare anything in general before coming to a therapy session for the first time.",  
  },
  {
    id: 5,
    column: 2,
    title: "Can therapy help with family stress, marriage issues, or cultural conflicts?",
    description:
      "It helps you manage your expectations, communication gaps, and even the cultural pressures that are common in Indian households and relationships.",
  },
  {
    id: 6,
    column: 1,
    title: "Is it normal to see a psychologist?",
    description:
      "Yes, it is completely normal to seek help. Mental health awareness in India is growing, and more people are visiting psychologists and therapists to live a happier and healthier life.",
  },
  {
    id: 7,
    column: 2,
    title: "How long does therapy take to show results?",
    description:
      "Every person is unique, where the clients may notice positive changes after at least 6 therapy sessions. It requires a maximum of 4 to 6 therapy sessions. This depends on the type of issue, therapy goals, and your commitment to the process.",  
  },
  {
    id: 8,
    column: 1,
    title: "Is everything I share in therapy kept confidential?",
    description:
      "Absolutely all the therapy sessions are 100% confidential. Details and discussions are not shared without your consent, except where a legality is required for safety reasons.",
  },
  {
    id: 9,
    column: 2,
    title: "What are your consultation fees and payment options?",
    description:
      "Consultation fees depend upon the therapist's experience and session duration. I accept credit card payments via Stripe globally and also accept payments via GPay, UPI, bank transfers in India.",
  },
  {
    id: 10,
    column: 1,
    title: "Do you offer online sessions?",
    description:
      "Yes, I offer secure video sessions for clients who prefer remote care. Book your first session online and choose a time that suits you.",  
  },
  {
    id: 11,
    column: 2,
    title: "Do you work with children and teenagers?",
    description:
      "Yes. I work extensively with children and adolescents struggling with behavioural, emotional, or academic difficulties. I use play-based and expressive methods to help younger clients process their emotions safely and effectively.",
  },
  {
    id: 12,
    column: 1,
    title: "What does a typical therapy session look like?",
    description:
      "Sessions are conversational and collaborative. I identify current challenges, explore thought and behaviour patterns, and develop practical strategies for change. For children, sessions often involve structured play, art, or storytelling.",
  },
];

export const services5 = [
  {
    title: "A Portfolio of Creativity",
    description:
      "Business consulting consultants provide expert advice and guida the a businesses to help theme their performance efficiency",
  },
  {
    title: "My Portfolio of Innovation",
    description:
      "My work is driven by the belief that thoughtful design and strategic planning can empower brands, transform businesses",
  },
  {
    title: "A Showcase of My Projects",
    description:
      "In this portfolio, you’ll find a curated selection of projects that highlight my skills in [Main Areas, e.g., responsive web design",
  },
];
export const serviceCards2 = [
  {
    number: "01.",
    title: "A Portfolio of Creativity",
    description:
      "Business consulting consultants provide expert advice and guida the a businesses to help theme their performance efficiency",
  },
  {
    number: "02.",
    title: "My Portfolio of Innovation",
    description:
      "My work is driven by the belief that thoughtful design and strategic planning can empower brands, transform businesses",
  },
  {
    number: "03.",
    title: "A Showcase of My Projects",
    description:
      "In this portfolio, you’ll find a curated selection of projects that highlight my skills in [Main Areas, e.g., responsive web design",
  },
];

export const serviceCards3 = [
  {
    iconClass: "fa-regular fa-person",
    title: "Individual Pyshotherapy",
    bookingUrl: "https://app.upheal.io/self-scheduling/c4fb6a4a-190d-447e-869a-37effdabd16d/9c3c28d6-94db-47ea-8832-124c22ef5eb3",
    description:
      "A confidential space to explore emotions, patterns, and challenges. Sessions are customised to help you build emotional resilience and gain a deeper understanding of yourself.",
    animationOrder: 1,
  },
  {
    iconClass: "fa-light fa-brain",
    title: "Psychological Assessments",
    bookingUrl: "https://app.upheal.io/self-scheduling/c4fb6a4a-190d-447e-869a-37effdabd16d/52892482-6d11-419b-9b34-2c02e3873dd7",
    description:
      "Structured assessments that provide clarity on emotional, behavioural, or learning concerns. These insights guide effective treatment and self-awareness.",
    animationOrder: 2,
  },
  {
    iconClass: "fa-light fa-spa",
    title: "Cognitive Behavioral Therapy",
    bookingUrl: "https://app.upheal.io/self-scheduling/c4fb6a4a-190d-447e-869a-37effdabd16d/6d24c680-a0e3-47c9-8e76-7f0ca82e05ab",
    description:
      "A practical approach that helps identify and challenge unhelpful thoughts, improving emotional regulation and resilience.",
    animationOrder: 3,
  },
  {
    iconClass: "fa-regular fa-handshake",
    title: "Acceptance and Commitment Therapy",
    bookingUrl: "https://app.upheal.io/self-scheduling/c4fb6a4a-190d-447e-869a-37effdabd16d/afaf709e-1e79-4f3f-b291-6605ee14204f",
    description:
      "A compassionate, mindfulness-based therapy that encourages acceptance, presence, and values-driven living.",
    animationOrder: 4,
  },
  {
    iconClass: "fa-regular fa-dove",
    title: "Trauma-Informed Therapy",
    bookingUrl: "https://app.upheal.io/self-scheduling/c4fb6a4a-190d-447e-869a-37effdabd16d/fb91e981-5d31-49e0-a71d-43fc238dd640",
    description:
      "Every session prioritises safety, empathy, and pacing, helping you heal from trauma and reclaim emotional strength.",
    animationOrder: 5,
  },
  {
    iconClass: "fa-regular fa-heart",
    title: "Grief & Loss Counseling",
    bookingUrl: "https://app.upheal.io/self-scheduling/c4fb6a4a-190d-447e-869a-37effdabd16d/5a44c3f5-3846-4fce-9d03-6d5a5a113906",
    description:
      "A safe environment to process grief and rediscover balance after loss and help you acknowledge emotions, navigate change, and slowly rebuild meaning and peace.",
    animationOrder: 6,
  },
  {
    iconClass: "fa-regular fa-baby",
    title: "CBT for Children & Adolescents",
    bookingUrl: "https://app.upheal.io/self-scheduling/c4fb6a4a-190d-447e-869a-37effdabd16d/39227317-e2b9-4ec3-968a-eeb5e62e09f0",
    description:
      "Age-appropriate cognitive behavioural strategies that help young people manage anxiety, worry, behavioural challenges, and low mood. Therapy includes play-based techniques, parent coaching, and clear home-based tasks to support progress between sessions.",
    animationOrder: 7,
  },
  {
    iconClass: "fa-regular fa-restroom",
    title: "Parental Guidance & Support",
    bookingUrl: "https://app.upheal.io/self-scheduling/c4fb6a4a-190d-447e-869a-37effdabd16d/9b79803b-64d5-4964-90f2-46eb62452497",
    description:
      "A supportive space where parents learn practical strategies and emotional tools for everyday parenting challenges. From toddler routines to adolescent conflict, sessions combine evidence-based techniques and guidance so families can function with more ease and confidence.",
    animationOrder: 8,
  },
  {
    iconClass: "fa-regular fa-ring",
    title: "Premarital Counselling",
    bookingUrl: "https://app.upheal.io/self-scheduling/c4fb6a4a-190d-447e-869a-37effdabd16d/43173574-3be2-431d-a092-32c343d94f40",
    description:
      "A practical, evidence-based space to prepare for marriage covering opics like communication, expectations, conflict strategies, family boundaries, and emotional readiness.",
    animationOrder: 9,
  },
];
export const allServices = [
  ...services,
  ...services2,
  ...services3,
  ...services4,
];
