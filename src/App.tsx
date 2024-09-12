import BenefitsSection from "./layouts/BenefitsSection";
import HomeSection from "./layouts/HomeSection";
import PageHeader from "./layouts/PageHeader";
import MouseCursor from "./components/MouseCursor";

function App() {
  return (
    <div className="app h-auto min-h-max w-screen bg-gradient-gray">
      {/* <MouseCursor /> */}
      <PageHeader />
      <HomeSection />
      <BenefitsSection />
    </div>
  );
}

export default App;
