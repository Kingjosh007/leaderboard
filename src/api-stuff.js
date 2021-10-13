const myGameId = 'm4sf6ZHY83BiDA7soyq9';
const baseURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
const scoresURL = `${baseURL}games/${myGameId}/scores/`;

const postScore = async (data) => {
  const res = await fetch(scoresURL, {
    method: 'POST',
    mode: 'cors',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(data),
  });
  return res.json();
};

const getScores = async () => {
  const res = await fetch(scoresURL);
  return res.json();
};

export { postScore, getScores };