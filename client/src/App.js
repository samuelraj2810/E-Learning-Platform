import Banner from"./Components/Banner"
import './App.css';
import Course from "./Components/Course";
import Subscriptions from "./Components/Subscriptions";
import Testimonial from "./Components/Testimonials";
import Nav from "./Components/Nav";

function App() {
  return (
    <main className="font-Poppins">
      <Nav/>
      <div>
      <Banner/>
      <Course/>
      <Subscriptions/>
      <Testimonial/>
      </div>
    </main>
  );
}

export default App;
