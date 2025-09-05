import Section from "@/components/layout/Section";


export default function ContactCTA() {
    return(
        <Section id={"contact"}>
            <div className="mx-auto max-w-6xl px-4 py-14">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center ">
                    <h3 className="mb-2 text-2xl font-semibold text-white">¿Listo para colaborar juntos?</h3>
                    <p className="mb-5 text-neutral-300">Envía un mensaje y definamos alcance, stack y entregables.</p>
                    <a 
                        href="mailto:cristian.rubio@codeus.mx"
                        className="rounded-lg px-4 py-2 text-black"
                        style={{ backgroundColor: "#FD7485" }}
                    >
                        Enviar email
                    </a>
                </div>
            </div>
        </Section>
    );
}