import BenefitsSection from "./layouts/BenefitsSection";
import HomeSection from "./layouts/HomeSection";
import PageHeader from "./layouts/PageHeader";
import MouseCursor from "./components/MouseCursor";
import ClassesSection from "./layouts/ClassesSection";

function App() {
  return (
    <div className="app h-auto min-h-max w-screen bg-gradient-gray">
      <MouseCursor />
      <PageHeader />
      <HomeSection />
      <BenefitsSection />
      <ClassesSection />
    </div>
  );
}

export default App;
