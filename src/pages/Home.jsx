import React from 'react'
import './Home.css'

const Home = () => {
    return (
        <div className="container">
            <div>
            <form>
                <p>
                <label>
                    <p>Usuario:</p>
                    <input type="text"/>
                </label>
                </p>

                <p>
                <label>
                    <p>Contraseña:</p>
                    <input type="text"/>
                </label>
                </p>
            </form>
            </div>
        </div>
    )
}

export default Home
