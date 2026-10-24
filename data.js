// ============================================================
//  SITE SETTINGS — edit these, then re-upload this file
// ============================================================
window.SITE = {
  name: "freshhands",

  // Supabase database. When filled in, new profiles appear on the site right away.
  // Find these in Supabase → Project Settings → API (Project URL and the anon / publishable key).
  supabase: {
    url: "https://otrokjprvojdmkqycslb.supabase.co",
    key: "sb_publishable_2Mv5dYLjqEFdRfJoUJAtiw_SD8Wo0rs"
  },

  // Applications from the site's own form are sent to this email (used only if Supabase is empty).
  applyEmail: "tankovjenya@gmail.com",

  // Optional: a Google Form link instead of the built-in form. Leave empty to use the built-in one.
  joinFormUrl: "",

  // Where people send reports about scams / bad profiles.
  reportEmail: "tankovjenya@gmail.com",

  // Stripe Payment Links (made in the Stripe dashboard). Paste them here.
  payLinks: {
    basic: "",
    pro: "",
    ultra: ""
  },

  // Google AdSense. Leave empty until you have your own domain and AdSense approves you.
  ads: {
    adsenseClient: "",   // looks like "ca-pub-1234567890123456"
    adsenseSlot: "",     // looks like "1234567890"
    every: 12            // one ad after every 12 freelancers
  },

  // Shown on the Terms page. Stripe needs these to be real.
  owner: {
    name: "[Full name of the account owner]",
    country: "[Country]",
    email: "[Contact email]"
  }
};

// ============================================================
//  FREELANCERS — the list is empty for now.
//
//  To add a person: copy the example below (without the // ),
//  paste it between [ and ], fill it in. Put a comma between people.
//
//  {
//    id: "anna-design",            // short, no spaces, different for everyone
//    name: "Anna",
//    plan: "free",                 // free | basic | pro | ultra
//    category: "design",           // design | video | websites | gamedev | music | writing | translation | tutoring
//    title: "Logos and banners for small brands",
//    about: "A few sentences about what they do.",
//    skills: ["Figma", "Logos"],
//    priceFrom: 10,
//    languages: ["English"],
//    replyIn: "same day",
//    portfolio: [ { title: "My work", url: "https://..." } ],
//    contact: { telegram: "anna", discord: "", instagram: "", email: "" },
//    color: "#2f5bea",             // Basic and up: profile color
//    available: true,              // Pro and up: green "Open for work" light (false = off)
//    joined: "2026-10-24"
//  }
// ============================================================
window.FREELANCERS = [

];
