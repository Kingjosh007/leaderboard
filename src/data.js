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
    let user = asForm.name.value;
    let score = Number(asForm.score.value);
    if(user && score) {
        let obj = { user, score };
        let res = await postScore(obj);
        await displayScores();
        asForm.name.value = '';
        asForm.score.value = '';
    }
    
    
})