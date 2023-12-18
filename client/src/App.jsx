import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import "./App.css";

import Posts from "./components/Post";
import Post from "./components/Post";
import Header from "./Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main>
        <Header />

        <Post />
        <Post />
        <Post />
      </main>
    </>
  );
}

export default App;
