import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Weather defaultCity="New York"/>
      <p>
        This app was coded by Ellie Kubo and is open-sourced on{" "}
        <a
          href="https://github.com/Ellie575/react-app"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
      </p>
    </div>
  );
}

export default App;
