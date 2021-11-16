/* global axios */

axios.get("http://localhost:3000/api/actors").then(function (response) {
  var actors = response.data;
  console.log(actors);
});

var app = new Vue({
  el: "#app",
  import: axios from "axios",    
  data: function () {
    message: "Hello from JavaScript!";
    movies: ["Gettysburg", "Beauty and the Beast", "Star Wars I", "Star Wars II"];
    newMovieParams: "";
  },
  methods: {
    createMovie: function () {
      axios
        .post("http://localhost:3000/movies", this.newMovieParams)
        .then((response) => {
          console.log("Successful addition!", response.data);
          this.movies.push(response.data);
        })
        .catch((error) => console.log(error.response));
    },
  },
  moviesList: function () {
    axios.get("http://localhost:3000/movies").then((response) => {
      console.log(response.data);
  }
});
