import Navbar from "../src/components/Navbar";
import Hero from "../src/components/Hero";
import Card from "../src/components/Card";
import data from "../src/components/data";
import "../src/css/main.css";

export default function App() {
  const cards = data.map((item) => {
    return (
      <Card
        img={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        title={item.title}
        price={item.price}
      />
    );
  });

  return (
    <div>
      <Navbar />
      {/* <Hero /> */}
      <section className="cards-list">{cards}</section>
    </div>
  );
}
