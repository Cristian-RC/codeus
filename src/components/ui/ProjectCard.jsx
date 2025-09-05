import Badge from "./Badge";

export default function ProjectCard({ accent="#F43F5E", title, tags=[], description="", demo="#", caseStudy="#" }) {
    return(
        <article
            className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-sm transition hover:bg-white/10"
        >
            <div className="h-40 w-full bg-gradient-to-br from-white/10 to-white/0 ring-1 ring-inset ring-white/10" />
            <section 
                className="space-y-3 p-5"
            >
                <h3
                    className="text-lg font-semibold text-white"
                >
                    {title}
                </h3>
                <p
                    className="text-sm text-neutral-300"
                >
                    {description}
                </p>
                <div
                    className="flex flex-wrap gap-2"
                >
                    {tags.map((t) => <Badge
                        key={t}
                        accent={accent}
                    >
                        {t}
                    </Badge>
                    )}
                </div>
                <div
                    className="flex gap-2 pt-2"
                >
                    <a
                        href={caseStudy}
                        className="rounded-lg border border-white/15 px-3 py-1.5 text-sm text-neutral-200 hover:bg-white/10"
                    >
                        Ver Caso
                    </a>
                    <a 
                        href={demo}
                        className="rounded-lg px-3 py-1.5 text-sm text-black"
                        style={{ backgroundColor: "#FD7485" }}
                    >
                        Demo
                    </a>
                </div>
            </section>
        </article>
    );
}