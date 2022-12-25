// export { refs };
import { options, glide } from './slider-glide';
import Glide from '@glidejs/glide';
import {searchIdforMovie} from './modalMoviesCard';
import { getPopularMovies } from '../api-services/movies-api-service';
import Notiflix, { Notify } from 'notiflix';
import axios from 'axios';

const refs = {
  moviesContainer: document.querySelector('.movies-container'),
}


const sliderList = document.querySelector('.glide__slides');
const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'f983fc840eb543faba07dcbe6db19b0b';

// class MoviesApiService {
//   constructor() {
//     this.page = 1;
//     this.searchQuery = '';
//     this.lang = '';
//     this.genre = '';
//     this.year = '';
//     this.originalLanguage = '';
//   }
//   async getTrendFilms() {
//     try {
//       const url = `${BASE_URL}trending/movie/week?api_key=${API_KEY}&language=${this.lang}`;
//       const response = await axios.get(url);
//       return response.data;
//     } catch (error) {
//       Notify.failure('Oops, an error occurred');
//     }
//   }
// }

// const moviesApiService = new MoviesApiService();


renderSliderMovies()


  function renderSliderMovies() {
    moviesApiService.getTrendFilms().then(({results}) => {
      console.log(results);
      // console.log(markupMoviesSliderCard(results));
      markupMoviesSliderCard(results);
      onClickMoviesSliderCard();
        })
  }

// function markupMoviesSliderCard(results) {
//   refs.moviesContainer.innerHTML = '';

//   const markup = results.map(item => {
//     return `<div class="glide">
//     <div class="movies-slides glide__track" data-glide-el="track">
//         <ul class=" movies-slides__list glide__slides" id="glide__slides">
//     //     <li class="movies-slides__item glide__slide" data-id=${item.id}>
//     //     <img class="movies-slides__img"
//     //   src="https://image.tmdb.org/t/p/w500${item.poster_path}"
//     //   alt="${item.title}"
//     // />
//     //     </li>
//         </ul>
//     </div>
//     <div class="glide__arrows">
//         <button class="glide__arrow--left"</button>
//         <button class="glide__arrow--right"</button>
//     </div>
//   </div>`
//   });

//   // refs.moviesContainer.insertAdjacentHTML('beforeend', markup);

//   let arrFilmTrends = [];
// results.map(item => {
//   let image = document.createElement('img');
//   image.class = 'movies-slider__img';
//   image.src = `https://image.tmdb.org/t/p/w500${item.poster_path}`;
//   image.alt = 'movie__poster';
//   console.log(image);

//   let li = document.createElement('li', image);
//   li.class = 'movies-slider__item glide__slide';
//   li.id = `${item.id}`;
//   console.log(li);

//   arrFilmTrends.push(image, li);
//   console.log(arrFilmTrends);
// }).join(',');
// sliderList.append(...arrFilmTrends);


// let glid = new Glide('.glide', options);
//   glid.mount();

// }

function buttonArrow() {
  const refs = {
    left: document.querySelector('.glide__arrow--left'),
    right: document.querySelector('.glide__arrow--right'),
    btnContainer: document.querySelector('.glide__arrows'),
  }
    refs.btnContainer.forEach(item => {
    item.style.cssText = `
    outline: none;
    box-shadow: none;
    border-radius: 50%;
    padding: 4px 7px;
    background-color: rgba(0, 0, 0, 0.4);
  `;
});

refs.left.style.left = `3px`;
refs.right.style.right = `4px`;
   }

function onClickMoviesSliderCard() {
  // const sliderList = document.querySelector('#glide__slides');
  sliderList.addEventListener('click', event => {
    searchIdforMovie(event);
  });
}