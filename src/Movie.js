import React from "react"
import PropType from "prop-types"

function Movie({ code, title, year, rank, rankOldAndNew }) {
  return <h4>{title}</h4>
}

Movie.PropType = {
  code: PropType.string.isRequired,
  title: PropType.string.isRequired,
  year: PropType.string.isRequired,
  rank: PropType.string.isRequired,
  rankOldAndNew: PropType.string.isRequired,
}

export default Movie
