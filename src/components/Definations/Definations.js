import React from "react"
import "./Definations.css"

const Definations = ({ word, meanings, category }) => {
  return (
    <div className='meanings'>
      {word === "" ? (
        <span className='subTitle'>Start by typing a word in search</span>
      ) : (
        meanings.map((mean) =>
          mean.meanings.map((item) =>
            item.definitions.map((def) => (
              <div
                className='singleMean'
               
              >
                <b>{def.definition}</b>
               
                {def.example && (
                  <span>
                    <b>Example :</b> {def.example}
                  </span>
                )}
                {def.synonyms && (
                  <span>
                    <b>Synonyms :</b> {def.synonyms.map((s) => `${s}, `)}
                  </span>
                )}
              </div>
            ))
          )
        )
      )}
    </div>
  )
}

export default Definations
