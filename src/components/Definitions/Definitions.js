import React from 'react';
import './Definitions.css';

export const Definitions = ({ word, meanings }) => {
  return (
    <div className='meanings'>
        {
            word === "" ? (
            <span className='subTitle'> Start by typing a word in search</span> 
            ) : (
                meanings.map((meaning) => 
                    meaning.meanings.map((item) => 
                        item.definitions.map((definition) =>
                            <div className='singleMeaning'>
                                {definition.definition}
                
                                <hr style={{ backgroundColor: "black", width: "100%" }} />

                                {
                                    definition.example && (
                                        <span>
                                           <b> Example : </b> {definition.example}
                                        </span>
                                    )
                                }

                            </div>
                    )))
                )
        }
    </div>
  )
}
