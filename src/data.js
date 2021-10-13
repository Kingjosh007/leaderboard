const data = [
  { user: 'King007', score: 23 },
  { user: 'PaulWalker', score: 18 },
  { user: 'Gonakie', score: 16 },
  { user: 'Punisher', score: 30 },
  { user: 'Microscope', score: 24 },
  { user: 'RealGuy', score: 13 },
];

const idFromIndex = (i) => `${data[i].user}-${data[i].score}`;

function displayData(data) {
  const lbl = document.querySelector('.lb-list');
  lbl.innerHTML = '';
  const codeForData = data.sort((a, b) => b.score - a.score)
    .map((el, i) => `<li id="${idFromIndex(i)}" class="show">
                <span class="rk">${i + 1}</span>
                <span class="user">${el.user}</span>
                <span class="score">${el.score}</span>
              </li>`).join('');
  lbl.innerHTML = codeForData;
}

export { data, displayData };