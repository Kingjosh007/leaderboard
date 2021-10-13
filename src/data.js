import { getScores, postScore } from './api-stuff.js';

// eslint-disable-next-line import/no-mutable-exports
let data = [
  { user: 'King007', score: 23 },
  { user: 'PaulWalker', score: 18 },
  { user: 'Gonakie', score: 16 },
  { user: 'Punisher', score: 30 },
  { user: 'Microscope', score: 24 },
  { user: 'RealGuy', score: 13 },
];

const idFromIndex = (i) => `${data[i].user}-${data[i].score}`;

function decorateRanking() {
  const allEl = document.querySelectorAll('li');
  const allElArr = [...allEl];
  allElArr.slice(0, 3).forEach((el) => {
    el.querySelector('.rk').style.background = 'green'; el.querySelector('.rk').style.fontSize = '17px';
  });
  allElArr[0].querySelector('.rk').textContent = '🥇'; allElArr[1].querySelector('.rk').textContent = '🥈'; allElArr[2].querySelector('.rk').textContent = '🥉';

  if (allElArr.length > 3) {
    allElArr[3].querySelector('.rk').style.background = '#dd7722';
  }
}

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
  decorateRanking();
}

async function displayScores() {
  const scores = await getScores();
  if (scores.result) {
    data = scores.result;
  }
  displayData(data);
}

(async () => {
  await displayScores();
})();

const asForm = document.forms['add-score'];

asForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const user = asForm.name.value;
  const score = Number(asForm.score.value);
  if (user && score) {
    const obj = { user, score };
    await postScore(obj);
    await displayScores();
    asForm.name.value = '';
    asForm.score.value = '';
  }
});