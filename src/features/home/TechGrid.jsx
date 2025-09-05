import SectionTitle from "@/components/ui/SectionTitle";
import TechPill from "@/components/ui/TechPill";
import Section from "@/components/layout/Section";
import { TECH_GROUPS } from "@/data/tech";


export default function TechGrid({ accent="#F43F5E" }) {
    return(
        <Section id={"tecnologias"}>
            <div className="mx-auto max-w-6xl px-4 py-14">
                <SectionTitle
                    accent={accent}
                    title={"Tecnologías"}
                />
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {TECH_GROUPS.map((g) => (
                        <section 
                            key={g.group} 
                            className="rounded-2xl border border-white/10 bg-white/5 p-3"
                        >
                            <h4
                                className="mb-3 font-semibold text-white"
                                style={{ color: accent }}
                            >
                                {g.group}
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {g.items.map(({ name, Icon }) => (
                                    <TechPill key={name}>
                                        <Icon className="h-4 w-4"/>
                                        <span className="ml-1">{name}</span>
                                    </TechPill>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>
            </div>
        </Section>
    );
}