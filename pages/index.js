import Contact from "../components/Contact";
import Skills from "../components/Skills";
import HomePage from "../components/HomePage";
import Me from "../components/Me";
import Portfolio from "../components/Portfolio";

export default function Home() {
  return (
    <div>
      <HomePage />
      <Portfolio />
      <Skills />
      <Me />
      <Contact />
    </div>
  );
}
