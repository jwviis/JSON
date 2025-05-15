document.getElementById('jsonFileInput').addEventListener('change', e => {
    const jsonFile = new FileReader();

    jsonFile.onload = () => {
            const parsowanie = JSON.parse(jsonFile.result);
            const content = document.getElementById('content');
            content.innerHTML = '';

            for (let i = 0; i < parsowanie.length; i++) {
                let s = parsowanie[i];
                let section = document.createElement('div');
                section.className = "section";
                section.style.background = s.color;
                section.style.fontFamily = "Arial";

                section.innerHTML = `<h2>${s.title}</h2><p>${s.description}</p>`;

                content.appendChild(section);
            }
    };

    jsonFile.readAsText(e.target.files[0]);
});
