export const getRandomCat = () =>
  fetch('https://api.thecatapi.com/v1/images/search?size=full')
    .then(resp => resp)
    .then(resp => resp.json());
