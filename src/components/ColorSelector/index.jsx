import React, { useEffect, useState } from 'react'

const ColorSelector = () => {
    const [showColor, setshowColor] = useState('red');
    const style= {
        color:showColor
    }
    const colorchanger = event =>{
        setshowColor(event.target.value)
    }
    return (
        <div>
            <h1 style={style}>Color Selector Test</h1>
            <label>Color</label>
            <select onChange={colorchanger}>
                <option value="red">Red</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
            </select>
        </div>
    )
}

export default ColorSelector
