import SectionTitle from "@/components/ui/SectionTitle";
import Section from "@/components/layout/Section";
import { certs } from "@/data/certs";


export default function Certifications({ accent="#F43F5E" }) {
    return(
        <Section id={"certificaciones"}>
            <div className="mx-auto max-w-6xl  px-4 py-14">
                <SectionTitle
                    accent={accent}
                    title={"Certificaciones"}
                />
                <section className="grid gap-6 md:grid-cols-2">
                    {certs.map((c) => (
                        <a 
                            key={c.name}
                            href={c.href}
                            className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
                            target="_blank" 
                        >
                            <div className="shrink-0">    
                                {c.img ? (
                                    <img 
                                        src={c.img}
                                        alt={`Badge ${c.name}`}
                                        width={48}
                                        height={48}
                                        loading="lazy"
                                        decoding="async"
                                        className="h-48 w-48 rounded-lg ring-1 ring-inset ring-white/10"
                                    />
                                ) : (
                                    <div className="h-12 w-12 rounded-lg ring-1 ring-inset ring-white/10 object-contain"/>
                                )}
                            </div>
                            <div className="flex-1">
                                <div className="text-white">{c.name}</div>
                                <div className="text-sm text-neutral-400">{c.org} • {c.year}</div>
                            </div>
                        </a>
                    ))}
                </section>
            </div>
        </Section>
    )
}