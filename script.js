document.getElementById('jsonFileInput').addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => {
    try {
      const data = JSON.parse(reader.result);
      const content = document.getElementById('content');
      content.innerHTML = ''; 

      data.forEach((vegetable) => {
        // Create card container
        const card = document.createElement(vegetable.elementType || 'div');
        card.classList.add('vegetable-card', vegetable.styleVariant);

       
        const title = document.createElement('h2');
        title.textContent = vegetable.title;

        const description = document.createElement('p');
        description.textContent = vegetable.description;

        card.appendChild(title);
        card.appendChild(description);

      
        content.appendChild(card);
      });
    } catch (error) {
      console.error('Error parsing JSON:', error);
      alert('Błąd wczytywania pliku JSON. Sprawdź format pliku.');
    }
  };
  reader.readAsText(file);
});
