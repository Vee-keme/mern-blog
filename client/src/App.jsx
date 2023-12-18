import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import "./App.css";
import image from "./assets/3.png";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main>
        <header>
          <a href=" " className="logo">
            My Blog
          </a>

          <nav>
            <a href="">Login</a>
            <a href="">Register</a>
          </nav>
        </header>

        <div className="post">
          <div className="image">
            <img src={image} alt="post image" />
          </div>

          <div className="texts">
            <h2>full-house battery backup coming later this year</h2>
            <p className="info">
              <a href="" className="author">
                Precious Velia
              </a>
              <time>2023-12-12 12:12</time>
            </p>
            <p className="summary">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum
              adipisci expedita obcaecati iste voluptates nulla, quam amet?
              Architecto ad, aliquam autem officiis, aut temporibus nisi in,
              fugit sint aspernatur natus!
            </p>
          </div>
        </div>

        <div className="post">
          <div className="image">
            <img src={image} alt="post image" />
          </div>

          <div className="texts">
            <h2>full-house battery backup coming later this year</h2>
            <p className="info">
              <a href="" className="author">
                Precious Velia
              </a>
              <time>2023-12-12 12:12</time>
            </p>
            <p className="summary">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum
              adipisci expedita obcaecati iste voluptates nulla, quam amet?
              Architecto ad, aliquam autem officiis, aut temporibus nisi in,
              fugit sint aspernatur natus!
            </p>
          </div>
        </div>

        <div className="post">
          <div className="image">
            <img src={image} alt="post image" />
          </div>

          <div className="texts">
            <h2>full-house battery backup coming later this year</h2>
            <p className="info">
              <a href="" className="author">
                Precious Velia
              </a>
              <time>2023-12-12 12:12</time>
            </p>
            <p className="summary">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum
              adipisci expedita obcaecati iste voluptates nulla, quam amet?
              Architecto ad, aliquam autem officiis, aut temporibus nisi in,
              fugit sint aspernatur natus!
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
