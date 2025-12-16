import { slugify } from "@/utlis/slugify";

export const blogData = [
  {
    id: 1,
    animationOrder: "animation-order-1",
    imageSrc: "/assets/images/blog/blog-classic-card-img-1.jpg",
    altText: "Blog Thumbnail",

    title: "Stand out from the crowd with a professional portfolio",
    description:
      "Aliquam eros justo, posuere loborti viverra lao ullamcorper posuere viverra .Aliquam eros justo, posuere Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper",
    tags: ["Web Design", "CV", "Starts", "CV Card", "Start shape"],
    categories: ["Web Development Wizardry", "UI/UX Design Innovation"],
  },
  {
    id: 2,
    animationOrder: "animation-order-2",
    imageSrc: "/assets/images/blog/blog-classic-card-img-2.jpg",
    altText: "Blog Thumbnail",

    title: "Elevate your brand with a the stunning portfolios",
    tags: ["All Project", "Resume", "Graphics", "Portfolio"],
    categories: ["Business Solution", "Web Development Wizardry"],
    description:
      "Aliquam eros justo, posuere loborti viverra lao ullamcorper posuere viverra .Aliquam eros justo, posuere Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper",
  },
  {
    id: 3,
    animationOrder: "animation-order-3",
    imageSrc: "/assets/images/blog/blog-classic-card-img-3.jpg",
    altText: "Blog Thumbnail",

    tags: ["All Project", "Starts", "Start shape"],
    categories: ["Content Creation and Strategy", "UI/UX Design Innovation"],
    title: "Elevate your brand with a the stunning portfolio",
    description:
      "Aliquam eros justo, posuere loborti viverra lao ullamcorper posuere viverra .Aliquam eros justo, posuere Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper",
  },
].map((elm) => {
  return {
    ...elm,
    slug: slugify(elm.title),
  };
});

export const blogData2 = [
  {
    id: 1,
    animationOrder: "animation-order-1",
    imageSrc: "/assets/images/blog/blog-img-1.jpg",
    altText: "Blog Thumbnail",
    author: "Mesbah",
    date: "April 10",
    title: "Inspiring the World, One Project at a Time for the man",
    tags: [
      "All Project",

      "Graphics",
      "Web Design",
      "CV",
      "Starts",
      "Creative Portfolio",

      "Start shape",
    ],
    categories: ["UI/UX Design Innovation"],
    description:
      "Aliquam eros justo, posuere loborti viverra lao ullamcorper posuere viverra .Aliquam eros justo, posuere Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper",
  },
  {
    id: 2,
    animationOrder: "animation-order-2",
    imageSrc: "/assets/images/blog/blog-img-2.jpg",
    altText: "Blog Thumbnail",
    author: "Mesbah",
    date: "April 10",
    title: "Let's bring your ideas to life! Contact me, and let's",
    tags: ["CV", "Starts", "Start shape"],
    categories: ["Business Solution"],
    description:
      "Aliquam eros justo, posuere loborti viverra lao ullamcorper posuere viverra .Aliquam eros justo, posuere Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper",
  },
  {
    id: 3,
    animationOrder: "animation-order-3",
    imageSrc: "/assets/images/blog/blog-img-3.jpg",
    altText: "Blog Thumbnail",
    author: "Mesbah",
    date: "April 10",
    title: "Each one showcases our approach and dedication man",
    tags: ["All Project", "Resume", "CV Card", "Start shape"],
    categories: ["Business Solution"],
    description:
      "Aliquam eros justo, posuere loborti viverra lao ullamcorper posuere viverra .Aliquam eros justo, posuere Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper",
  },
].map((elm) => {
  return {
    ...elm,
    slug: slugify(elm.title),
  };
});

