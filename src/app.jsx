import { GlobalProviders } from "@/contexts/global-providers";
import { Navbar } from "@/components/ui/navbar";
import { Profile } from "@/components/features/profile";
import { AboutMe } from "@/components/features/about-me";
import { Experience } from "@/components/features/experience";
import { Projects } from "@/components/features/projects";
import { ThemeSwitcher } from "@/components/ui/theme-switcher";
import { Footer } from "@/components/ui/footer";

function App() {
  return (
    <GlobalProviders>
      <Navbar />
      <main className="bg-background text-text">
        <Profile />
        <AboutMe />
        <Experience />
        <Projects />
      </main>
      <Footer />
      <ThemeSwitcher />
    </GlobalProviders>
  );
}

export default App;
