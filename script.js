const fileInput = document.getElementById('jsonFileInput');
const contentDiv = document.getElementById('content');

fileInput.addEventListener('change', (event) => {
  const file = event.target.files[0];

  if (!file) {
    alert('Proszę wybrać plik JSON!');
    return;
  }

  const reader = new FileReader();
  reader.onload = () => {
    try {
      const vegetables = JSON.parse(reader.result);
      contentDiv.innerHTML = '';

      vegetables.forEach((vegetable) => {
        const card = document.createElement(vegetable.elementType || 'div');
        card.className = `vegetable-card ${vegetable.styleVariant || 'variant-primary'}`;

        const title = document.createElement('h2');
        title.textContent = vegetable.title || 'Bez nazwy';

        const description = document.createElement('p');
        description.textContent = vegetable.description || 'Brak opisu';

        card.appendChild(title);
        card.appendChild(description);
        contentDiv.appendChild(card);
      });
    } catch (error) {
      console.error('Błąd podczas wczytywania JSON:', error);
      alert('Błąd w pliku JSON! Sprawdź, czy plik jest poprawny.');
    }
  };

  reader.readAsText(file);
});
