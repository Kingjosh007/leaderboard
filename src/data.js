const data = [
  { name: 'King007', score: 23 },
  { name: 'PaulWalker', score: 18 },
  { name: 'Gonakie', score: 16 },
  { name: 'Punisher', score: 30 },
  { name: 'Microscope', score: 24 },
  { name: 'RealGuy', score: 13 },
];

const idFromIndex = (i) => `${data[i].name}-${data[i].score}`;

function displayData(data) {
  const lbl = document.querySelector('.lb-list');
  lbl.innerHTML = '';
  const codeForData = data.sort((a, b) => b.score - a.score)
    .map((el, i) => `<li id="${idFromIndex(i)}" class="show">
                <span class="rk">${i + 1}</span>
                <span class="name">${el.name}</span>
                <span class="score">${el.score}</span>
              </li>`).join('');
  lbl.innerHTML = codeForData;
}

export { data, displayData };