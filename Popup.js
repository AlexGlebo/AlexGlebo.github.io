import { select } from 'async'
import React from 'react'

function Popup({selected, closePopup}) {
    return (
       <section className="popup">
            <div className="content">
                <h2>{selected.Title} <span>({selected.Year})</span></h2>
                <p className="rating">Rating: {selected.imdbRating}</p>
                <div className="plot">
                    <img src={selected.Poster} />
                    <p>{selected.Plot}</p>
                </div>
                <div className="director">
                    <p>Directed By: {selected.Director}</p>
                </div>
                <div className="genre">
                    <p>Genre(s): {selected.Genre}</p>
                </div>
                <div className="runtime">
                    <p>Runtime: {selected.Runtime}</p>
                </div>
                <button className="close" onClick={closePopup}>Close</button>
            </div>
       </section>
    )
}

export default Popup
