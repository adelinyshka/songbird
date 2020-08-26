function getRandomNumber() {
  return Math.ceil(Math.random() * 6);
}

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

export { getRandomNumber, shuffle };
