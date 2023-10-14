import React, {FormEvent, useState} from "react";

import './ComponentTestRodzic.css'

export const ComponentTestRodzic = () => {
    const [backgroundColor, setBackgroundColor] = useState('#ffffff');
const [borderColor, setBorderColor] = useState('black')
    return (
        <>
            <div className="ColorBox__box"
                 style={{backgroundColor,borderColor}}/>
            <div className="Checkbox">
                <label>
                    <input type="radio"
                           name={borderColor}
                           value="#e26060"
                           onChange={event => setBorderColor(event.target.value)}/>Czerwony</label>
                <label><input type="radio"
                              value='#3cb642ff'
                              onChange={event => setBackgroundColor(event.target.value)}/>Zielony</label>
                <label><input type="radio"
                              value='blue'
                              onChange={event => setBackgroundColor(event.target.value)}/>Niebieski</label>
                <input type="text"
                       value={backgroundColor}
                       onChange={event => setBackgroundColor(event.target.value)}/>
            </div>
            {/*<select*/}
            {/*value={backgroundColor}*/}
            {/*onChange={event => setBackgroundColor(event.target.value)}*/}
            {/*>*/}
            {/*    <option value="#ff0000">Czerwony</option>*/}
            {/*    <option value="#00ff00">Zielony</option>*/}
            {/*    <option value="#0000ff">Niebieski</option>*/}
            {/*</select>*/}


        </>
    )
}