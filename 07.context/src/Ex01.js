import React, { useState } from 'react'
import ColorList from './components/ColorList'
import ColorResult from './components/ColorResult'
import './App.css';
import { ColorContext } from './content/ColorContext';

const Ex01 = () => {
    const [color, setColor] = useState(null);
    return (
        <ColorContext.Provider value={{ color, setColor }}>
            <div id='color-main'>
                <ColorList />
                <hr />
                <ColorResult />
            </div>
        </ColorContext.Provider>
    )
}

export default Ex01