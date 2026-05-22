export const brandConfig = {
  "slug": "sigmaplay-malang",
  "repo": "sigmaplay-cafe-malang-landing",
  "brandName": "Sigmaplay & Cafe",
  "monogram": "SP",
  "layout": "gaming",
  "category": "Gaming cafe",
  "address": "Malang, Jawa Timur",
  "contact": "sigmaplaymalang@gmail.com",
  "hours": "Daily 12:00-23:00, booking confirmation via admin",
  "publicLink": "https://linktr.ee/sigmaplay.malang",
  "instagram": "https://www.instagram.com/sigmaplay.malang",
  "theme": {
    "bg": "#05070f",
    "ink": "#f4fbff",
    "muted": "#9ca9bd",
    "accent": "#00f5d4",
    "accent2": "#7c3cff",
    "panel": "#0d1326"
  },
  "dna": {
    "visual": "HUD-inspired esports control room with RGB edge light, angular modules, and dark matte surfaces.",
    "business": "Convert squad traffic into confirmed console bookings, membership, and weekend community events.",
    "story": "Visitor arrives as a player, selects a station, checks squad perks, sees events, then books a time slot.",
    "emotion": "Competitive, social, fast, slightly underground.",
    "type": "Space Grotesk for UI clarity, Orbitron-style display for gamer identity.",
    "motion": "Reactive scanlines, fast hover locks, subtle parallax grid drift.",
    "layout": "Operational dashboard plus arena bento, not a standard hero-to-about sequence.",
    "conversion": "Primary route is station booking; secondary route is tournament/community participation.",
    "photo": "Dark console bays, close-ups of controllers, neon reflections, squads in play, cafe table details.",
    "unique": "The page feels like a playable booking console, not a cafe brochure."
  },
  "metrics": [
    "12 console bays concept",
    "3 squad zones",
    "Weekend mini events",
    "Admin-fast booking"
  ],
  "packages": [
    {
      "name": "Solo Hour",
      "price": "Rp20k",
      "note": "single player session"
    },
    {
      "name": "Duo Console",
      "price": "Rp35k",
      "note": "two-controller setup"
    },
    {
      "name": "Squad Night",
      "price": "Rp120k",
      "note": "group block, snacks optional"
    }
  ],
  "operations": [
    "Realtime seat board concept",
    "PS station specs",
    "Cafe snack add-on",
    "Tournament registration",
    "Member night benefits"
  ],
  "workflow": [
    "Pick station type",
    "Choose date and hour",
    "Send booking to admin",
    "Arrive 10 minutes early",
    "Scan promo/member code"
  ],
  "proof": [
    "Public profile positions the business as premium PS rental plus cafe in Malang.",
    "Email and partnership links support community programming.",
    "Booking-first link structure suggests low-friction admin confirmation."
  ],
  "team": [
    "Station admin",
    "Event marshal",
    "Cafe crew"
  ],
  "testimonials": [
    "Tempat mabar yang enak buat full squad.",
    "Booking lebih gampang kalau jadwal event jelas."
  ],
  "faqs": [
    "Can I reserve multiple consoles?",
    "Are snacks available during play?",
    "Can communities host mini tournaments?"
  ],
  "policies": [
    "Booking is confirmed by admin reply.",
    "Late arrival may shorten the reserved slot.",
    "Outside food depends on event rules."
  ],
  "sourceLinks": [
    {
      "label": "Sigmaplay Linktree",
      "url": "https://linktr.ee/sigmaplay.malang"
    },
    {
      "label": "Sigmaplay Instagram",
      "url": "https://www.instagram.com/sigmaplay.malang"
    }
  ]
} as const;

export type BrandConfig = typeof brandConfig;
