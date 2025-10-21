import "./App.css";
import Navbar from "./components/navbar";
import HeroCarousel from "./components/HeroCarousel";
import LetterSection from "./components/LetterSection";
import InvitationSection from "./components/InvitationSection";

function App() {
  return (
    <>
      <Navbar />
      <HeroCarousel />
      <LetterSection />
      <InvitationSection />
    </>
  );
}

export default App;
