import './index.css';
import { getGameByIdRequest } from './components/api.js';

getGameByIdRequest('naruto-shippuden-ultimate-ninja-storm-2').then((data) =>
  console.log(data)
);
