import React from 'react'

const ListItem = ({item, index, onDelete}) => {
    return (
        <li key={item}>{item}<button onClick={()=>onDelete(index)}>del</button></li>
    )
}

export default ListItem
