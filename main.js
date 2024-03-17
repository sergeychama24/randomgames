import './index.css';
import {
  getGameByIdRequest,
  getScreenshotsByIdRequest,
} from './components/api.js';

const gameCover = document.querySelector('.hero__img');
const gameTitle = document.querySelector('.hero__title');
const gameMainGenre = document.querySelector('.hero__genre--short');
const gameScore = document.querySelector('.hero__score');
const screenshots = document.querySelectorAll('.screenshot');

const initialGame = (gameId) => {
  getGameByIdRequest(gameId).then((data) => {
    gameTitle.textContent = data.name;
    gameMainGenre.textContent = data.genres[0].name;
    gameScore.textContent = data.metacritic;
    gameCover.src = data.background_image;
    gameCover.alt = data.name;
    console.log(data);
  });

  getScreenshotsByIdRequest(gameId).then((data) => {
    console.log(data);
    screenshots.forEach((screenshot, index) => {
      screenshot.src = data.results[index].image;
      screenshot.alt = data.results[index].name;
    });
  });
};

initialGame('persona-5');

console.log(screenshots);
