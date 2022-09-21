var dealta = require("../assets/dealta.png");
var dogbreed = require("../assets/dogbreed.png");
var dealtaApi = require("../assets/deAlta-api.png");
const dataProjects = [
  {
    id: 1,
    title: "De alta",
    type: "website",
    description: "veja as músicas mais ouvidas no mundo e no brasil",
    link: "https://dealta.vercel.app",
    thumbnail: dealta,
  },
  {
    id: 2,
    title: "Doog Breed",
    type: "website",
    description: "projeto com página de registrar e listagem",
    link: "https://dogbreed-rose.vercel.app/",
    thumbnail: dogbreed,
  },

  {
    id: 3,
    title: "API REST",
    type: "backend",
    description: "api rest com Node.js e Express.js",
    link: "https://dealta-api.herokuapp.com/",
    thumbnail: dealtaApi,
  },
];

export default dataProjects;
