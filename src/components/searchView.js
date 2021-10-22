import React from 'react'

const searchView = (props) => {
    const search=`./covidStatewise/?${props.state}`;
    return (
        
        <>
        <div>
            <card>
                <h1>{search.confirm}</h1>
                <p>{search.death}</p>
                <p>{search.recovery}</p>
            </card>
        </div>
        </>
    )
}

export default searchView
