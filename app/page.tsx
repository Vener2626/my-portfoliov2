import Sidebar from "./components/Sidebar";
import MobileNav from "./components/MobileNav";
import Hero from "./components/Hero";
import About from "./components/About";
import Process from "./components/Process";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ScrollProgress from "./components/ScrollProgress";

export default function Home() {
  return (
    <main className="relative bg-ink">
      <ScrollProgress />
      <MobileNav />
      <Sidebar />
      <div className="lg:ml-[320px]">
        <Hero />
        <About />
        <Process />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
