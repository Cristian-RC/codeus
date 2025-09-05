import { Github, Linkedin, Mail } from "lucide-react";
import IconLink from "../ui/IconLink";


export default function Footer({ accent="#F43F5E" }) {
    return(
        <footer
            className="border-t border-white/10"
        >
            <section
                className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 text-neutral-400 md:flex-row"
            >
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} nene - Fullstack & AI
                </p>
                <div className="flex items-center gap-3">
                    <IconLink
                        href="https://github.com/Cristian-RC"
                        ariaLabel="Github"
                        accent={accent}
                    >
                        <Github className="h-4 w-4"/>
                    </IconLink>

                    <IconLink
                        href="https://www.linkedin.com/in/cristian-rubio-ai-dev"
                        ariaLabel="Linkedin"
                        accent={accent}
                    >
                        <Linkedin className="h-4 w-4"/>
                    </IconLink>

                    <IconLink
                        href="mailto:cristian.rubio@codeus.mx"
                        ariaLabel="Email"
                        accent={accent}
                    >
                        <Mail className="h-4 w-4"/>
                    </IconLink>
                </div>
            </section>
        </footer>
    );
}