export const blogData3 = [
  {
    id: 1,
    animationOrder: "animation-order-1",
    imageSrc: "/assets/images/blog/blog-therapy-img-17.png",
    altText: "Blog Thumbnail",
    date: "5th Feb, 2025",
    author: "Manse M Doshi",
    comments: "10",
    title: "How to prepare for your first therapy session?",
    tags: [
      "Getting Started with Therapy",
      "Mental Health",
    ],
    categories: ["Mental Health", "Clinical Counselling", "Psychotherapy"],
    description:
      `Because beginning is often the bravest step.
Starting therapy can feel like opening a door to parts of yourself you’ve kept quietly tucked away. It’s courageous—and also completely normal—to feel unsure about how to begin. Many people wonder what they’re supposed to say, how much to share, or whether they’re even “ready” to start.
If you’re preparing for your first session, here are some gentle, grounding reminders to help you walk in with more ease and self-compassion.

1. First and foremost: you don’t need to be “ready.”
There’s no emotional checklist to complete before therapy begins.
You don’t need perfectly organized thoughts or a polished story.
Therapy is not a performance—it’s a space to explore, reflect, and understand things as they unfold. Your therapist expects uncertainty. They expect gaps in your story. They expect complexity.
All you have to bring is yourself.

2. Take a moment to reflect—gently, and without pressure
Some people find it helpful to think about a few guiding questions before their first session:

What made you reach out for therapy now?
What concerns or experiences feel heaviest lately?
Have you noticed patterns—emotional, relational, physical—that keep showing up?

You do not need to prepare your entire life history.
Starting exactly where you are is more than enough.

3. Set realistic expectations (therapy is a process, not a quick fix)
The first session is typically about:

Getting to know each other
Talking through what brings you to therapy
Understanding how therapy works and what support might look like

You may not walk out feeling “better,” and that’s perfectly okay.
Early sessions are about building safety and trust, not rushing into solutions.

4. Be honest about your comfort level
Your emotional pace matters.
Therapy works best when you allow yourself to be truthful about where you’re at—even if where you’re at is unsure.
You’re always allowed to say:

“I’m nervous.”
“I don’t know where to start.”
“I’m not ready to talk about that yet.”

A supportive therapist will meet you where you are, not where you think you should be.

5. A few practical steps (optional but helpful)
Small logistical choices can make the experience feel more grounded:

Choose a quiet, private space if your session is online
Arrive a few minutes early to catch your breath
Bring notes if you’re worried you’ll forget what you want to say
Wear something comfortable—your body deserves to feel at ease too

Think of these as gentle supports, not requirements.

6. Remember: therapy is collaborative
You’re not entering a space where someone sits back and evaluates you.
You’re entering a relationship built on:

curiosity
compassion
consent
shared understanding

It’s a process you and your therapist shape together—one session at a time.

7. After the session: give yourself space
It’s common to feel a mix of things afterward:

Emotional
Tired
Relieved
Unsure
Open
Quiet

Your mind and body may still be processing. Therapy often continues working long after you’ve left the room.

Starting therapy isn’t a sign of weakness—it’s a sign of self-respect
Something in you is seeking care, clarity, or change. And choosing to listen to that part of yourself is a profound step toward healing.
You don’t have to have everything figured out.
You just have to begin.`,
  },
  {
    id: 2,
    animationOrder: "animation-order-2",
    imageSrc: "/assets/images/blog/blog-therapy-img-12.png",
    altText: "Blog Thumbnail",
    date: "12th June, 2025",
    author: "Manse M Doshi",
    comments: "10",
    title: "What to expect from your therapy sessions?",
    tags: [
      "Getting Started with Therapy",
      "Mental Health",
    ],
    categories: ["Mental Health", "Clinical Counselling", "Psychotherapy"],
    description:
      `A Guide for First Time CLients
      
      Understanding how therapy works can help you feel more grounded, prepared, and supported.
If you’re considering starting therapy—or you’ve already booked your first session—you may be wondering what actually happens once you walk into the room (or log in online). Therapy can feel unfamiliar at first, but knowing what to expect can make the experience feel more comfortable and empowering.
This guide explains what happens in a therapy session, how therapists create safety, and the emotional and practical experience clients often have. Whether you’re new to therapy or returning after time away, this will help you enter your session with clarity and confidence.

1. Therapy Provides a Safe, Confidential, and Non Judgmental Space
A therapy session is intentionally designed to be a space where you can speak honestly—without judgment, pressure, or criticism. Your therapist’s role is to create psychological safety so you can open up at your own pace.
Every therapy session is:
•	Confidential (with ethical limits explained clearly)
•	Non judgmental
•	Centered on your needs, experiences, and emotional wellbeing
You don’t need a perfect script or polished story. You’re encouraged to show up exactly as you are.

2. Therapy Is a Guided Conversation—Not an Interrogation
Many people fear they’ll be put on the spot or pressured to talk. In reality, therapy feels much more like a collaborative conversation.
Your therapist may:
•	Ask gentle, open ended questions
•	Reflect themes or patterns they notice
•	Help you slow down and explore emotions safely
•	Offer insight when it feels appropriate
You’re always free to pause, redirect, or say:
“I’m not ready to talk about that yet.”
Your comfort level shapes the pace of the conversation.

3. You Set the Pace of the Session
Every therapy session looks different, depending on where you’re at.
•	Some sessions feel talk heavy.
•	Others are quieter or more reflective.
•	Some may focus on processing an event or emotion.
•	Others may explore patterns you’ve carried for years.
There is no “correct” way to do therapy. What matters most is that you feel respected, supported, and able to move at your natural pace.

4. Exploration Comes Before Solutions
People often come to therapy hoping for immediate answers—but meaningful, long term change begins with understanding.
Early sessions typically focus on:
•	Exploring your experiences
•	Making sense of emotions and reactions
•	Understanding behaviours and protective patterns
•	Identifying triggers and themes
•	Connecting past experiences to present struggles
Quick fixes are rare in therapy. But clarity, awareness, and insight develop steadily—becoming the foundation for healing and change.

5. Emotional Responses During and After Therapy Are Normal
A therapy session can stir emotions that have been held inside for a long time.
Common feelings after a session include:
•	Relief
•	Tears or emotional release
•	Thoughtfulness
•	Exhaustion or heaviness
•	Hopefulness
•	A sense of spaciousness or calm
All of these responses are valid. Emotional processing is part of the healing work.

6. Practical Tools and Skills May Be Introduced
Depending on your therapist’s approach, you may be offered tools to support your day to day wellbeing, such as:
•	Grounding or self regulation strategies
•	Somatic or body based practices
•	Journaling prompts or reflective questions
•	Mindfulness or breathing exercises
•	Small, manageable behaviour shifts
These tools are invitations, not obligations. You get to explore what feels right for you.

7. It’s Okay to Assess If the Therapist Is the Right Fit
Therapy is a relationship, and feeling safe matters. You are encouraged to check in with yourself:
•	Do I feel seen and heard?
•	Do I feel emotionally safe with this therapist?
•	Do I like the pace and approach?
•	Does this style of therapy feel supportive?
A good therapist welcomes feedback and collaboration. You deserve a space where you feel genuinely supported.

What Happens After Your Therapy Session
It’s very normal to continue processing for hours or even days after therapy.
You may revisit insights, emotions, or questions that came up in the session.
After therapy, it can help to:
•	Rest or decompress
•	Hydrate
•	Take a gentle walk
•	Journal if something feels unfinished
•	Give yourself emotional space
Integration is part of the therapeutic journey.

A Gentle Reminder 🌱
Therapy isn’t about being “fixed.”
It’s about being understood—deeply, compassionately, and without judgment.
When understanding grows, change happens naturally.`,
  },
  {
    id: 3,
    animationOrder: "animation-order-3",
    imageSrc: "/assets/images/blog/blog-therapy-img-20.png",
    altText: "Blog Thumbnail",
    date: "20th June, 2025",
    author: "Manse M Doshi",
    comments: "10",
    title: "Benefits of regular therapy sessions",
    tags: [
      "Getting Started with Therapy",
      "Mental Health",
    ],
    categories: ["Mental Health", "Clinical Counselling", "Psychotherapy"],
    description:
      `Small, consistent steps that support long term emotional wellbeing.
While a single therapy session can offer clarity or relief, the most meaningful shifts often come from consistent, ongoing work. Regular therapy sessions create space for deeper understanding, emotional steadiness, and gradual, sustainable change.
Below are some of the key benefits clients often experience over time.

1. Deeper Self Awareness
With regular therapy, you begin to notice:
•	Emotional patterns
•	Repeated relationship dynamics
•	Triggers and protective responses
As awareness grows, so does your ability to understand why you feel and act the way you do.
And awareness is always the first step toward lasting change.

2. Improved Emotional Regulation
Instead of suppressing emotions or reacting automatically, therapy helps you:
•	Understand what you feel and why
•	Respond rather than react
•	Build distress tolerance in difficult moments
Over time, you learn how to stay with your emotions without becoming overwhelmed.

3. Healthier Relationships
As your relationship with yourself becomes clearer and more compassionate, your external relationships often shift as well.
Therapy supports:
•	Clearer communication
•	Stronger and healthier boundaries
•	Reduced people pleasing or emotional withdrawal
The more connected you are internally, the more connected and grounded your relationships can become.

4. Reduced Stress and Anxiety Over Time
Consistency matters. Regular therapy creates a reliable space to:
•	Process stress before it piles up
•	Release emotional load safely
•	Develop coping tools that genuinely fit your life
The result is often a gradual decrease in anxiety, tension, and emotional fatigue.

5. A Sense of Continuity and Support
You don’t need to reach a breaking point to be supported.
Regular therapy provides:
•	Predictable emotional support
•	A non biased, compassionate perspective
•	A place where you don’t have to “hold it together”
Knowing you have a stable space to return to can be grounding in itself.

6. Stronger Coping Skills and Resilience
Over time, therapy helps you:
•	Tolerate discomfort more effectively
•	Navigate transitions, change, and loss
•	Recover faster from emotional setbacks
Resilience isn’t about being tough—
It’s about becoming more flexible and grounded in yourself.

7. Insight That Leads to Sustainable Change
With ongoing therapy, patterns become more visible.
You begin to:
•	Recognize long standing habits
•	Understand where they came from
•	Gently rework them with support
This creates change that is integrated—not forced or temporary.

8. A Relationship That Models Safety
The therapeutic relationship itself can be healing. It can:
•	Repair trust
•	Normalize emotional needs
•	Offer a corrective emotional experience
Many people experience healing not just from insight, but from being in a relationship that is safe, consistent, and attuned.
A Gentle Reminder 🌿
Therapy is not a one time conversation.
It’s a process—where small, steady steps create meaningful, lasting shifts.
You don’t have to transform everything at once.
You just have to begin, and keep showing up for yourself with care.`,
  },
  {
    id: 4,
    animationOrder: "animation-order-4",
    imageSrc: "/assets/images/blog/blog-therapy-img-13.png",
    altText: "Blog Thumbnail",
    date: "9th August, 2025",
    author: "Manse M Doshi",
    comments: "10",
    title: "How to set boundaries kindly?",
    tags: [
      "Getting Started with Therapy",
      "Mental Health",
    ],
    categories: ["Mental Health", "Clinical Counselling", "Psychotherapy"],
    description:
      `Warm does not mean weak. Firm does not mean unkind.
Setting boundaries is something many people talk about—but actually doing it can feel unfamiliar, uncomfortable, or even scary. You might wonder:
Am I being too rigid? Too soft? Too much? Not enough?
The truth is: boundaries are not walls. They are guidelines for healthier relationships—ones that honor your needs, your energy, and your emotional wellbeing.
Here’s how to set boundaries with clarity and kindness.

1. Start With Clarity, Not Guilt
A boundary isn’t about controlling someone else.
It’s about understanding what you need in order to feel emotionally safe and grounded.
Try asking yourself:
•	What feels draining or overwhelming right now?
•	What do I need more of?
•	What do I need less of?
•	What situations consistently make me uncomfortable?
Clarity reduces resentment later.
Guilt often fades when you remember: boundaries protect your wellbeing—they don’t harm others.

2. Use “I” Statements to Keep It Kind & Grounded
Kind boundaries focus on your needs, not someone else’s failures.
Instead of:
❌ “You always expect too much.”
Try:
✅ “I’m not able to take this on right now.”
“I” statements are respectful, clear, and non blaming.
They communicate your limits without shaming the other person.

3. Be Direct, Calm, and Simple
Kindness doesn’t require over explaining.
A boundary can be honest and gentle.
Examples:
•	“I can’t stay late today.”
•	“I need some time to think before I respond.”
•	“I’m not comfortable discussing this.”
•	“I won’t be able to help with that.”
Simple is more than enough.
Your boundary does not need a three page explanation.

4. Allow Discomfort — Yours and Theirs
Even kind boundaries can bring up:
•	Guilt
•	Anxiety
•	Worry
•	Fear of disappointing others
These emotions don’t mean you’re doing something wrong.
They mean you’re doing something new—and new often feels uncomfortable at first.
Boundary discomfort is a sign of growth, not failure.

5. Hold Your Boundary With Consistency
You may need to repeat yourself. Kindly. Calmly. Clearly.
This is not rude—it’s consistent.
You do not need to:
•	Defend
•	Justify
•	Apologize
•	Argue your position
•	Convince the other person
A boundary can stand on its own.
Consistency teaches others how to relate to you with respect.

6. Kind Does Not Mean Self Abandoning
Many people confuse kindness with self sacrifice.
A boundary that costs you your peace is not kindness—it’s neglecting yourself.
True kindness includes:
•	Respect for your energy
•	Respect for your limits
•	Respect for your emotional safety
When you honor your needs, you show up more authentically and sustainably in your relationships.

7. Expect Mixed Reactions (This Is Normal)
When you begin setting boundaries, people will respond differently:
•	Some will respect your boundary immediately
•	Some will need time to adjust
•	Some may push back out of habit
Other people’s reactions do not determine whether your boundary is valid.
Often, their discomfort reflects their adjustment—not your wrongdoing.
Boundaries reveal which relationships can tolerate honesty.

8. Remember: Boundaries Make Relationships Healthier
Healthy boundaries create:
•	Predictability
•	Safety
•	Mutual respect
•	Clear expectations
When you communicate your limits kindly, relationships become more honest, stable, and emotionally connected.
Boundaries don’t push people away—they keep the right people close in healthier ways.

A Gentle Reminder 🌿
You can be warm and firm at the same time.
You can be kind and clear at the same time.
You can care about others without abandoning yourself.
Boundaries are not barriers.
They are bridges—to healthier relationships, steadier emotions, and a more grounded you.`,
  },
  {
    id: 5,
    animationOrder: "animation-order-5",
    imageSrc: "/assets/images/blog/blog-therapy-img-15.png",
    altText: "Blog Thumbnail",
    date: "25th October, 2025",
    author: "Manse M Doshi",
    comments: "10",
    title: "10 Easy ways to reduce bedtime anxiety in Children",
    tags: [
      "Getting Started with Therapy",
      "Mental Health",
    ],
    categories: ["Mental Health", "Clinical Counselling", "Psychotherapy"],
    description:
      `A gentle guide for creating calm, secure nighttime routines.
Bedtime can be one of the most challenging parts of the day for children. When the lights dim and the world quiets down, worries can become louder. Many children experience bedtime anxiety—whether it shows up as restlessness, fear of the dark, trouble settling, or repeated calls for reassurance.
The good news? With consistency, connection, and simple calming strategies, bedtime can become a more peaceful and predictable experience for your child.
Here are 10 therapist informed tips to support children who struggle with bedtime anxiety.

1. Create a Predictable Bedtime Routine
Predictability helps children feel safe.
A steady routine—bath, pajamas, story, lights out—signals to the brain and body that it’s time to rest.
Routines lower anxiety because children know what happens next.
Even small, repetitive steps can create emotional security.

2. Keep Transitions Slow and Calm
Moving straight from playtime to bedtime can be too abrupt for a child’s nervous system.
A gentle wind down period may include:
•	Soft lighting
•	Quiet play
•	Reading time
•	A warm bath
Slowing the pace helps the body shift out of “alert mode” and into “rest mode.”

3. Validate Their Fears (Rather Than Dismissing Them)
Children settle faster when they feel heard—not corrected.
Instead of saying:
❌ “There’s nothing to be scared of.”
Try:
✅ “I can see you’re feeling scared. I’m here with you.”
Validation teaches children that emotions are safe to feel and express.

4. Offer Connection Before Correction
Bedtime anxiety often increases when a child feels disconnected.
A few minutes of warm attention can make a big difference. Try:
•	Cuddling
•	Chatting about their day
•	Reading together
•	Gentle play
Connection regulates the nervous system far more effectively than reassurance alone.

5. Teach Simple Calming Techniques
Introduce age appropriate tools your child can use when they feel anxious:
•	Belly breathing (“blow up the balloon”)
•	Counting slow breaths
•	Imagining a safe or happy place
•	Listening to soft music or a calming story
These skills support emotional regulation now—and build resilience over time.

6. Limit Stimulating Content Before Bed
In the hour before bedtime, reduce:
•	Screen time
•	Loud or highly active play
•	Scary stories, shows, or games
Stimulating activities activate the stress response, making it harder to settle.

7. Use Comfort Objects
A favourite stuffed animal, blanket, or toy can provide a sense of safety, especially during transitions.
Comfort objects are not “crutches”—they are emotional anchors.

8. Keep Responses Calm and Consistent
If your child wakes up anxious:
•	Stay calm
•	Reassure briefly
•	Avoid creating new habits that increase dependence (e.g., staying in the room for hours)
Your calm cues their calm.
Children borrow regulation from the adults caring for them.

9. Encourage Expression of Worries Earlier in the Day
Some children hold onto worries until bedtime because it’s the first quiet moment of the day.
You can help by creating:
•	A daily “worry time”
•	A drawing or journaling space
•	A short check in conversation before the bedtime routine
This helps worries surface earlier—so bedtime feels lighter and more peaceful.

10. Remember: Anxiety Is Communication
Bedtime anxiety often signals:
•	Separation worries
•	Overstimulation
•	Transitions or big feelings from the day
•	A need for more connection or predictability
Responding with patience and empathy builds long term emotional security.

A Gentle Reminder 🌙
Children don’t need bedtime to be perfect.
They need bedtime to feel safe, predictable, and emotionally held.
Small, consistent practices can transform bedtime from a struggle into a grounding, connecting part of the day.`,
  },
  {
    id: 6,
    animationOrder: "animation-order-6",
    imageSrc: "/assets/images/blog/blog-therapy-img-19.png",
    altText: "Blog Thumbnail",
    date: "14th December, 2025",
    author: "Manse M Doshi",
    comments: "10",
    title: "Top 10 tips for managing stress and anxiety",
    tags: [
      "Getting Started with Therapy",
      "Mental Health",
    ],
    categories: ["Mental Health", "Clinical Counselling", "Psychotherapy"],
    description:
`Stress and anxiety are natural human responses, designed to keep us alert and safe. Stress often arises from external pressures—deadlines, responsibilities, or challenging situations—while anxiety is the internal response those pressures create, often showing up as worry, tension, or a sense of unease.       Both are normal, but when they become constant or overwhelming, they can affect sleep, concentration, mood, and overall wellbeing. The goal isn’t to eliminate stress or anxiety entirely, but to understand how they work in the body and mind so you can respond with awareness, compassion, and effective tools.       Here are 10 therapist-informed tips to help you manage stress and anxiety with more awareness, care, and flexibility. 

1. Regulate the Body First
Stress lives in the nervous system—not just in the mind. 
Before trying to “think your way” out of anxiety, help your body feel safe. 
Even simple practices can make a noticeable difference:
•	Slow, steady breathing
•	Gentle stretching
•	A short walk
•	Placing your hand on your chest or belly
When the body settles, the mind can follow.

2. Name What You’re Feeling
Putting words to emotions reduces their intensity.
Instead of saying:
“I’m not okay,” try:
•	“I’m feeling overwhelmed.”
•	“I’m tense right now.”
•	“I’m anxious and my body feels tight.”
Labeling emotions helps the brain organize the experience rather than spiral.

3. Focus on What’s Within Your Control
Anxiety grows when attention remains on uncertainty or “what if” thinking.
Ask yourself:
“What is one small, doable step I can take right now?”
Focusing on small actions brings a sense of agency and reduces helplessness.

4. Reduce Mental Overload
A cluttered mind increases stress.
Try externalizing thoughts through:
•	To do lists
•	“Brain dumps”
•	Journaling
•	Planning your next steps
Getting thoughts out of your head lightens the emotional load.

5. Create Predictable Routines
The nervous system thrives on structure.
Consistent sleep, meals, and daily rituals create internal steadiness—especially during stressful times.
Predictability reduces emotional reactivity and builds a sense of safety.

6. Set Gentle Boundaries
Stress often rises when our energy is stretched too thin.
Boundaries may include:
•	Saying no
•	Asking for help
•	Limiting draining conversations
•	Reducing exposure to negative news or people
Protecting your emotional resources is an act of self-respect, not selfishness.

7. Limit Constant Stimulation
Excess screen time, notifications, and news keep the brain in “alert mode.”
Try:
•	Screen breaks
•	Phone free periods
•	Turning off non essential notifications
•	Setting limits around news intake
Your mind needs spaciousness to relax.

8. Practice Self Compassion
Stress is often accompanied by self criticism.
Instead of:
“I should be coping better,”
Try:
“I’m doing the best I can with what I have.”
Speak to yourself the way you’d speak to someone you care about—with kindness, realism, and patience.

9. Move Your Body Regularly
Movement helps release stress hormones and regulate the nervous system.
This doesn’t need to be intense. Try:
•	Walking
•	Stretching
•	Yoga
•	Light exercise
•	Dancing in your living room
A few minutes of movement can shift the whole day.

10. Seek Support When Needed
You don’t have to manage stress alone.
Talking to someone you trust—a friend, partner, or mental health professional—can bring clarity, relief, and new perspective.
Reaching out is a sign of awareness, not weakness.

Gentle Reminder 🌿
Managing stress isn’t about eliminating anxiety.
It’s about learning to respond to it with:
•	awareness
•	compassion
•	and flexibility
Small steps practiced consistently can create meaningful, lasting change.`,
  },
].map((elm) => {
  return {
    ...elm,
    slug: slugify(elm.title),
  };
});

