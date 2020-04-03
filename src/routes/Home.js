import React from "react";
import moviessloth from "./movie_sloth.json";
import Movie from "../components/Movie";
import "./Home.css";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">로딩중 ᕙ༼ ≖ᴥ≖༽ᕗ</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map(movie => {
              return (
                <Movie
                  id={movie.id}
                  title={movie.title}
                  subtitle={movie.subtitle}
                  comeout={movie.comeout}
                  genres={movie.genres}
                  summary={movie.summary}
                  poster={movie.poster}
                  link={movie.link}
                />
              );
            })}
          </div>
        )}
      </section>
    );
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ movies: moviessloth.movies, isLoading: false });
    }, 1000);
  }
}

export default App;
