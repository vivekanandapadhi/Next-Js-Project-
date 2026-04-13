import Header from "./_shared/Header";
import Hero from "./_shared/Hero";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Header />
      <Hero />
      <div className="absolute  -top-40 -left-40 bg-purple-400/20 h-[500px] w-[500px] blur-[120px] rounded-full"></div>
      <div className="absolute top-20 right-[-200px] bg-pink-400/20 h-[500px] w-[500px] blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-200px] left-1/3 bg-blue-400/20 h-[500px] w-[500px] blur-[120px] rounded-full"></div>
      <div className="absolute top-[200px] left-1/2 bg-sky-400/20 h-[500px] w-[500px] blur-[120px] rounded-full"></div>
    </div>
  );
}