export const blogData4 = [
  {
    id: 1,
    animationOrder: "animation-order-1",
    imageSrc: "/assets/images/blog/blog-img-4.jpg",
    altText: "Blog Thumbnail",
    author: "Mesbah",
    date: "April 10",
    title: "Let's bring your ideas to life. Contact me, and let's go",
    tags: [
      "All Project",
      "Resume",
      "Graphics",
      "Web Design",
      "CV",
      "Starts",
      "Creative Portfolio",
      "Portfolio",
      "CV Card",
      "Start shape",
    ],
    categories: ["Business Solution"],
    description:
      "Aliquam eros justo, posuere loborti viverra lao ullamcorper posuere viverra .Aliquam eros justo, posuere Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper",
  },
  {
    id: 2,
    animationOrder: "animation-order-2",
    imageSrc: "/assets/images/blog/blog-img-5.jpg",
    altText: "Blog Thumbnail",
    author: "Mesbah",
    date: "April 10",
    title: "Inspiring the World, One Project at a Time for the man and woman",
    tags: [
      "All Project",
      "Resume",
      "Graphics",
      "Web Design",
      "CV",
      "Starts",
      "Creative Portfolio",
      "Portfolio",
      "CV Card",
      "Start shape",
    ],
    categories: ["Content Creation and Strategy"],
    description:
      "Aliquam eros justo, posuere loborti viverra lao ullamcorper posuere viverra .Aliquam eros justo, posuere Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper",
  },
  {
    id: 3,
    animationOrder: "animation-order-3",
    imageSrc: "/assets/images/blog/blog-img-6.jpg",
    altText: "Blog Thumbnail",
    author: "Mesbah",
    date: "April 10",
    title: "Each one showcases my approach and dedication person",
    tags: [
      "All Project",
      "Resume",
      "Graphics",
      "Web Design",
      "CV",
      "Starts",
      "Creative Portfolio",
      "Portfolio",
      "CV Card",
      "Start shape",
    ],
    categories: ["Content Creation and Strategy", "UI/UX Design Innovation"],
    description:
      "Aliquam eros justo, posuere loborti viverra lao ullamcorper posuere viverra .Aliquam eros justo, posuere Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper",
  },
].map((elm) => {
  return {
    ...elm,
    slug: slugify(elm.title),
  };
});
export const blogData5 = [
  {
    id: 1,
    animationOrder: "animation-order-1",
    imageSrc: "/assets/images/blog/blog-img-7.jpg",
    altText: "Blog Thumbnail",
    date: "12 Feb",
    author: "Mesbah",
    comments: "Comments (05)",
    title: "Inspiring the World, One Project at a Time for the men",
    width: 410,
    height: 291,
  },
  {
    id: 2,
    animationOrder: "animation-order-2",
    imageSrc: "/assets/images/blog/blog-img-8.jpg",
    altText: "Blog Thumbnail",
    date: "13 Feb",
    author: "Mesbah",
    comments: "Comments (05)",
    title: "Let's bring your ideas to life! Contact me. and let's work",
    width: 410,
    height: 291,
  },
  {
    id: 3,
    animationOrder: "animation-order-3",
    imageSrc: "/assets/images/blog/blog-img-9.jpg",
    altText: "Blog Thumbnail",
    date: "14 Feb",
    author: "Mesbah",
    comments: "Comments (05)",
    title: "Each one showcases my approach and dedication man",
    width: 411,
    height: 291,
  },
  {
    id: 4,
    animationOrder: "animation-order-3",
    imageSrc: "/assets/images/blog/blog-img-4.jpg",
    altText: "Blog Thumbnail",
    date: "15 Feb",
    author: "Mesbah",
    comments: "Comments (05)",
    title: "Each one showcases my approach and dedication woman",
    width: 410,
    height: 294,
  },
].map((elm) => {
  return {
    ...elm,
    slug: slugify(elm.title),
  };
});

