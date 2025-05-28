document.getElementById('jsonFileInput').addEventListener('change', e => {
  const jsonFile = new FileReader();

  jsonFile.onload = () => {
    const dane = JSON.parse(jsonFile.result);
    const content = document.getElementById('content');
    content.innerHTML = '';

    for (let i = 0; i < dane.length; i++) {
      let warzywo = dane[i];
      let div = document.createElement('div');
      div.className = 'section';
      div.style.background = warzywo.color;
      div.style.fontFamily = 'Arial';

      div.innerHTML = `<h2>${warzywo.title}</h2><p>${warzywo.description}</p>`;
      content.appendChild(div);
    }
  };

  jsonFile.readAsText(e.target.files[0]);
});
