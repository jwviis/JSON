document.getElementById('jsonFileInput').addEventListener('change', e => {
  const jsonFile = new FileReader();

  jsonFile.onload = () => {
    const dane = JSON.parse(jsonFile.result);
    const content = document.getElementById('content');
    content.innerHTML = '';

    for (let i = 0; i < dane.length; i++) {
      let warzywo = dane[i];
      let element = document.createElement(warzywo.elementType);
      element.className = `section ${warzywo.styleVariant}`;
      element.innerHTML = `<h2>${warzywo.title}</h2><p>${warzywo.description}</p>`;
      content.appendChild(element);
    }
  };

  jsonFile.readAsText(e.target.files[0]);
});
