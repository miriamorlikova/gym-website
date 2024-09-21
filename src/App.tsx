import BenefitsSection from "./layouts/BenefitsSection";
import HomeSection from "./layouts/HomeSection";
import PageHeader from "./layouts/PageHeader";
import MouseCursor from "./components/MouseCursor";
import ClassesSection from "./layouts/ClassesSection";
import ContactUsSection from "./layouts/ContactUsSection";
import Footer from "./layouts/Footer";
import { useEffect, useState } from "react";

export enum SelectedPageValueType {
  Home = "home",
  Benefits = "benefits",
  OurClasses = "ourclasses",
  ContactUs = "contactus",
}

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPageValueType>(
    SelectedPageValueType.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPageValueType.Home);
      }
      if (window.scrollY !== 0) {
        setIsTopOfPage(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app h-auto min-h-max w-screen bg-gradient-gray">
      <MouseCursor />
      <PageHeader
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <HomeSection setSelectedPage={setSelectedPage} />
      <BenefitsSection setSelectedPage={setSelectedPage} />
      <ClassesSection setSelectedPage={setSelectedPage} />
      <ContactUsSection setSelectedPage={setSelectedPage} />
      <Footer />
    </div>
  );
}

export default App;
