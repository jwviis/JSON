const fileInput = document.getElementById('jsonFileInput');
const resetBtn = document.getElementById('resetBtn');
const content = document.getElementById('content');

// Reset na starcie
resetBtn.classList.add('hidden');

fileInput.addEventListener('change', e => {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => {
    try {
      const data = JSON.parse(reader.result);
      content.innerHTML = '';
      renderJSON(data);
      resetBtn.classList.remove('hidden');
    } catch (err) {
      showError("❌ Nieprawidłowy plik JSON.");
      resetBtn.classList.add('hidden');
    }
  };
  reader.readAsText(file);
});

resetBtn.addEventListener('click', () => {
  content.innerHTML = '';
  fileInput.value = '';
  resetBtn.classList.add('hidden');
});

function renderJSON(data) {
  if (Array.isArray(data)) {
    data.forEach((item, index) => {
      createSection(
        item.title || `Element ${index + 1}`,
        item.description || JSON.stringify(item),
        item.color,
        index
      );
    });
  } else if (typeof data === 'object') {
    Object.entries(data).forEach(([key, value], index) => {
      createSection(key, JSON.stringify(value, null, 2), null, index);
    });
  } else {
    showError("⚠️ Ten typ danych JSON nie jest obsługiwany.");
  }
}

function createSection(title, description, color, index) {
  const section = document.createElement('div');
  section.className = 'section';

  const variants = ['variant-1', 'variant-2', 'variant-3'];
  section.classList.add(variants[Math.floor(Math.random() * variants.length)]);

  section.style.backgroundColor = color || getColor(index);

  const icons = ['📄', '🗂️', '📌', '🔖', '🧾', '🗃️'];
  const icon = icons[index % icons.length];

  section.innerHTML = `
    <h2 data-icon="${icon}">${title}</h2>
    <p>${description}</p>
  `;

  content.appendChild(section);
}

function getColor(index) {
  const colors = ['#FF6F61', '#6C63FF', '#FFB74D', '#4DD0E1', '#AB47BC', '#26A69A'];
  return colors[index % colors.length];
}

function showError(msg) {
  content.innerHTML = `<p class="error">${msg}</p>`;
}
