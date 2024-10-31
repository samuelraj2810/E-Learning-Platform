import Banner from"./Components/Banner"
import './App.css';
import Course from "./Components/Course";
import Subscriptions from "./Components/Subscriptions";
import Testimonial from "./Components/Testimonials";

function App() {
  return (
    <div className="App font-Poppins">
      <Nav/>
      <Banner/>
      <Course/>
      <Subscriptions/>
      <Testimonial/>
    </div>
  );
}

export default App;
