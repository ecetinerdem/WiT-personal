import favoriteMovies from './assets/favoriteMovies.png';
import imdbImage from './assets/imdbDataBase.png'; 
import gridImage from './assets/grid.png'; 

export const projectsData = (translations) => [
  {
    title: "Favorite Movies",
    image: favoriteMovies,
    description: translations.projectDescriptionOne,
    technologies: ["react", "redux", "axios"],
    githubLink: "https://github.com/ecetinerdem/fsweb-s10g2-redux-filmler-solution",
    viewSiteLink: "https://fsweb-s10g2-redux-filmler-solution-cyan.vercel.app/movies"
  },
  {
    title: "IMDB Database",
    image: imdbImage,
    description: translations.projectDescriptionTwo,
    technologies: ["react", "redux", "axios"],
    githubLink: "https://github.com/ecetinerdem/fsweb-s10g3-redux-watchlist-solution",
    viewSiteLink: "https://fsweb-s10g3-redux-watchlist-solution-ten-gilt.vercel.app/"
  },
  {
    title: "Grid",
    image: gridImage,
    description: translations.projectDescriptionThree,
    technologies: ["react", "redux", "axios"],
    githubLink: "https://github.com/ecetinerdem/FSWeb-S9-Sprint-Challenge-solution",
    viewSiteLink: "https://fs-web-s9-sprint-challenge-solution-lake.vercel.app/"
  }
];






