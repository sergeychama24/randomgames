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
const gameGenres = document.querySelector('.genres__list');
const description = document.querySelector('.description');
const released = document.querySelector('.released');

const initialGame = (gameId) => {
  getGameByIdRequest(gameId).then((data) => {
    gameTitle.textContent = data.name;
    gameMainGenre.textContent = data.genres[0].name;
    gameScore.textContent = data.metacritic;
    gameCover.src = data.background_image;
    gameCover.alt = data.name;

    const gameDescriptionText = document.createElement('p');
    gameDescriptionText.classList.add('description__text');
    gameDescriptionText.textContent = data.description_raw;
    description.append(gameDescriptionText);

    const gameReleasedText = document.createElement('p');
    gameReleasedText.classList.add('released__text');
    gameReleasedText.textContent = data.released;
    released.append(gameReleasedText);

    data.genres.forEach((genre) => {
      const gameGenre = document.createElement('li');
      gameGenre.classList.add('genres__list-item');
      gameGenre.textContent = genre.name;
      gameGenres.prepend(gameGenre);
    });

    console.log(data);
  });

  getScreenshotsByIdRequest(gameId).then((data) => {
    screenshots.forEach((screenshot, index) => {
      screenshot.src = data.results[index].image;
      screenshot.alt = `Screenshot`;
    });
  });
};

initialGame('the-legend-of-zelda-breath-of-the-wild');

console.log(screenshots);
