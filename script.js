const bandList = document.getElementById('band');

const bands = [
  "The Bled", "Say Anything", "The Midway State", "We Came As Romans",
  "Counterparts", "Oh, Sleeper", "A Skylit Drive", "An Old Dog",
  "Pierce the Veil", "Norma Jean", "The Devil Wears Prada", "The Plot in You"
];

// Function to strip leading articles
function strip(bandName) {
  return bandName.replace(/^(a |an |the )/i, '').trim();
}

// Sort by stripped name
const sortedBands = bands.sort((a, b) => {
  return strip(a).localeCompare(strip(b));
});

// Render to the DOM
sortedBands.forEach(band => {
  const li = document.createElement('li');
  li.textContent = band;
  bandList.appendChild(li);
});
