import React from 'react'
import Button from '../components/Button'
import './Auth.css'
import KeyCodes from '../utils/keycodes'

const images = KeyCodes.map(k => <div key={k.id} id={k.id}>{k.id}</div>)

const Auth = () => {
    return (
        <div className="auth-container">
            <div className="grid">
                {images}
            </div>
            <div className="select-container">
                    <div className="input-box">
                        <input type="number"/>
                        <input type="number"/>
                        <input type="number"/>
                    </div>
                <Button>Submit</Button>
                </div>
        </div>
    )
}

export default Auth