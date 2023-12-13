
import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';
import VipeHeader from './components/VipeHeader';
import Features from './components/Features';
import Integer from './components/Integer';
import Services from './components/Services';
import WordpressPartner from './components/WordpressPartner';
import AgileWordpress from './components/AgileWordpress';
import TeamStars from './components/TeamStars';
import SuccessGuides from './components/SuccessGuides';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Aos from 'aos';
import BackToTop from "./assets/images/png/BackToTop.png";
import { Loader } from "./components/IconImg";

function App() {
  // -----------------------Aos-------------------------
  useEffect(() => {
    AOS.init(
      {
        once: true,
        duration: 1200,
      }
    );
    Aos.refresh()
  });
  // ----------------backToTop----------------
  const top = () => {
    document.documentElement.scrollTop = 0;
  };
  const [backToTop, setbackToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 300) {
        setbackToTop(true);
      } else {
        setbackToTop(false);
      }
    });
  }, []);
  // -------------------preloader------------------------
  document.getElementById('root')
  const [screenLoading, setScreenLoading] = useState(false);
  useEffect(() => {
    setScreenLoading(true);
    setTimeout(() => {
      setScreenLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      {screenLoading ? (
        <Loader />
      ) : (
        <>
          <div className='overflow-hidden'>
            <VipeHeader />
            <Features />
            <Integer />
            <Services />
            <WordpressPartner />
            <AgileWordpress />
            <TeamStars />
            <SuccessGuides />
            <Footer />
          </div>
          <div className={backToTop ? " fixed bottom-4 end-4 rounded-[50%] w-12 h-12 bg-[#6022EA] cursor-pointer flex justify-center items-center z-10" : "hidden"} onClick={() => top()}>
            <img src={BackToTop} alt='BackToTop' />
          </div>
        </>
      )}
    </>
  );
}

export default App;
