/* ============================================================
   Conference Companion — per-event opt-in pages
   One entry per event. The page is companion.getdvotd.com/join/?e=<key>
   Add an event by copying the "example" block, changing the key and the
   values, and committing. Nothing else needs to change.

   joinUrl  — the attendee opt-in form in the Conference Companion app.
              In the app's admin, open the event, create its join code (the
              QR screen), and paste the link it gives you here. It looks like
              https://dvotd-conference-app.web.app/join?c=XXXXXXXX
              Leave it "" and the page shows "opens soon" with no button.
   accent   — the host's brand colour (hex). Leave "" for DVOTD red.
   logo     — a logo image URL, or "". Shown above the event name.
   open     — false hides the join button and QR until you flip it to true.
   ============================================================ */
window.EVENTS = {

  "demo": {
    name: "The Summit",
    host: "Your Organization",
    tagline: "Your companion for the two days ahead.",
    dates: "March 12–13, 2027",
    location: "Anaheim Convention Center",
    accent: "",
    logo: "",
    joinUrl: "https://dvotd-conference-app.web.app/join?c=DEMO",
    open: true,
    frequency: "Several messages a day during the event, occasional before and after.",
    whyLines: [
      "Tell it what you came for. It keeps that in front of you all event.",
      "Session picks matched to your goal, with a nudge before each one.",
      "Your notes, decisions and next steps, kept in one thread you can search later."
    ]
  },

  "example": {
    name: "Event Name",
    host: "Host Name",
    tagline: "One line in the host's voice.",
    dates: "Dates",
    location: "Venue, City",
    accent: "#1e5bff",
    logo: "",
    joinUrl: "",
    open: false,
    frequency: "Several messages a day during the event, occasional before and after.",
    whyLines: [
      "Tell it what you came for. It keeps that in front of you all event.",
      "Session picks matched to your goal, with a nudge before each one.",
      "Your notes, decisions and next steps, kept in one thread you can search later."
    ]
  }

};
