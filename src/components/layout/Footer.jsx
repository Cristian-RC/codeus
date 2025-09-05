import { SiGithub, SiLinkedin, SiGmail } from "react-icons/si";
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
                </div>
            </section>
        </footer>
    );
}