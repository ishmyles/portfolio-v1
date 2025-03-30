import HomeSection from "./HomeSection";
import AboutSection from "./AboutSection";
import ProjectsSection from "./ProjectsSection";

export default function MainContent() {
    return (
        <main className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64 2xl:px-80">
            <HomeSection />
            <AboutSection />
            <ProjectsSection />
        </main>
    );
};