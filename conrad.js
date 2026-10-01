(function () {
  var stops = [
    { sel: '#top', say: "I'm Conrad, the company brain. Blue Collar Appz builds tools for people who do the work — kitchens, venues, trucks, and shops. This is a short tour. I'll talk. You can stop me any time." },
    { sel: '#apps', say: "This roster is the fleet. Each tile is a live or deployed app. We are in beta. If a service is asleep, the first open wakes it." },
    { sel: 'a[href*="venue-iq"]', say: "Venue IQ watches the room: covers, pace, and what the floor needs next." },
    { sel: 'a[href*="margin-iq"]', say: "Margin IQ keeps the money honest. Food cost and contribution, not a pretty chart with no owner." },
    { sel: 'a[href*="footruck"]', say: "Foodtruck Apollo is the truck: menu, location, and the shift in one place." },
    { sel: 'a[href*="restaunteur"]', say: "Restaurateur Pro is the operator's desk — the house, not the guest app." },
    { sel: 'a[href*="pro-builder"]', say: "Pro-Builder is for the build itself. Scope, sequence, and what is actually done." },
    { sel: 'a[href*="roundtable"]', say: "Roundtable is the meeting. Decisions stay in the room instead of dying in a thread." },
    { sel: 'a[href*="expansion-iq"]', say: "Expansion IQ asks whether the next location is real, not just exciting." },
    { sel: 'a[href*="bcaz-b-o-h"]', say: "Back of House IQ is the line: prep, stations, and the pass." },
    { sel: 'a[href*="dusk"]', say: "Dusk is the close. The night has a checklist, not a memory." },
    { sel: 'a[href*="vibe-concierge"]', say: "VIBE Concierge routes a guest need to the right person without turning the floor into a call center." },
    { sel: 'a[href*="foxhounds"]', say: "Foxhounds is the crew side. People who work together should be able to find each other." },
    { sel: '#mission', say: "The work has to mean something. Ten percent of proceeds support Adeshina's House, an orphan-care home in Jos, Nigeria. That is the mission. Tour's over — open any tile when you are ready." }
  ];

  var i = 0;
  var speaking = false;
  var brain, caption, startBtn;

  function pulse(on) {
    if (!brain) return;
    brain.classList.toggle('is-talking', on);
  }

  function say(text) {
    caption.textContent = text;
    speaking = true;
    pulse(true);
    if (!window.speechSynthesis) {
      window.setTimeout(next, Math.min(9000, 1800 + text.length * 40));
      return;
    }
    window.speechSynthesis.cancel();
    var u = new SpeechSynthesisUtterance(text);
    u.rate = 1;
    u.onend = function () { speaking = false; pulse(false); next(); };
    u.onerror = function () { speaking = false; pulse(false); next(); };
    window.speechSynthesis.speak(u);
  }

  function highlight(el) {
    document.querySelectorAll('.conrad-focus').forEach(function (n) { n.classList.remove('conrad-focus'); });
    if (!el) return;
    el.classList.add('conrad-focus');
    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  function next() {
    if (i >= stops.length) {
      pulse(false);
      startBtn.disabled = false;
      startBtn.textContent = 'Replay the tour';
      return;
    }
    var stop = stops[i++];
    var el = document.querySelector(stop.sel);
    highlight(el);
    say(stop.say);
  }

  function start() {
    i = 0;
    startBtn.disabled = true;
    startBtn.textContent = 'Conrad is touring';
    brain.hidden = false;
    next();
  }

  function stop() {
    i = stops.length;
    if (window.speechSynthesis) window.speechSynthesis.cancel();
    speaking = false;
    pulse(false);
    startBtn.disabled = false;
    startBtn.textContent = 'Meet Conrad';
  }

  function mount() {
    startBtn = document.getElementById('meet-conrad');
    if (!startBtn) return;
    var dock = document.createElement('div');
    dock.className = 'conrad-dock';
    dock.innerHTML = '<button type="button" class="conrad-brain" id="conrad-brain" hidden aria-label="Conrad brain"></button><p class="conrad-caption" id="conrad-caption"></p><button type="button" class="conrad-stop" id="conrad-stop">Stop</button>';
    document.body.appendChild(dock);
    brain = document.getElementById('conrad-brain');
    caption = document.getElementById('conrad-caption');
    startBtn.addEventListener('click', start);
    document.getElementById('conrad-stop').addEventListener('click', stop);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount);
  else mount();
})();
