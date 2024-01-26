import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import TaskContainer from "./components/TaskContainer/TaskContainer";

const App = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center">
        <HeroSection />
        <TaskContainer />
      </div>
      <Footer />
    </>
  );
};

export default App;
