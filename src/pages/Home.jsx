import Hero from "@/features/home/Hero";
import AboutMe from "@/features/home/AboutMe";
import ProjectsGrid from "@/features/home/ProjectsGrid";
import TechGrid from "@/features/home/TechGrid";
import Certifications from "@/features/home/Certifications";
import ContactCTA from "@/features/home/ContactCTA";


export default function Home() {
    const accent = "#F43F5E";

    return(
        <>
            <Hero accent={accent}/>
            <AboutMe accent={accent}/>
            <ProjectsGrid accent={accent}/>
            <TechGrid accent={accent}/>
            <Certifications accent={accent}/>
            <ContactCTA accent={accent}/>
        </>
    );
}