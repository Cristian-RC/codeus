import SectionTitle from "@/components/ui/SectionTitle";
import ProjectCard from "@/components/ui/ProjectCard";
import Section from "@/components/layout/Section";
import { projects } from "@/data/projects";


export default function ProjectsGrid({ accent="#F43F5E" }) {
    return(
        <Section id="proyectos">
            <div className="mx-auto max-w-6xl px-4 py-14">
                <SectionTitle
                    accent={accent}
                    title={"Proyectos"}
                    actionLabel={"Ver Todo"}
                    actionHref={"/projects"}
                />
                <div
                    className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                >
                    {projects.map((p) => 
                        <ProjectCard
                            key={p.title}
                            accent={accent}
                            {...p}
                        />)}
                </div>
            </div>
        </Section>
    );
}