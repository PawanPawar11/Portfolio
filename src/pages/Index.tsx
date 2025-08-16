import { Header } from "@/components/Portfolio/Header"
import { Hero } from "@/components/Portfolio/Hero"
import { Projects } from "@/components/Portfolio/Projects"
import { Contact } from "@/components/Portfolio/Contact"
import { Footer } from "@/components/Portfolio/Footer"

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 max-w-4xl">
        <Hero />
        <Projects />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
