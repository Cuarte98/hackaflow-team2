import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="container">
      <div className="loginFormWrapper">
        <form>
          <p>
            <label>
              <p className="letter-color">Usuario:</p>
              <input type="text" />
            </label>
          </p>

          <p>
            <label>
              <p className="letter-color">Contraseña:</p>
              <input type="text" />
            </label>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Home;
