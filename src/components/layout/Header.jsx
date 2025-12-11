import { SiGithub, SiLinkedin, SiGmail } from "react-icons/si";
import IconLink from "../ui/IconLink";


export default function Header({ accent="#F43F5E" }) {
    return(
        <header
            className="sticky top-0 z-50 border-b border-white/10 backdrop-blur supports-[backdrop-filter]:bg-black/30"
        >
            <section
                className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4"
            >
                <div
                    className="flex items-center gap-3"
                >
                    <div 
                        className="h-2 w-2 animate-pulse rouded-full"
                        style={{ backgroundColor: accent }}
                    />
                    <a
                        href="#"
                        className="font-semibold"
                    >
                        Nene//AI//Fullstack
                    </a>
                </div>

                <nav
                    className="hidden gap-6 text-sm md:flex"
                >
                    {[
                        { t: "Proyectos", href: "/#proyectos" },
                        { t: "Sobre mi", href: "/#sobre" },
                        { t: "Tecnologías", href: "/#tecnologias" },
                        { t: "Certificaciones", href: "/#certificaciones" },
                        { t: "Contacto", href: "/#contact" },
                    ].map((l) => (
                        <a 
                            key={l.t}
                            href={l.href}
                            className="text-neutral-400 hover:text-white"
                        >
                            {l.t}
                        </a>
                    ))}
                </nav>

                <div className="flex items-center gap-2">
                    <IconLink
                        href="https://github.com/Cristian-RC"
                        ariaLabel="Github"
                        accent={accent}
                        hoverColor={"#24292E"}
                    >
                        <SiGithub className="h-4 w-4"/>
                    </IconLink>

                    <IconLink
                        href="https://www.linkedin.com/in/cristian-rubio-ai-dev"
                        ariaLabel="Linkedin"
                        accent={accent}
                        hoverColor={"#0A66C2"}
                    >
                        <SiLinkedin className="h-4 w-4"/>
                    </IconLink>

                    <IconLink
                        href="mailto:cristian.rubio@codeus.mx"
                        ariaLabel="Email"
                        accent={accent}
                        hoverColor={"#EA4335"}
                    >
                        <SiGmail className="h-4 w-4"/>
                    </IconLink>

                    <a 
                        href="#"
                        className="rounded-lg px-3 py-0.5 text-md text-black shadow"
                        style={{ backgroundColor: "#FD7485" }}
                    >
                        CV
                    </a>
                </div>
            </section>
        </header>
    );
}