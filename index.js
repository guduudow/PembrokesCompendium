const express = require("express"); // require express in the app
const path = require("path");
//require dotenv for api key
const dotenv = require("dotenv");
dotenv.config();

//import the Google Cloud client library
const { Translate } = require('@google-cloud/translate').v2;

//to read the credentials
const CREDENTIALS = JSON.parse(process.env.CREDENTIALS);

//create a client
const translate = new Translate({
  credentials: CREDENTIALS,
  projectId: CREDENTIALS.project_id
});



//require axios for HTTP request
const axios = require("axios");

//require dictionary API for word search
const dictionary = require("./modules/dictionary/func");
//require translation API for translating user search word
const translation = require("./modules/translate/func");

const app = express();
const port = process.env.PORT || "7999"; //set up app to run on port number 7999

app.use(express.urlencoded({ extended: true }));

//set up template engine (pug)
app.set('/', express.static(path.join(__dirname, 'views')));
app.set('view engine', 'pug');

app.get("/", async (request, response) => {
  response.render("index", { title: "Home | Pembroke" });
});

//page for word search

app.post('/search', async (request, response) => {
  const word = request.body.word;
  let dict = await dictionary.getWord(word);
  let french = await translation.translateWord(word, "fr");
  let german = await translation.translateWord(word, "de");
  let russian = await translation.translateWord(word, "ru");
  let spanish = await translation.translateWord(word, "es");
  let arabic = await translation.translateWord(word, "ar");
  let somali = await translation.translateWord(word, "so");
  let hindi = await translation.translateWord(word, "hi");
  response.render('search', { word, dict, french, german, russian, spanish, arabic, somali, hindi });
});

//set up path for static files
app.use(express.static(path.join(__dirname, 'public')));


app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
})