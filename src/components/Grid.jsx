import React, {createRef} from 'react'

const NUMBERS = '1234567890';

const Grid = () => {
    
    return (
        <div>
            
        </div>
    )
}

const Cell = ({keyword, nombre}) => {
    return(<div key={{keyword}}> <img alt={{nombre}}/></div>)
}

export default Grid
