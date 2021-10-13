const myGameId = 'm4sf6ZHY83BiDA7soyq9';
const baseURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
const scoresURL = `${baseURL}games/${myGameId}/scores/`;

async function postScore(data) {
  const res = await fetch(scoresURL, {
    method: 'POST',
    mode: 'cors',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(data),
  });
  return res.json(); // parses JSON response into native JavaScript objects
}

async function getScores() {
  const res = await fetch(scoresURL);
  return res.json();
}

export { postScore, getScores };