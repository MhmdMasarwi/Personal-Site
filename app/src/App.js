import logo from "./logo.svg";
import "./App.css";
import AboutUs from "./Components/AboutsUs/AboutUs";
import MainPage from "./Components/MainPage/MainPage";
import Whatsapp from "./Components/Whatsapp/Whatsapp";
function App() {
  return (
    <div className="App">
      <MainPage />
      <AboutUs />
      <Whatsapp/>
    </div>
  );
}

export default App;