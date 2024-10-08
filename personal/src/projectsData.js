import favoriteMovies from './assets/favoriteMovies.png';
import imdbImage from './assets/imdbDataBase.png'; // Make sure the import name is correct
import gridImage from './assets/grid.png'; // Make sure the import name is correct

export const projectsData = [
    {
      title: "Favorite Movies",
      image: favoriteMovies, // Correct variable name
      description: "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package, and the git repository makes any type of customization to code and themes possible.",
      technologies: ["react", "redux", "axios"],
      githubLink: "https://github.com/ecetinerdem/fsweb-s10g2-redux-filmler-solution",
      viewSiteLink: "https://fsweb-s10g2-redux-filmler-solution-cyan.vercel.app/movies"
    },
    {
      title: "IMDB Database",
      image: imdbImage, // Use imdbImage instead of imdbDataBase
      description: "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package, and the git repository makes any type of customization to code and themes possible.",
      technologies: ["react", "redux", "axios"],
      githubLink: "https://github.com/ecetinerdem/fsweb-s10g3-redux-watchlist-solution",
      viewSiteLink: "https://fsweb-s10g3-redux-watchlist-solution-ten-gilt.vercel.app/"
    },
    {
      title: "Grid",
      image: gridImage, // Use gridImage instead of grid
      description: "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package, and the git repository makes any type of customization to code and themes possible.",
      technologies: ["react", "redux", "axios"],
      githubLink: "https://github.com/ecetinerdem/FSWeb-S9-Sprint-Challenge-solution",
      viewSiteLink: "https://fs-web-s9-sprint-challenge-solution-lake.vercel.app/"
    }
  ];
