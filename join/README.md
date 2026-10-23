# Per-event opt-in pages

`companion.getdvotd.com/join/?e=<key>` is the branded arrival page for one event's
Conference Companion. It explains the Companion in the host's colour and name, then
sends the attendee to the app's join form (name, mobile number, one-time code, consent
checkbox), which is the actual opt-in the carriers reviewed.

## Add an event

1. In the Conference Companion admin, open the event and create its join code (the QR
   screen). Copy the join link it gives you.
2. Open `events.js`, copy the `"example"` block, give it a short key (letters, digits,
   dashes), fill in the name, host, tagline, dates, location, accent colour, logo URL,
   and paste the join link into `joinUrl`. Set `open: true`.
3. Commit and push. Within a minute the page is live at
   `https://companion.getdvotd.com/join/?e=<key>`.

Put that link behind the QR on signage, in the pre-event email, and on badges. The
page also shows its own QR (laptop view and print) pointing at the join form.

`open: false` keeps the page up with an "opens on event day" notice and no button.
