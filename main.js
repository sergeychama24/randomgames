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
const developers = document.querySelector('.developers');
const platforms = document.querySelector('.platforms__list');

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

    function monthToString(month) {
      const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ];
      return months[month - 1];
    }

    function formatDate(date) {
      const parts = date.split('-');
      const year = parts[0];
      const month = parseInt(parts[1]);
      const day = parts[2];
      const monthInWords = monthToString(month);
      return `${day} ${monthInWords} ${year}`;
    }

    const releasedDate = data.released;
    const releasedString = formatDate(releasedDate);

    const gameReleasedText = document.createElement('p');
    gameReleasedText.classList.add('released__text');
    gameReleasedText.textContent = releasedString;
    released.append(gameReleasedText);

    data.genres.forEach((genre) => {
      const gameGenre = document.createElement('li');
      gameGenre.classList.add('genres__list-item');
      gameGenre.textContent = genre.name;
      gameGenres.append(gameGenre);
    });

    data.platforms.forEach((el) => {
      const platform = document.createElement('li');
      platform.classList.add('platforms__list-item');
      platform.textContent = el.platform.name;
      platforms.append(platform);
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

initialGame('far-cry-3');

console.log(screenshots);