export const blogData6 = [
  {
    id: 1,
    animationOrder: "animation-order-1",
    imageSrc: "/assets/images/blog/blog-img-7.jpg",
    altText: "Blog Thumbnail",
    date: "12 Feb",
    author: "Mesbah",
    comments: "Comments (05)",
    title: "Inspiring the World, One Project at a Time for human",
    width: 410,
    height: 291,
  },
  {
    id: 2,
    animationOrder: "animation-order-2",
    imageSrc: "/assets/images/blog/blog-img-8.jpg",
    altText: "Blog Thumbnail",
    date: "12 Feb",
    author: "Mesbah",
    comments: "Comments (05)",
    title: "Let's bring your ideas to reality! Contact me, and let's",
    width: 410,
    height: 291,
  },
  {
    id: 3,
    animationOrder: "animation-order-3",
    imageSrc: "/assets/images/blog/blog-img-9.jpg",
    altText: "Blog Thumbnail",
    date: "12 Feb",
    author: "Mesbah",
    comments: "Comments (05)",
    title: "Each one showcases my approach for dedication man",
    width: 411,
    height: 291,
  },
].map((elm) => {
  return {
    ...elm,
    slug: slugify(elm.title),
  };
});
export const blogData7 = [
  {
    id: 1,
    animationOrder: "animation-order-1",
    imageSrc: "/assets/images/blog/blog-img-4.jpg",
    altText: "Blog Thumbnail",
    author: "Mesbah",
    date: "April 10",
    title: "Let's bring your ideas to real! Contact me, and let's",
    width: 410,
    height: 294,
  },
  {
    id: 2,
    animationOrder: "animation-order-2",
    imageSrc: "/assets/images/blog/blog-img-5.jpg",
    altText: "Blog Thumbnail",
    author: "Mesbah",
    date: "April 10",
    title: "Inspiring the World, One Project at a Time for the people",
    width: 410,
    height: 294,
  },
  {
    id: 3,
    animationOrder: "animation-order-3",
    imageSrc: "/assets/images/blog/blog-img-6.jpg",
    altText: "Blog Thumbnail",
    author: "Mesbah",
    date: "April 10",
    title: "Each one showcases my approach to dedication man",
    width: 410,
    height: 294,
  },
].map((elm) => {
  return {
    ...elm,
    slug: slugify(elm.title),
  };
});

