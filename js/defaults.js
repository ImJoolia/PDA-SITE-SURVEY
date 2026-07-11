// Starter questions — mirrors the live SITE x PDA survey (13 questions,
// same order and wording). The two image questions ship with labeled
// placeholder tiles; staff replace them with real photos via Upload.
// Question types: "short" | "multiple" | "yesno" | "slider" | "number" | "imagechoice"

export const DEFAULT_PASSWORD = "yaypda";

const tile = (bg, shape) =>
  "data:image/svg+xml," +
  encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 150"><rect width="200" height="150" fill="${bg}"/>${shape}</svg>`);

const label = (bg, fg, text) =>
  tile(bg, `<text x="100" y="88" text-anchor="middle" font-family="Arial, sans-serif" font-size="40" font-weight="bold" fill="${fg}">${text}</text>`);

// Placeholders — replace with the real photos via Upload in the Questions tab.
const ARRIVAL_IMAGES = [
  { label: "Car",     src: label("#D7DF21", "#000000", "CAR") },
  { label: "Train",   src: label("#25BEC0", "#ffffff", "TRAIN") },
  { label: "Bus",     src: label("#ED217C", "#ffffff", "BUS") },
  { label: "Walking", src: label("#0F416F", "#ffffff", "WALK") },
  { label: "Biking",  src: label("#8CC63F", "#000000", "BIKE") },
  { label: "Scooter", src: label("#8685C0", "#ffffff", "SCOOT") },
];

const SPACE_IMAGES = [
  { label: "1", src: label("#D7DF21", "#000000", "1") },
  { label: "2", src: label("#25BEC0", "#ffffff", "2") },
  { label: "3", src: label("#ED217C", "#ffffff", "3") },
  { label: "4", src: label("#0F416F", "#ffffff", "4") },
  { label: "5", src: label("#8CC63F", "#000000", "5") },
  { label: "6", src: label("#8685C0", "#ffffff", "6") },
];

const FEELING_IMAGES = [
  { label: "Calm",       src: tile("#0F416F", '<circle cx="100" cy="75" r="42" fill="#25BEC0"/>') },
  { label: "Curious",    src: tile("#D7DF21", '<circle cx="66" cy="75" r="28" fill="none" stroke="#000000" stroke-width="7"/><circle cx="100" cy="75" r="28" fill="none" stroke="#000000" stroke-width="7"/><circle cx="134" cy="75" r="28" fill="none" stroke="#000000" stroke-width="7"/>') },
  { label: "Energized",  src: tile("#ED217C", '<path d="M20 110 L60 40 L100 110 L140 40 L180 110" fill="none" stroke="#ffffff" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>') },
  { label: "Reflective", src: tile("#25BEC0", '<path d="M45 130 A55 55 0 0 1 155 130 Z" fill="#ffffff"/>') },
  { label: "Playful",    src: tile("#8685C0", '<g fill="#D7DF21"><circle cx="50" cy="45" r="12"/><circle cx="100" cy="45" r="12"/><circle cx="150" cy="45" r="12"/><circle cx="50" cy="105" r="12"/><circle cx="100" cy="105" r="12"/><circle cx="150" cy="105" r="12"/></g>') },
  { label: "Rushed",     src: tile("#000000", '<g stroke="#D7DF21" stroke-width="9" stroke-linecap="round"><line x1="30" y1="120" x2="90" y2="30"/><line x1="80" y1="120" x2="140" y2="30"/><line x1="130" y1="120" x2="190" y2="30"/></g>') },
];

// Template for the "+ Add the example image question" button in the dashboard.
export const EXAMPLE_IMAGE_QUESTION = {
  id: "x-feeling", order: 99, type: "imagechoice", required: false,
  title: "Which image feels closest to your typical SITE visit?",
  images: FEELING_IMAGES,
};

export const DEFAULT_QUESTIONS = [
  {
    id: "c01", order: 1, type: "short", required: false,
    title: "Email",
    placeholder: "you@example.com",
  },
  {
    id: "c02", order: 2, type: "multiple", required: true,
    title: "What brings you to SITE Santa Fe...",
    options: ["Art", "An event", "Curiosity", "I just like to pass by", "Friends or Family", "It's Free!"],
    allowOther: true,
  },
  {
    id: "c03", order: 3, type: "yesno", required: true,
    title: "Are you a SITE Santa Fe member?", allowOther: false,
  },
  {
    id: "c04", order: 4, type: "multiple", required: true,
    title: "How many times have you been to SITE Santa Fe?",
    options: ["0", "1", "2-5", "5-10", "10+"], allowOther: false,
  },
  {
    id: "c05", order: 5, type: "imagechoice", required: true,
    title: "How do you arrive to SITE?",
    images: ARRIVAL_IMAGES,
  },
  {
    id: "c06", order: 6, type: "short", required: false,
    title: "If any, type additional or other methods on you arrived:",
    placeholder: "Your answer",
  },
  {
    id: "c07", order: 7, type: "yesno", required: true,
    title: "Do you know where the restrooms are located?", allowOther: false,
  },
  {
    id: "c08", order: 8, type: "yesno", required: true,
    title: "Do you leave your belongings at the front desk cubbies?", allowOther: false,
  },
  {
    id: "c09", order: 9, type: "yesno", required: true,
    title: "Do you find SITE Santa Fe easy to navigate?", allowOther: false,
  },
  {
    id: "c10", order: 10, type: "short", required: false,
    title: "If not, why?",
    placeholder: "Your answer",
  },
  {
    id: "c11", order: 11, type: "imagechoice", required: false,
    title: "Which museum space resonates with you most?",
    images: SPACE_IMAGES,
  },
  {
    id: "c12", order: 12, type: "multiple", required: true,
    title: "I wish SITE Santa Fe had...",
    options: [
      "CHILDREN'S AREA",
      "MORE SEATING & RESTING AREAS",
      "OUTDOOR SPACE",
      "GARDEN/ PLANTS",
      "QUIET & STUDY AREAS",
      "CAFE/COFFEE SHOP",
      "MORE NATURAL LIGHT",
      "FREE COMMUNITY EVENTS & ACTIVITY",
      "BETTER PARKING",
      "MORE SIGNS - GUIDES ON SIDEWALKS, BETTER LABELING OF SPACES",
      "BAR/ ADULT SPACE",
      "MORE INTERACTIVE OR LIVE INSTALLATIONS",
      "CLEARER MAIN ENTRANCE",
      "GIFT SHOP",
      "ART EXHIBIT GUIDE",
    ],
    allowOther: true,
  },
  {
    id: "c13", order: 13, type: "short", required: false,
    title: "Please list any additional spaces that you wished SITE Santa Fe Had:",
    placeholder: "Your answer",
  },
];
