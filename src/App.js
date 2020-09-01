import React from "react"
import axios from "axios"
import Movie from "./Movie"
// import PropTypes from "prop-types"

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  }

  getMovies = async () => {
    const {
      data: {
        boxOfficeResult: { dailyBoxOfficeList },
      },
    } = await axios.get(
      "http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=430156241533f1d058c603178cc3ca0e&targetDt=20120101"
    )
    this.setState({ movies: dailyBoxOfficeList, isLoading: false })
    console.log(this.state.movies)
  }

  componentDidMount() {
    this.getMovies()
  }

  render() {
    const { isLoading, movies } = this.state
    return (
      <div>
        {isLoading
          ? "Loading..."
          : movies.map((movie) => {
              console.log(movie)
              return (
                <Movie
                  key={movie.movieCd}
                  code={movie.movieCd}
                  title={movie.movieNm}
                  year={movie.openDt}
                  rank={movie.rank}
                  rankOldAndNew={movie.rankOldAndNew}
                />
              )
            })}
      </div>
    )
  }
}

export default App
