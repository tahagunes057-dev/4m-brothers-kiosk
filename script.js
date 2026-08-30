// ============================================
// 4M BROTHERS KIOSK — Interactivity
// ============================================

document.addEventListener('DOMContentLoaded', () => {

  /* ---- Header: solid background after scroll ---- */
  const header = document.getElementById('siteHeader');
  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 20);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---- Mobile nav toggle ---- */
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');

  navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
    navToggle.setAttribute('aria-label', isOpen ? 'Menü schließen' : 'Menü öffnen');
  });

  mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  /* ---- Opening hours data ----
     Keyed by JS getDay(): 0 = Sonntag ... 6 = Samstag
     Times in minutes-from-midnight of that day. If close <= open,
     the shop closes after midnight (into the next calendar day). */
  const HOURS = {
    0: { open: 9 * 60, close: 1 * 60 },   // Sonntag  09:00–01:00
    1: { open: 9 * 60, close: 1 * 60 },   // Montag   09:00–01:00
    2: { open: 9 * 60, close: 1 * 60 },   // Dienstag 09:00–01:00
    3: { open: 9 * 60, close: 1 * 60 },   // Mittwoch 09:00–01:00
    4: { open: 9 * 60, close: 1 * 60 },   // Donnerstag 09:00–01:00
    5: { open: 9 * 60, close: 3 * 60 },   // Freitag  09:00–03:00
    6: { open: 9 * 60, close: 3 * 60 },   // Samstag  09:00–03:00
  };

  const DAY_NAMES = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];

  function fmt(mins) {
    const m = ((mins % (24 * 60)) + 24 * 60) % (24 * 60);
    const h = Math.floor(m / 60);
    const min = m % 60;
    return `${String(h).padStart(2, '0')}:${String(min).padStart(2, '0')}`;
  }

  function getStatus(now) {
    const day = now.getDay();
    const minutesNow = now.getHours() * 60 + now.getMinutes();
    const prevDay = (day + 6) % 7;

    // Case 1: still within yesterday's overnight window (closes after midnight)
    const prev = HOURS[prevDay];
    if (prev.close <= prev.open && minutesNow < prev.close) {
      return { open: true, closesAt: prev.close, closesToday: true, opensAt: null };
    }

    // Case 2: within today's window
    const today = HOURS[day];
    const closesTonight = today.close <= today.open; // wraps past midnight
    if (minutesNow >= today.open && (closesTonight || minutesNow < today.close)) {
      return { open: true, closesAt: today.close, closesToday: !closesTonight, wrapsTonight: closesTonight };
    }

    // Otherwise closed — find next opening time
    if (minutesNow < today.open) {
      return { open: false, opensAt: today.open, opensToday: true };
    }
    const nextDay = (day + 1) % 7;
    return { open: false, opensAt: HOURS[nextDay].open, opensDayName: DAY_NAMES[nextDay] };
  }

  function updateStatus() {
    const now = new Date();
    const status = getStatus(now);

    const dot = document.getElementById('statusDot');
    const text = document.getElementById('statusText');
    const cardStatus = document.getElementById('cardStatus');
    const cardSub = document.getElementById('cardSub');

    if (status.open) {
      dot.className = 'status-dot open';
      const closesLabel = status.wrapsTonight
        ? `${fmt(status.closesAt)} Uhr`
        : `${fmt(status.closesAt)} Uhr`;
      text.textContent = `Geöffnet · schließt um ${closesLabel}`;
      cardStatus.textContent = 'Jetzt geöffnet';
      cardSub.textContent = `Schließt heute um ${closesLabel}.`;
    } else {
      dot.className = 'status-dot closed';
      if (status.opensToday) {
        text.textContent = `Geschlossen · öffnet um ${fmt(status.opensAt)} Uhr`;
        cardStatus.textContent = 'Gerade geschlossen';
        cardSub.textContent = `Öffnet heute wieder um ${fmt(status.opensAt)} Uhr.`;
      } else {
        text.textContent = `Geschlossen · öffnet ${status.opensDayName} um ${fmt(status.opensAt)} Uhr`;
        cardStatus.textContent = 'Gerade geschlossen';
        cardSub.textContent = `Öffnet wieder am ${status.opensDayName} um ${fmt(status.opensAt)} Uhr.`;
      }
    }
  }

  function highlightToday() {
    const day = new Date().getDay();
    document.querySelectorAll('#hoursList li').forEach(li => {
      li.classList.toggle('today', Number(li.dataset.day) === day);
    });
  }

  updateStatus();
  highlightToday();
  // Keep the status fresh if someone leaves the tab open
  setInterval(updateStatus, 60 * 1000);

});
