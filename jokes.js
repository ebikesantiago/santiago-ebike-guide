(function () {
  const jokes = [
    { setup: "Why don't e-bikes ever get lost around Santiago?", punch: "They always follow the Great Northern — and their GPS is just \"go until the prairie looks familiar.\"" },
    { setup: "What did the e-bike say to the oak savanna?", punch: "\"I'm just pedaling through — don't leaf me hanging!\"" },
    { setup: "Why was the trail so polite near Zimmerman?", punch: "It always yielded — even the rails-to-trails had manners." },
    { setup: "How do you spot a Minnesota e-biker in fall?", punch: "They're the ones packing bug spray AND a fleece... and still talking about \"nice weather.\"" },
    { setup: "Why did the dad bring a charger on the Great Northern?", punch: "In case his jokes went flat before the battery did." },
    { setup: "What's an e-bike's favorite Sherburne County snack?", punch: "Anything within 20 mph of a café in Elk River." },
    { setup: "Why don't ATVs hang out on the county trails?", punch: "They're not invited — and the 20 mph limit isn't their vibe." },
    { setup: "What do you call an e-bike at Sherburne NWR?", punch: "A guest who checked the USFWS rules first. (Be that guest.)" },
    { setup: "Why was the prairie so encouraging?", punch: "It kept saying, \"You've got this — it's mostly flat!\"" },
    { setup: "How does an e-bike greet a walker with a dog?", punch: "\"On your left — and what a good pup!\"" },
    { setup: "Why did the fat-tire e-bike love Minnesota winter?", punch: "It finally felt like its tread was appreciated." },
    { setup: "What's the difference between Class 1, 2, and 3 on the GNRT?", punch: "Visually? Not much. That's why Sherburne just said: keep it under 20." }
  ];

  const setupEl = document.getElementById("joke-setup");
  const punchEl = document.getElementById("joke-punch");
  const btn = document.getElementById("joke-next");
  if (!setupEl || !punchEl) return;

  let last = -1;

  function showJoke() {
    let i;
    do {
      i = Math.floor(Math.random() * jokes.length);
    } while (i === last && jokes.length > 1);
    last = i;
    setupEl.textContent = jokes[i].setup;
    punchEl.textContent = jokes[i].punch;
  }

  showJoke();
  if (btn) btn.addEventListener("click", showJoke);

  // Rotate every 28 seconds if page stays open
  setInterval(showJoke, 28000);
})();
