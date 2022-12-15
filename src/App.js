import { Routes, Route } from "react-router-dom";

import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import Activities from "./routes/activities/activities.component";
import Newsletter from "./routes/newsletter/newsletter.component";
import CookieInfo from "./routes/cookie-info/cookie-info.component";
import Volunteer from "./routes/volunteer/volunteer.component";
import About from "./routes/about/about.component";
import Login from "./routes/login/login.component";
import SlidingCard from "./components/sliding-card/sliding-card.component";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/newsletter" element={<Newsletter />} />
        <Route path="/cookie-info" element={<CookieInfo />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/card" element={<SlidingCard />} />
      </Route>
    </Routes>
  );
}

export default App;
