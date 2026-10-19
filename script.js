const grid = document.getElementById("grid");
const chips = document.getElementById("chips");
const search = document.getElementById("search");
const count = document.getElementById("count");

let activeType = "All";
let query = "";

// Small helper: makes an element with a class and some text
function el(tag, className, text) {
  const e = document.createElement(tag);
  if (className) e.className = className;
  if (text !== undefined) e.textContent = text;
  return e;
}

// Builds one flip card
function makeCard(w) {
  const card = el("button", "card");
  card.type = "button";
  card.setAttribute("aria-pressed", "false");
  card.setAttribute("aria-label", w.name + ". Tap to flip.");

  const inner = el("span", "inner");

  const front = el("span", "face front");
  front.appendChild(el("span", "tag", w.type));
  front.appendChild(el("span", "name", w.name));
  front.appendChild(el("span", "build", w.build));
  front.appendChild(el("span", "hint", "Tap to see attachments"));

  const back = el("span", "face back");
  back.appendChild(el("span", "title", w.name));
  SLOTS.forEach(function (slot) {
    const row = el("span", "slot");
    row.appendChild(el("span", "slot-name", slot));
    const value = (w.attachments || {})[slot];
    row.appendChild(value ? el("strong", "", value) : el("strong", "empty", "-"));
    back.appendChild(row);
  });

  inner.appendChild(front);
  inner.appendChild(back);
  card.appendChild(inner);
  return card;
}

// Shows the cards that match the filter and the search box
function render() {
  const shown = weapons.filter(function (w) {
    return (activeType === "All" || w.type === activeType) &&
      w.name.toLowerCase().indexOf(query) !== -1;
  });
  grid.innerHTML = "";
  shown.forEach(function (w) { grid.appendChild(makeCard(w)); });
  if (shown.length === 0) {
    grid.appendChild(el("p", "", "No weapons match. Clear the search or pick another type."));
  }
  count.textContent = shown.length + " of " + weapons.length + " weapons";
}

// Filter buttons are made automatically from the types in weapons.js
function makeChips() {
  const types = ["All"];
  if (typeof CATEGORIES !== "undefined") {
    CATEGORIES.forEach(function (c) { types.push(c); });
  }
  // Safety net: a type that is not in CATEGORIES still gets its own button
  weapons.forEach(function (w) {
    if (types.indexOf(w.type) === -1) types.push(w.type);
  });
  chips.innerHTML = "";
  types.forEach(function (t) {
    const b = el("button", t === activeType ? "chip on" : "chip", t);
    b.type = "button";
    b.setAttribute("data-type", t);
    chips.appendChild(b);
  });
}

// Click a card = flip it
grid.addEventListener("click", function (e) {
  const card = e.target.closest(".card");
  if (!card) return;
  const flipped = card.classList.toggle("flipped");
  card.setAttribute("aria-pressed", String(flipped));
});

// Click a filter button
chips.addEventListener("click", function (e) {
  const chip = e.target.closest(".chip");
  if (!chip) return;
  activeType = chip.getAttribute("data-type");
  makeChips();
  render();
});

// Type in the search box
search.addEventListener("input", function (e) {
  query = e.target.value.trim().toLowerCase();
  render();
});

// Start. If weapons.js has a typo, this tells you instead of showing a blank page.
if (typeof weapons === "undefined" || typeof SLOTS === "undefined") {
  count.textContent = "Error: weapons.js did not load. Check it for a missing comma, quote, or bracket.";
} else {
  makeChips();
  render();
}