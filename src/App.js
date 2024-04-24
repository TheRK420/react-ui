import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Body from "./Components/Body";
import Text from "./Components/Text";
import Footer from "./Components/Footer";

function App() {
  return (
    // <div className="App">
    <div>
      <Header />

      <div className="flexprop" style={{
        display: "flex",
      }}>
        <Navbar name="HOME" />
        <Navbar name="ABOUT"/>
        <Navbar name="SERVICES"/>
        <Navbar name="FAQ"/>
        <Navbar name="CONTACT"/>
      </div>
      <div class="image">
      <img src="https://www.wholefamilyliving.com/wp-content/uploads/2020/01/Improve-Family-Wellness-FB.png"></img>
      </div>
      <div class="main">
        <Body />
      </div>
      <div class="text">
        <Text />
      </div>
      <br /> <br />
      <div class="footer">
        <Footer />
      </div>
      <div class="footWidth">
        <p>Powered by Website.com</p>
      </div>
    </div>
   
  );
}

export default App;