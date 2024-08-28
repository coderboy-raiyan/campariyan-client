import BestSeller from "./components/BestSeller";
import Categories from "./components/Categories";
import Hero from "./components/Hero";

function Home() {
  return (
    <div>
      <Hero />
      <Categories />
      <BestSeller />
    </div>
  );
}

export default Home;
