export const brandConfig = {
  "slug": "sigmaplay-malang",
  "repo": "sigmaplay-cafe-malang-landing",
  "brandName": "Sigmaplay & Cafe",
  "monogram": "SP",
  "category": "Gaming cafe",
  "location": "Lowokwaru gaming district",
  "address": "Malang, Jawa Timur",
  "contact": "sigmaplaymalang@gmail.com",
  "publicLink": "https://linktr.ee/sigmaplay.malang",
  "instagram": "https://www.instagram.com/sigmaplay.malang",
  "theme": {
    "bg": "#070914",
    "accent": "#6c5ce7",
    "accent2": "#00f5d4",
    "paper": "#f7fbff"
  },
  "nav": [
    "Stations",
    "Menu",
    "Events",
    "Booking"
  ],
  "hero": {
    "eyebrow": "Rental PS premium + cafe",
    "title": "Mabar, cafe, and squad nights in one fast booking flow.",
    "body": "A neon gaming lounge concept for console rental, drinks, snacks, and community sessions. Built for players who want to pick a slot, bring a squad, and start playing.",
    "cta": "Book a Station"
  },
  "sections": [
    {
      "id": "stations",
      "kicker": "Gaming Stations",
      "title": "Console bays made for solo runs and full squad sessions.",
      "items": [
        "Premium console station",
        "Squad-friendly seating",
        "Quick admin booking"
      ]
    },
    {
      "id": "cafe",
      "kicker": "Cafe Menu",
      "title": "Snacks and drinks keep the session going.",
      "items": [
        "Cold drinks",
        "Light bites",
        "Waiting-area orders"
      ]
    },
    {
      "id": "events",
      "kicker": "Community Events",
      "title": "Small tournaments, weekend battles, and content nights.",
      "items": [
        "Mini bracket nights",
        "Streamer-ready sessions",
        "Community booking"
      ]
    },
    {
      "id": "pricing",
      "kicker": "Session Pricing",
      "title": "Simple offers that match how players buy time.",
      "items": [
        "Solo Hour",
        "Duo Console",
        "Squad Battle Night"
      ]
    }
  ],
  "layout": "neon"
} as const;

export type BrandConfig = typeof brandConfig;
