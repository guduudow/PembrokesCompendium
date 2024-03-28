const axios = require('axios');


async function getWord(word) {
  const apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
  const response = await axios.get(apiURL);
  let wordData = response.data[0];
  return wordData;
}

module.exports = {
  getWord
};