import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import HeroSection from "./layouts/HeroSection";
import TaskBoard from "./layouts/TaskBoard";

const App = () => {
  return (
    <div className="bg-[#191D26] font-mono text-white relative">
      <Header />
      <div className="flex flex-col justify-center items-center">
        <HeroSection />
        <TaskBoard />
      </div>
      <Footer />
    </div>
  );
};

export default App;
