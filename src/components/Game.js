import React, { Fragment, useState,useEffect } from 'react'



import Board from './Board'



const Game = () => {

    const [ height, setHeight] = useState(10)

    const [ width, setWidth ]= useState(10)

    const [ bombs, setBombs ]= useState(10)

    const [ flags, setFlags ] = useState(bombs)

    

    return (

        <Fragment>

            <Board height={height} width={width} bombs={bombs} flags={flags} setFlags={setFlags} />

        </Fragment>

    )

}



export default Game