export const posts = [
  {
    id: 1,
    imageSrc: "/assets/images/blog/single-post-card-img-1.png",
    category: "Category",
    title: "Sustainable Solutions: Designing for Tomorrow",
  },
  {
    id: 2,
    imageSrc: "/assets/images/blog/single-post-card-img-2.png",
    category: "Category",
    title: "Technological Innovations: Shaping the Future",
  },
  {
    id: 3,
    imageSrc: "/assets/images/blog/single-post-card-img-3.png",
    category: "Category",
    title: "Adventure Awaits Exploring the Great Outdoors",
  },
].map((elm) => {
  return {
    ...elm,
    slug: slugify(elm.title),
  };
});
export const allBlogs = [
  ...blogData,
  ...blogData2,
  ...blogData3,
  ...blogData4,
  ...blogData5,
  ...blogData6,
  ...blogData7,
  ...posts,
];
export const categories = [
  { title: "Business Solution", count: "01" },
  { title: "Web Development Wizardry", count: "08" },
  { title: "Content Creation and Strategy", count: "05" },
  { title: "UI/UX Design Innovation", count: "05" },
];
export const tags = [
  "All Project",
  "Resume",
  "Graphics",
  "Web Design",
  "CV",
  "Starts",
  "Creative Portfolio",
  "Portfolio",
  "CV Card",
  "Start shape",
];
