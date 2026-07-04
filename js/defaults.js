// The 15 starter questions, transcribed from SITE Survey 2026_Draft.
// Question types: "short" | "multiple" | "yesno" | "slider" | "number"

export const DEFAULT_PASSWORD = "yaypda";

export const DEFAULT_QUESTIONS = [
  {
    id: "q01", order: 1, type: "short", required: true,
    title: "Email",
    placeholder: "you@example.com",
  },
  {
    id: "q02", order: 2, type: "multiple", required: true,
    title: "How many times have you visited SITE Santa Fe?",
    options: ["0", "1", "2-4", "5-9", "10+"], allowOther: false,
  },
  {
    id: "q03", order: 3, type: "multiple", required: true,
    title: "How many museums do you visit in a typical year?",
    options: ["0", "1", "2-4", "5-9", "10+"], allowOther: false,
  },
  {
    id: "q04", order: 4, type: "multiple", required: true,
    title: "How far do you travel to visit SITE Santa Fe?",
    options: ["5 miles or less", "5-20 miles", "20-50 miles", "50+ miles"], allowOther: false,
  },
  {
    id: "q05", order: 5, type: "multiple", required: true,
    title: "What brings you to SITE Santa Fe...",
    options: ["Art", "An event", "Curiosity", "I just like to pass by", "Friends or Family", "It's Free!"],
    allowOther: true,
  },
  {
    id: "q06", order: 6, type: "yesno", required: true,
    title: "Are you a SITE Santa Fe member?", allowOther: false,
  },
  {
    id: "q07", order: 7, type: "multiple", required: true,
    title: "How many photos do you typically take during your visits?",
    options: ["0", "1-5", "6-15", "15+"], allowOther: false,
  },
  {
    id: "q08", order: 8, type: "yesno", required: true,
    title: "Do you typically leave your belongings at the front desk cubbies?", allowOther: false,
  },
  {
    id: "q09", order: 9, type: "yesno", required: true,
    title: "Do you typically visit the bathroom? If not, please specify", allowOther: true,
  },
  {
    id: "q10", order: 10, type: "yesno", required: true,
    title: "Do you typically attend with a specific exhibition in mind?", allowOther: false,
  },
  {
    id: "q11", order: 11, type: "multiple", required: true,
    title: "How many times do you typically ask someone for directions?",
    options: ["Once", "Twice", "More than twice"], allowOther: false,
  },
  {
    id: "q12", order: 12, type: "multiple", required: true,
    title: "How often do you visit SITE Santa Fe in a month?",
    options: ["Once", "Twice", "More than twice"], allowOther: true,
  },
  {
    id: "q13", order: 13, type: "multiple", required: true,
    title: "Are your visits often relaxed or rushed? If rushed, why?",
    options: ["Relaxed", "Rushed"], allowOther: true,
  },
  {
    id: "q14", order: 14, type: "slider", required: true,
    title: "How comfortable are you in the space? Lighting? Seating? Temperature?...",
    min: 1, max: 5, minLabel: "I am comfortable", maxLabel: "I am uncomfortable",
  },
  {
    id: "q15", order: 15, type: "short", required: false,
    title: "If uncomfortable, why?",
    placeholder: "Your answer",
  },
];
