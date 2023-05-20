import useMediaQuery from "./hooks/useMediaQuery";
import { useEffect, useState } from "react";
import Navbar from "./scenes/Navbar";
import DotGroup from "./scenes/DotGroup"
import Landing  from './scenes/Landing'
import LineGradient from "./components/LineGradient";
import Myskills from "./scenes/Myskills"
import MyProjects from "./scenes/MyProjects"
import Contact from "./scenes/Contact"
function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const isAboveMediumScreens = useMediaQuery("(min-width : 1060px)");
  const [isTopOfPage, setIsTopOfPage]  = useState(true);


useEffect(() => {
  const handleScroll = () => {
    if(window.scrollY === 0 ) setIsTopOfPage(true);
    if(window.scrollY !== 0 ) setIsTopOfPage(false);
  }
  window.addEventListener("scroll",handleScroll);
  return () => window.removeEventListener("scroll", handleScroll)
 },[])


  return (
    <div className="app bg-deep-blue">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />

      
    <div className="w-5/6 mx-auto md:h-full">
      {isAboveMediumScreens && (
        <DotGroup 
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        />
       
      )}
       <Landing setSelectedPage={setSelectedPage } />
      </div>

      <LineGradient />
      <div className="w-5/6 mx-auto md:h-full" >
        <Myskills />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto " >
        <MyProjects />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto " >
        <Contact />
      </div>
    </div>

  );
}

export default App;
