// FAQs, numbered 1–12 in display order. `id` is the anchor (#faq-<id>) other pages link to.

export const faqs = [
  {
    id: 1,
    question: "What does a clinical psychologist do?",
    answer:
      "A clinical psychologist helps assess and treat mental health concerns such as anxiety, depression, trauma, OCD and relationship difficulties. The main tools are psychotherapy and psychological assessment.",
  },
  {
    id: 2,
    question: "Is psychotherapy effective for anxiety, depression or relationship problems?",
    answer:
      "Therapy for depression, anxiety and relationship difficulties has shown excellent results worldwide. Approaches such as cognitive behavioural therapy, mindfulness and interpersonal therapy support lasting well-being.",
  },
  {
    id: 3,
    question: "How do I know if I need therapy or medication?",
    answer:
      "If you are living with persistent sadness, anxiety, stress, sleep problems or a sense of being overwhelmed, you can start with a consultation with a clinical psychologist. If medication might help, I will refer you to a psychiatrist.",
  },
  {
    id: 4,
    question: "How do I prepare for my first therapy session?",
    answer:
      "You do not need to prepare anything. If it helps, write down what you have been noticing, your concerns and what you hope for, and bring that along. I'm here to help, not to judge.",
  },
  {
    id: 5,
    question: "Can therapy help with family stress, marriage issues or cultural conflicts?",
    answer:
      "Yes. Therapy helps you manage expectations, close communication gaps and handle the cultural pressures that are common in Indian families and relationships, wherever you live.",
  },
  {
    id: 6,
    question: "Is it normal to see a psychologist?",
    answer:
      "Yes, it is completely normal to ask for help. Awareness of mental health is growing across India, Canada and beyond, and more people are seeing psychologists to live happier, healthier lives.",
  },
  {
    id: 7,
    question: "How long does therapy take to show results?",
    answer:
      "Most people notice a shift within four to six sessions; deeper work takes longer. It depends on what you are working on, your goals and the time you are able to give the process.",
  },
  {
    id: 8,
    question: "Is everything I share in therapy kept confidential?",
    answer:
      "Yes. What you share in therapy is confidential and is not passed on without your consent. The only exceptions are the legal and safety limits I explain at the start, such as a serious risk of harm.",
  },
  {
    id: 9,
    question: "What are your fees and payment options?",
    answer:
      "Fees depend on the type and length of session and are confirmed before your first appointment. I accept card payments worldwide through Stripe, and GPay, UPI and bank transfer in India.",
  },
  {
    id: 10,
    question: "Do you offer online sessions?",
    answer:
      "Yes. I offer secure video sessions across India and Canada, and in-person sessions in North Vancouver. You can book your first session online at a time that suits you.",
  },
  {
    id: 11,
    question: "Do you work with children and teenagers?",
    answer:
      "Yes. I work extensively with children and adolescents facing behavioural, emotional or academic difficulties. I use play-based and expressive methods to help younger clients work through their feelings safely.",
  },
  {
    id: 12,
    question: "What does a typical therapy session look like?",
    answer:
      "Sessions are conversational and collaborative. We look at what is happening now, explore patterns in thoughts and behaviour, and build practical strategies for change. For children, sessions often involve structured play, art or storytelling.",
  },
];

export const getFaqs = (ids) => ids.map((id) => faqs.find((faq) => faq.id === id));
