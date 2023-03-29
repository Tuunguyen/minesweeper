import React from 'react'

import PropTypes from 'prop-types'

import bomb from './exploded_bomb.png'

import flag from './flagged_bomb.png'



const Tile = ({ tile, onClick, onContextMenu }) => {

    const flag_icon = <img src={flag} alt="flag" />

    const bomb_icon = <img src={bomb} alt="bomb" />



    let {value, isFlagged, isRevealed} = tile



    const tileStyle = {

        backgroundColor: isRevealed && "#C0C0C0",

        cursor: isRevealed && "default"

    }



    const showValue = () => {

        if(!isRevealed) {

            return isFlagged ? flag_icon : null

        }

        if(value === -1)

            return bomb_icon

        else if(value === 0)

            return null

        else return value

    }



    return (

        <div className="tile" onClick={onClick} onContextMenu={onContextMenu} style={tileStyle}>

            {showValue()}

        </div>

    )

}



Tile.propTypes = {

    tile: PropTypes.object.isRequired,

    onClick: PropTypes.func.isRequired,

    onContextMenu: PropTypes.func.isRequired

}



export default Tile