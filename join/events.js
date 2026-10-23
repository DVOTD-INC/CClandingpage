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
   accent   — an accent colour for the event (hex). Leave "" for DVOTD red.
              The page carries DVOTD branding only: the carriers require the
              registered business, DVOTD Inc., to be the one sender named.
   open     — false hides the join button and QR until you flip it to true.
   ============================================================ */
window.EVENTS = {

  "demo": {
    name: "Spring Summit 2027",
    tagline: "Your companion for the two days ahead.",
    dates: "March 12–13, 2027",
    location: "Anaheim Convention Center",
    accent: "",
    joinUrl: "https://dvotd-conference-app.web.app/join?c=DEMO",
    open: true,
    whyLines: [
      "Tell it what you came for. It keeps that in front of you all event.",
      "Session picks matched to your goal, with a nudge before each one.",
      "Your notes, decisions and next steps, kept in one thread you can search later."
    ]
  },

  "example": {
    name: "Event Name",
    tagline: "One line about the event.",
    dates: "Dates",
    location: "Venue, City",
    accent: "#1e5bff",
    joinUrl: "",
    open: false,
    whyLines: [
      "Tell it what you came for. It keeps that in front of you all event.",
      "Session picks matched to your goal, with a nudge before each one.",
      "Your notes, decisions and next steps, kept in one thread you can search later."
    ]
  }

};
