import Banner from"./Components/Banner"
import './App.css';
import Course from "./Components/Course";
import Subscriptions from "./Components/Subscriptions";
import Testimonial from "./Components/Testimonials";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";

function App() {
  return (
    <main className="font-Poppins">
      <Nav/>
      <div>
      <Banner/>
      <Course/>
      <Subscriptions/>
      <Testimonial/>
      <Footer/>
      </div>
    </main>
  );
}

export default App;
