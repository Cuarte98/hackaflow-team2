import React, { useState } from 'react'
import Button from '../components/Button'
import './Auth.css'
import KeyCodes from '../utils/keycodes'
import { sendAuthCodeFatality } from "../services/auth-code-fatality-client"

const images = KeyCodes.map(k => (
    <img src={k.path} key={k.id} id={k.id} alt="" />
))

const Auth = () => {
    const [firstInput, setFirstInput] = useState(1)
const [secondInput, setSecondInput] = useState(1)
const [thirdInput, setThirdInput] = useState(1)
    
    const handleSubmit = () => {
        console.log("submit")
    }

    const handleClear = () => {
        setFirstInput(undefined);
        setSecondInput(undefined);
        setThirdInput(undefined);
    }

    return (
        <div className="auth-container">
            <div className="grid">
                {images}
            </div>
            <div className="select-container">
                <div className="input-box">
                    <input type="number" min="1" max="9" style={firstInput && {backgroundImage: `url(${KeyCodes[firstInput].path})`}} onChange={(ev) => setFirstInput(ev.target.value)} value={firstInput} />
                    <input type="number" min="1" max="9" style={secondInput && {backgroundImage: `url(${KeyCodes[secondInput].path})`}} onChange={(ev) => setSecondInput(ev.target.value)} value={secondInput} />
                    <input type="number" min="1" max="9" style={thirdInput && {backgroundImage: `url(${KeyCodes[thirdInput].path})`}} onChange={(ev) => setThirdInput(ev.target.value)} value={thirdInput} />
                </div>
            </div>
            <div className="actions">
                <Button className="secondary" onClick={handleClear}>Clear</Button>
                <Button onClick={handleSubmit}>Submit</Button>
            </div>
        </div>
    )
}

export default Auth